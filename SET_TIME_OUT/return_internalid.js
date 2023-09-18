// 2. => setTimeout() METHOD RETURNS THE INTERVAL ID.

function greet() {
    console.log('Hello world');
}

let intervalId = setTimeout(greet,3000);
console.log('id:' + intervalId);