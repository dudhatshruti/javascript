function greet(){
    return `${this.name}'s age is ${this.age}`
}

let person = {
    name : "skill",
    age : 10
}

x = greet.call(person);
console.log(x);