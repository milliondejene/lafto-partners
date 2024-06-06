// lib/apolloClient.js
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://lafto.partners/wp/graphql', // Replace with your WordPress GraphQL endpoint
  }),
  cache: new InMemoryCache(),
});

export default client;
