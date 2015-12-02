import Hello from "../app/hello.ts";

describe("Hello tests", function () {
    let hello = new Hello("World");

    it("Create should set name", () => expect(hello.name).toBe("World"));

    it("Greeting should include name", () => {
        var greeting = hello.greeting();

        expect(greeting).toBe("Hello, World");
    });
});