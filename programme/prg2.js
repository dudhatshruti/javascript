 //  alphabet order

function alpha(str) {
    arr = str.split(""); 
    result = arr.sort().join(""); 
    return result; 
  }
  console.log(alpha("shruti"));