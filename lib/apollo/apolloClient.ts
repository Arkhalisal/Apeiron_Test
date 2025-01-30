// This code initializes an Apollo Client for GraphQL queries.

import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api-mkt-ronin-dev.apeironnft.com/v1/graphql",
  cache: new InMemoryCache(),
});

export default client;
