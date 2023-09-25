       // JSON SYNTAX  :-
//------------------------------//

// JSON stands for Javascript Object Notation. JSON is a text-based data format that is used to store and transfer data.
{
    "name" ;"shruti",
    "age" ; 20,
    "gender" ; "male"
}

// In JSON, the data are in key/value pairs separated by a comma(,).

// JSON was derived from JavaScript. So, the JSON syntax resembles JavaScript object literal syntax. However, the JSON format can be accessed and be created by other programming languages too.


     // ==> JSON DATA :-
// --------------------------//

// JSON data consists of key/value pairs similar to JavaScript object properties. The key and values are written in double quotes separated by a colon(:). For example,

{
    " name" ; "shruti"
}

// ====>  Note: JSON data requires double quotes for the key.

        // ====> JSON OBJECT :-
// -------------------------------//
// The JSON object is written inside curly braces { }. JSON objects can contain multiple key/value pairs. For example,

{
    {"name" ; "shruti","age"; 20}
}

//       JSON ARRAY
//----------------------------------//


// JSON array is written inside square brackets [ ].

["apple","mango","banana"]

// JSON array containing objects

//[
    //     { "name": "John", "age": 22 },
    //     { "name": "Peter", "age": 20 }.
    //     { "name": "Mark", "age": 23 }
//]

// Note: JSON data can contain objects and arrays. However, unlike JavaScript objects, JSON data cannot contain functions as values.

      //  ACCESSING JSON DATA
// -------------------------------//
// ===> You can access JSON data using the dot notation.

// JSON object
const data ={
    "name": "shruti",
    "age": 22,
    "hobby":{
        "reading": true,
        "gaming" :false,
        "sport" : "football"
    },
    "class": ["javascript","html","css"]
}

   // ===> accessing JSON object

console.log(data.name);
console.log(data.hobby);   
console.log(data.hobby.sport);
console.log(data.class[2]);

// We use the . notation to access JSON data. Its syntax is: variableName.key

// ==> You can also use square bracket syntax [] to access JSON data. 

//   JSON OBJECT    //

const file = {
    "name": "shruti",
    "age" : 20
}

// ccessing JSON object
console.log(file["name"]);