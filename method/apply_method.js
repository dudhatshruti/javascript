// APPLY METHOD

function greet(city,state){
    return `${this.name}'s age is ${this.age} and lives in ${city},${state}`;
}

let person = {
    name : "skill",
    age : 21,
}

x = greet.apply(person,['surat','gujrat'])
console.log(x);