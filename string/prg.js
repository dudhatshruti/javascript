// let a = "hello world";
// let b = 'javascript learning';
// console.log(a);
// console.log(b);

// let c = `skillqode`;
// console.log(c);

// a = 'hello "world"';
// console.log(a);

// b = "its\" new biggining";
// console.log(b);

// d = "hello 'skill'"
// console.log(d);

// length
// let result
// let txt = "how are you guys?";
// result = txt.length;
// console.log(result);


// 1. SLICE

// let result
// let txt = "how are you guys?"

// result = txt.slice(5,9);        // first thi 0 thi start
// console.log(result)

// result= txt.slice(-15,-9);     //last thi 1 thi start
// console.log(result)

// result = txt.slice(6);          // first thi start 0 thi 6 and after all print
// console.log(result)

//2. STRING SUBSTR :-

// result = txt.substr(5,9);    // first 0 to 5th element print and after 2nd element length print
// console.log(result)

// result = txt.substr(-15,9);    
// console.log(result)

//3. SUBSTRING :-

// result = txt.substring(-5,9)
// console.log(result)

// result = txt.substring(9)
// console.log(result)

// 4. string toUpperCase :-

// result = txt.toUpperCase()
// console.log(result);

//5. string toLowerCase :-

// result = txt.toLowerCase()
// console.log(result);

// 6. concat (merg) :-

// let a = "hello"
// let b = "world"
// result  = a.concat(" ",b )
// console.log(result);


// string replace :-

let result
let data = 'hi, how are you  ?, you are fine????'

//  data = data.replace("you","hello");       //'hi, how are hello  ?, you are fine????'
//  console.log(data)


//  data = data.replace(/you/g,"hello");       //'hi, how are hello  ?, hello are fine????'
//  console.log(data)



 // STRING REPLACE ALL

//  data = data.replaceAll("are","HELLO")
//  console.log(data);

 // STRING TRIM :- both side remove

  // let a = "         hello world         "
  // console.log(a.length)

  // a = a.trim();

  // STRING TRIM START :-

  // let a= "       hello world       "
  // a = a.trimStart();
  // console.log(a.length)
  // console.log(a)

// STRING TRIM END :-
// a = a.trimEnd()
//   console.log(a.length)
//   console.log(a);

  // STRING PADSTART :-

  // let b = "15";

  // result = b.padStart(4,"f")
  // console.log(result)


  // STRING PADEND :-

  // result = b.padEnd(6,"f")
  // console.log(result)

  // STRING CHARAT :-

  // let txt = "skillQode"
  // result = txt.charAt(8);
  // console.log(result)

  // STRING CHARCodeAT :-

  // result = txt.charCodeAt(3);
  // console.log(result)

  // STRING SPLIT

  let make = "hello world guys";
  result = make.split("  ")
  console.log(result)