import { Resolver, Query } from "type-graphql";
import { helloWorld } from "../common/helloWorld"

@Resolver()
export default class HelloWorldResolver {
    @Query(() => String)
    helloWorld() {
        return helloWorld()
    }
}
