import { helloWorld } from "./helloWorld"

describe("helloWorld", () => {

    it("returns 'Hello World'", () => {
        expect(helloWorld()).toEqual("Hello World")
    })
})