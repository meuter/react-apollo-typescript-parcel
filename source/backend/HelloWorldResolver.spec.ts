import HelloWorldResolver from "./HelloWorldResolver"

describe("HelloWorldResolver", () => {

    it("has a helloWorld query", () => {
        const resolver = new HelloWorldResolver()
        expect(resolver.helloWorld()).toEqual("Hello World")
    })

})