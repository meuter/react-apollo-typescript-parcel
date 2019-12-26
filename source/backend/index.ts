import "reflect-metadata"
import { ApolloServer } from "apollo-server"
import { buildSchema } from "type-graphql"
import HelloWorldResolver from "./HelloWorldResolver"

(async () => {
    const PORT = 3000
    const schema = await buildSchema({
        resolvers: [HelloWorldResolver]
    })
    const server = new ApolloServer({ schema });
    server.listen(PORT).then(({ url }) => {
        console.log(`Backend  ==> ${url}`)
        console.log(`Frontend ==> ${url.replace("3000", "8080")}`)
    })
})()
