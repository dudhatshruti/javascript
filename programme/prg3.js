function skill() {
    let hello = 'hello world';
    console.log(hello[0].toUpperCase() + hello.slice(1));
    console.log(hello[6].toUpperCase() + hello.slice(1));

}
skill()


let str = function up(sr) 
{ 
  let arr2 = sr.split(' '); 
  let arr1 = []; 
     
  for(let a = 0; a < arr2.length; a++){ 
    arr1.push(arr2[a].charAt(0).toUpperCase()+arr2[a].slice(1)); 
  } 
  return arr1.join(''); 
} 
console.log(str('the quick brown fox'));