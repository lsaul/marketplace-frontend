import Document, { Html, Head, NextScript, Main } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document{

    //This block of code gets the initial classes from server rendered
    //component style classes to make sure they match frontend classes
    //After which, delete the cached version of the app at frontend/.next (delete that folder) 
    //If you're still seeing console errors
    static getInitialProps({ renderPage }){
        const sheet = new ServerStyleSheet();
        const page = renderPage((App) => (props) => sheet.collectStyles(<App {...props} /> ));
        const styleTags = sheet.getStyleElement();

        return {...page, styleTags}
    }

    render(){
        return(
            <Html lang='en-US'>
                <Head></Head>
                <body>
                    <Main />
                    <NextScript />
                </body>

            </Html>
        )
    }
}


// const class MyDocument extends Document = () => {

// }