import $ from "jquery";
import Hello from "./hello.ts";

let hello = new Hello("World!!!!");

$("body").append(`greeting: ${hello.greeting()}`);