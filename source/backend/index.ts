import "reflect-metadata"
import { ApolloServer } from "apollo-server"
import { buildSchema, Resolver, Query } from "type-graphql"

@Resolver()
class HelloWorldResolver {
    @Query(() => String)
    helloWorld() {
        return "Hello World"
    }
}

(async () => {
    const PORT = 3000
    const schema = await buildSchema({
        resolvers: [HelloWorldResolver]
    })
    const server = new ApolloServer({ schema });

    server.listen(PORT).then(({ url }) => {
        console.log(`Apollo server ready at ${url}`);
    });
})()
