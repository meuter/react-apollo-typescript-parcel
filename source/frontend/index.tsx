import React from "react"
import { render } from 'react-dom'
import { ApolloClient, InMemoryCache, HttpLink } from "apollo-boost"
import { ApolloProvider } from "react-apollo"
import { HelloWorld } from './HelloWorld'

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
        uri: "http://localhost:3000/"
    })
})

render(<ApolloProvider client={client}><HelloWorld /></ApolloProvider>, document.getElementById('main'));