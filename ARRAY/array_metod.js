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

// console.log(array.length)

// PUSH :- ENTER THE ELEMENT AT ARRAY OF END POSITION

// let arr = [11,12,13,14,15];
// console.log(arr);

// arr.push(20);
// console.log(arr);

// console.log(arr.length);

// POP :- REMOVE THE ELEMENT AT END POSITION

// arr.pop();
// arr.pop();
// console.log(arr)

// SHIFT :- REMOVE THE ELEMENT AT first POSITION

// arr.shift();
// arr.shift();
// console.log(arr);

// unshift :- ENTER THE ELEMENT AT ARRAY OF FIRST POSITION

// arr.unshift(100);
// arr.unshift(200);
// console.log(arr);

// CONCAT :-  MERGE TWO ARRAY

// let arr1 = [50,51,52,53,54]
// let arr2 = [150,151,152,153,154]

// arr = arr.concat(arr1, arr2)
// console.log(arr);

// SORT (ASENDING ORDER) :- SORTING THE ARRAY

// let abc = [1000,200,3000,400,500]
// abc = abc.sort((a,b)=> a - b)
// console.log(abc);

// REVERSE (DECENDING ORDER) :- REVERSE ARRAY

// abc.reverse();
// console.log(abc);

// SPLICE METHOD => SPLICE (POSITION , REMOVE ELEMENT , OPTIONAL(ADDELEMENT))

// let num = [45,12,5,59,100,26,60]
// num.splice(2, 4, "hii");
// console.log(num);

//  SLICE METHOD
// let num = [45,12,5,59,100,26,60]
// let abc = num.slice(2,5)
// console.log(abc);

// FOREACH METHOD

// let num = [45,12,5,59,100,26,60]
// let txt = " ";

// num.forEach((val) => {
//     txt +=val+" ";
// })
// console.log(txt);


// MAP METHOD

// let num = [45,12,5,59,100,26,60]

// let aaa = num.map((val)=>{
//     return val * 3;
// })

// console.log(aaa);

//  EVERY METHOD

// let num = [45,12,5,59,100,26,60]
// let txt = num.every((val)=>{
//     return val>15
// })
// console.log(txt);

// SOME METHOD

// let num = [45,12,5,59,100,26,60]
// let txt = num.some((val)=>{
//     return val>15;
// })
// console.log(txt);

// FILTER METHOD

// let num = [45,12,5,59,100,26,60]
// let txt = num.filter((val)=>{
//     return val>15;
// })
// console.log(txt);   

// REDUCE METHOD / REDUCERGHT METHOD
// let num = [45,12,5,59,100,26,60]
// let txt = num.reduceRight((total,val)=>{
//     return total + val;
// })
// console.log(txt);   

// FIND METHOD
// let num = [45,12,5,59,100,26,60]
// let txt = num.find((val)=>{
//     return val<15;
// })
// console.log(txt);

// FIND INDEX METHOD

// let num = [5,12,5,59,100,26,60]
// let txt = num.findIndex((val)=>{
//     return val>15;
// })
// console.log(txt);

// ENTRIES METHOD

// let num = [45,12,5,59]
// let a = num.entries();
// console.log(a.next().value);
// console.log(a.next().value);
// console.log(a.next().value);
// console.log(a.next().value);


// INCLUDE METHOD

// let num = [45,12,5,59]
// console.log(num.includes(12));

// MIN AND MAX METHOD

// let num = [45,12,5,59,100,26,60]
// let hello = (arr) =>{
//     return Math.min.apply(null,arr)
// }

// let hello = (arr) =>{
//     return Math.max.apply(null,arr)
// } 
// console.log(hello(num));


// COPYWITHIN

// let num = [45,12,5,59];
// let a = num.copyWithin(1,0,3)
// console.log(a);


