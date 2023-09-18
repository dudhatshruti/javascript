// ASYNC

// We use the async keyword with a function to represent that the function is an asynchronous function. The async function returns a promise.

{
    // async function fun_name(parameter1, parameter2, ...paramaterN) {
    //     // statements
    // }

 // fun_name - name of the function
 // parameters - parameters that are passed to the function     
}

// ===> ASYNC 

// the async keyword is used before the function to represent that the function is asynchronous.

// ===> EXAMPLE

async function f(){
    console.log('async function.');
    return Promise.resolve(1)
}

f();

// ===> this function returns a promise, you can use the chaining method then()

// ===>

{
    async function f() {
        console.log('Async function.');
        return Promise.resolve(1);
    }

    f().then(function(result){
        console.log(result);
    })
}    