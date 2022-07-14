import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.hygraph.com/v2/cl5lberiz3xj501uobvzg6dau/master",
  cache: new InMemoryCache(),
});
