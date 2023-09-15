// REST OPERATOR 

// rest operator used in function like this array

function product(...args){
    let s = 1;
    for(let i of args){
        s *= i;
    }
    return s;
}

a = product(10,3);
console.log(a);

let arr1 =[1,2,3,];
let arr2 =[...arr1];
console.log(arr1);
console.log(arr2);

arr1.push(4)
console.log(arr1);
console.log(arr2);

let p = {x: 1, y:2}
let q = {z:1}
let r = {p,...q};
console.log(r);

p.s = 5;
console.log(p);
console.log(r);


