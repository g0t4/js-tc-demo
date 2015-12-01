export default class Hello{

    name: string;

    constructor(name: string){
        this.name = name;
    }

    greeting(){
        return `Hello, ${this.name}`;
    }
}