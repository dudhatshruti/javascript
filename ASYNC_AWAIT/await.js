// JavaScript await Keyword

// The await keyword is used inside the async function to wait for the asynchronous operation.

//SYNTEX :-

{
let result = await Promise;
}


// ===> // The use of await pauses the async function until the promise returns a result (resolve or reject) value. 


// a promise

// let promise = new promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve('promise resolve')
//     })
// })

// async function
async function asyncFunc() {

    // wait until the promise resolves 
    let result = await promise; 

    console.log(result);
    console.log('hello');
    }

    // calling the async function
    asyncFunc();


// ===> a Promise object is created and it gets resolved after 4000 milliseconds. Here, the asyncFunc() function is written using the async function.

// The await keyword waits for the promise to be complete (resolve or reject).

// hello is displayed only after promise value is available to the result variable.

// In the above program, if await is not used, hello is displayed before Promise resolved.

// ===> This can be useful if there are multiple promises in the program.

// let promise1 = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         resolve('Promise 1 resolved')
//     }, 2000);
// });
// let promise2 = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         resolve('Promise 2 resolved')
//     }, 3000);
// });
// let promise3 = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         resolve('Promise 3 resolved')
//     }, 4000);
// });

// async function asyncFunc() {
//     let result1 = await promise1;
//     console.log(result1);

//     let result2 = await promise2;
//     console.log(result2);

//     let result3 = await promise3;
//     console.log(result3);
// }    

// asyncFunc();


// ===>

// Benefits of Using async Function

// The code is more readable than using a callback or a promise.
// Error handling is simpler.
// Debugging is easier.

// Note: These two keywords async/await were introduced in the newer version of JavaScript (ES8). Some older browsers may not support the use of async/await.