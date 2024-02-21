// this keyword

let card = {
    firstName : "skill",
    lastName  : "qode",
    id : 6722,
    fullName : function() {
        return this.firstName + " " + this.lastName;
    }
}

// card.fullName.call()
console.log(card.fullName());
console.log(card.id);
console.log(card);



// const person = {
//     firstName: "John",
//     lastName : "Doe",
//     id : 5566,
//     fullName : function() {
//     return this.firstName + " " + this.lastName;
//     }
//     }; // John Doe