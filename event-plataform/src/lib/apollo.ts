import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient ({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4qztwvs0efs01z10j1o4u5q/master',
    cache: new InMemoryCache()
})