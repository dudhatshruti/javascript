// Use of JSON

// JSON is the most commonly used format for transmitting data (data interchange) from a server to a client and vice-versa. JSON data are very easy to parse and use. It is fast to access and manipulate JSON data as they only contain texts.

// JSON is language independent. You can create and use JSON in other programming languages too.

let person = {
    firstName: "Hello",
    lastName: "world",
}


// let ABC = {
//     "firstname": "Skill",
//     "lastname": "Qode",
//     "age" : 10
// }


// // console.log(person);
// // console.log(person.firstName);
// // console.log(ABC);
// // console.log(ABC.age);


const shruti = JSON.stringify(person);
console.log(shruti);