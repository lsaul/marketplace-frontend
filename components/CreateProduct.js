// import { useState } from "react";
import gql from "graphql-tag";
import useForm from "../lib/useForm";
import Form from './styles/Form';
import { useMutation } from "@apollo/client";

import DisplayError from './ErrorMessage';
import { ALL_PRODUCTS_QUERY } from "./Products";

import Router from 'next/router';

const CREATE_PRODUCT_MUTATION = gql`
    mutation CREATE_PRODUCT_MUTATION
        (
        #which variables are getting pass, and what types
        # bang! means a required field
        $name: String!
        $description: String!
        $price: Int!
        $image: Upload
        ){
        createProduct(
            data: {
                name: $name
                description: $description
                price: $price
                status: "AVAILABLE"
                photo: {
                    #photo is a related object, so that must be created too
                    create: {
                        image: $image,
                        altText: $name
                    }
                }
            }
        ){
            id
            price
            description
            name
        }
    }
    `;



const CreateProduct = () => {
    // const [name, setName] = useState('');

    //we're not going to use the useState (above), 
    //instead we'll use the useForm hook we wrote
    let { inputs, handleChange, clearForm, resetForm } = useForm({
        image: '',
        name: '',
        price: 0,
        description: ''
    });
    
    //This calls the apollo client useMutation (this is just how it's written)
    const [createProduct, {loading, error, data}] = useMutation(CREATE_PRODUCT_MUTATION, {
        variables: inputs,
        refetchQueries: [{ query: ALL_PRODUCTS_QUERY }]
    });
    
    console.log(createProduct);
    return (
        <Form onSubmit={ async (e)=>{
            e.preventDefault();
            // console.log(inputs);

            const res = await createProduct(); 
            clearForm();

            //go to the new product's page
            Router.push({
                pathname: `/product/${res.data.createProduct.id}`,
            })
        }}>
            <DisplayError  error={error}/>
            <fieldset disabled={loading} aria-busy={loading}>
              <label htmlFor="image">
                    Image
               
                <input 
                    type="file" 
                    id="image" 
                    name="image"  
                    onChange={handleChange} 
                    required
                />
                 </label>

                <label htmlFor="name">
                    Name
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="Name" 
                    value={inputs.name}
                    onChange={handleChange}

                />
                </label>

                <label htmlFor="price">
                    Price
                <input 
                    type="number" 
                    id="price" 
                    name="price" 
                    placeholder="price" 
                    value={inputs.price}
                    onChange={handleChange}
                />
                </label>

                <label htmlFor="description">
                    Description
                <textarea 
                    id="description" 
                    name="description" 
                    placeholder="Description" 
                    value={inputs.description}
                    onChange={handleChange}
                />

                </label>

                <button type="submit">Add Product</button>
            </fieldset>

            {/* <button type="button" onClick={clearForm}>Clear Form</button>
            <button type="button" onClick={resetForm}>Reset Form</button> */}
            </Form>
    )
}

export default CreateProduct;