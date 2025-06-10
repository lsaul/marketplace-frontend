import { useState } from "react";

const useForm = (initial = {}) => {
    const[inputs, setInputs] = useState(initial);
    
    
    const handleChange = (e) => {
        let { value, name, type } = e.target;

        // console.log(e.target);
        //Makes sure that when we get the value from the
        //price input, that we parse it into a number
        //instead of leaving it as a string, which forms always return (even if it's type='number')
        if(type === 'number'){
            value = parseInt(value);
        }
        //handles file uploads 
        //The format destructures the array, and gets the first file
        //an example of multiple might look like this [firstFile, secondFile]
        if(type === 'file'){
            [value] = e.target.files;
        }

        setInputs({
            // copy the existing state
            ...inputs,
            [name]: value,
        });
    }

    const resetForm = () => {
        setInputs(initial);
    }

    const clearForm = () => {
        // gets the inputs (array)
        // maps over it, setting the key, value to an empty string
        // then gets the empty values and turns it back into an object via 'object.fromEntries)
        const blankSlate = Object.fromEntries(Object.entries(inputs).map(([key,value]) => [key, '']))

        setInputs(blankSlate);
    }

     
    //return the things we want to surface from this custom hook
    return {
        inputs, 
        handleChange,
        resetForm,
        clearForm,
    }
}

export default useForm;