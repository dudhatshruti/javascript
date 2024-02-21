// 1. SET_TIME_OUT() METHOD

//  The setTimeout() method executes a block of code after the specified time. The method executes the code only once.


// syntex:-
// setTimeout(function, miliseconds);

// function - a function containing a block of code
// milliseconds - the time after which the function is executed }

// The setTimeout() method returns an intervalID, which is a positive integer.

// Display a Text Once After 3 Second

// PROGRAMME:-

// function greet(){
//     console.log('hello world');
// }
// // greet();

// setTimeout(greet,4000);
// console.log('msg  show the first while second is completed');
// console.log('today to much rain');


// the setTimeout() method calls the greet() function after 3000 milliseconds (3 second).


// ====> // You can also pass additional arguments to the setTimeout() method. 

{
    // setTimeout(function, milliseconds, parameter1, ....paramenterN);
}

// When you pass additional parameters to the setTimeout() method, these parameters (parameter1, parameter2, etc.) will be passed to the specified function.

{
    // // program to display a name
    function greet(name, lastName) {
        console.log('Hello' + ' ' + name + ' ' + lastName);
    }

    // passing argument to setTimeout
    setTimeout(greet, 1000, 'John', 'Doe');
}

// two parameters John and Doe are passed to the setTimeout() method. These two parameters are the arguments that will be passed to the function (here, greet() function) that is defined inside the setTimeout() method.