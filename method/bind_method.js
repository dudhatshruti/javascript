// BIND METHOD

function greet(){
    return `${this.name}'s age is ${this.age}`
}

let person = {
    name : "skill",
    age : 10
}

x = greet.bind(person);
console.log(x());