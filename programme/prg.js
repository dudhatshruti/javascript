//  reverse a number

// function hello(x){
//     let y = x.toString;
//     reversedStr = y.split(' ').reverse().join(' ')
//     return reversedStr
// }
// let x = 15438;
// let reversed = reverseNumber(x);
// console.log();

function reverseNumber(x) {
    // Convert the number to a string
    let str = x.toString();
    
    // Reverse the string
    let reversedStr = str.split('').reverse().join('');
    
    // Convert the reversed string back to a number
    let reversedNumber = parseInt(reversedStr, 10);
    
    return reversedNumber;
  }
  
  // Example usage:
  let x = 15438;
  let reversed = reverseNumber(x);
  console.log(reversed); // Output: 83451