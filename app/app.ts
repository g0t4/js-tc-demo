import $ from "jquery";
import Hello from "./hellos.ts";

let hello = new Hello("World");

$("body").append(`greeting: ${hello.greeting()}`);