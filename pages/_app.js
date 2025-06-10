import Page from "../components/Page";
import Router from "next/router";
import nProgress from "nprogress";

import { ApolloProvider } from '@apollo/client';
import withData from '../lib/withData';

//import 'nprogress/nprogress.css';
import '../components/styles/nprogress.css'

//Connects the router event to the progress bar (provided by nProgress component)
Router.events.on('routeChangeStart', () => nProgress.start());
Router.events.on('routeChangeComplete', () => nProgress.done());
// Router.events.on('routeChangeError', () => nProgress.error());

const MyApp = ({Component, pageProps, apollo}) => {
    // console.log(apollo);
    return (
        <ApolloProvider client={apollo}>
            <Page>
                <Component {...pageProps} />
            </Page>
        </ApolloProvider>
    );
}

MyApp.getInitialProps = async function ({Component, ctx}) {
    let pageProps = {};
    if(Component.getInitialProps){
        pageProps = await Component.getInitialProps(ctx);
    }
    pageProps.query = ctx.query;
    return { pageProps };
}

export default withData(MyApp);