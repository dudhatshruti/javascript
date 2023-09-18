// JavaScript Promise Chaining

// Promises are useful when you have to handle more than one asynchronous task, one after another. For that, we use promise chaining.

// You can perform an operation after a promise is resolved using methods then(), catch() and finally().

// 1. JavaScript THEN() method

// The then() method is used with the callback when the promise is successfully fulfilled or resolved.

// SYNTEX :-

{
    // promiseObject.then(onFulfilled, onRejected);
}

// Chaining the Promise with then()

    // // returns a promise
// let countValue = new Promise(function(resolve,reject){
//     resolve("Promise resolved")
// })

//     // // executes when promise is resolved successfully
// countValue.then(function successValue(result){
//     console.log(result);
// })
// .then(function successValue1() {
//     console.log("You can call multiple functions this way.");
// });



// 2.JavaScript CATCH() method

// The catch() method is used with the callback when the promise is rejected or if an error occurs.

//returns a promise
 let countValue = new Promise(function (resolve, reject) {
    reject('Promise rejected'); 
});

    // executes when promise is resolved successfully
countValue.then(
    function successValue(result) {
        console.log(result);
    },
)

    // executes if there is an error
.catch(
    function errorValue(result) {
        console.log(result);
    }
);

// 3.// JavaScript finally() method

// // You can also use the finally() method with promises. The finally() method gets executed when the promise is either resolved successfully or rejected.

// // returns a promise
//     let countValue = new Promise(function (resolve, reject) {
//         // could be resolved or rejected   
//         resolve('Promise resolved'); 
//     });

 // add other blocks of code
    countValue.then(result=>console.log(result)).finally(
        function greet() {
            console.log('This code is executed.');
        }
    )



