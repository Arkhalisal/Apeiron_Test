// this is the app component

// system imports
import type { AppProps } from "next/app";

// local imports
import { ApolloProvider } from "@apollo/client";
import client from "@/lib/apollo/apolloClient";
import "@/styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default MyApp;
