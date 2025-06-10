import styled, { createGlobalStyle } from "styled-components";
import Header from "./Header";



const GlobalStyles = createGlobalStyle`
    
    -@font-face{
        font-family: 'radnike_next';
        src: url('/static/radnikanext-medium-webfont.woff2');    
        format('woff2');
        font-weight: normal;
        font-style: normal;
    }

    html {
        --red: #ff0000;
        --black: #393939;
        --gray: #3A3A3A;
        // automatically refers to the other spelling just in case
        --grey: var(--gray);
        --lightGray: #e1e1e1;
        --lightGrey: var(--lightGray);
        --offWhite: #ededed;
        --maxWidth: 1000px;
        //boxshadow
        --bs: 0 12px 24px 0 rgba(0,0,0,0.9);

        box-sizing: border-box;
        //We use this % instead of 10px, 
        //because it allows the user to set their font size in browser
        font-size: 62.5%;
    }
    
    //resets box sizing
    //adding border or padding, takes away from size, rather than growing
    *, *:before, *:after {
        box-sizing: inherit;
    }
    
    body {
        font-family: 'radnika_next', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        padding: 0;
        margin: 0;
        //Setting 1.5rem here gives us 15px
        //Since the base is set as 62.5% in the html
        font-size: 1.5rem;
        line-height:2;
    }
    
    a {
        text-decoration: none;
        color: var(--black);
    }
  
    a:hover {
          text-decoration: underline;
    } 
    
    button {
        font-family: 'radnika_next', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
`;

const InnerStyles = styled.div`
    max-width: var(--maxWidth);
    margin: 0 auto;
    padding: 2rem;
`;


const Page = ({children, cool}) =>{
    return(
        <div>
            <GlobalStyles />
            <Header /> 
            <InnerStyles>
                {children}
            </InnerStyles>
        </div>
    )
}

export default Page;