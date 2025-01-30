import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api-mkt-ronin-dev.apeironnft.com/v1/graphql", // Chain the links
  cache: new InMemoryCache(),
});

export default client;
