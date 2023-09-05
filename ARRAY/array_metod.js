// ARRAY AND ITS METHOD

let array = [1,2,3,4,5,"hello", "world",true,false]
console.log(array);

console.log(array[5]);

let array1 = [];
array1[0] = "hello";
array1[1] = "world";
array1[2] = "skill";
array1[3] = "qode";
array1[4] = "programme";

console.log(array1)
array.length = 99
console.log(array);

// LENGTH :- RETURN A LENGTH OF ARRAY

console.log(array.length)

// PUSH :- ENTER THE ELEMENT AT ARRAY OF END POSITION

let arr = [11,12,13,14,15];
console.log(arr);

arr.push(20);
console.log(arr);

console.log(arr.length);

// POP :- REMOVE THE ELEMENT AT END POSITION

arr.pop();
arr.pop();
console.log(arr)

// SHIFT :- REMOVE THE ELEMENT AT END POSITION

arr.shift();
arr.shift();
console.log(arr);

// unshift :- ENTER THE ELEMENT AT ARRAY OF FIRST POSITION

arr.unshift(100);
arr.unshift(200);
console.log(arr);

// CONCAT :-  MERGE TWO ARRAY

let arr1 = [50,51,52,53,54]
let arr2 = [150,151,152,153,154]

arr = arr.concat(arr1, arr2)
console.log(arr);

// SORT (ASENDING ORDER) :- SORTING THE ARRAY

let abc = [1000,200,3000,400,500]
abc = abc.sort((a,b)=> a - b)
console.log(abc);

// REVERSE (DECENDING ORDER) :- REVERSE ARRAY

abc.reverse();
console.log(abc);