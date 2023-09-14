// 2. OBJECT CREATE

let test = new Object();
test.name = "hello";
test.email = "hello@test.in";
test.abc = function(){
    console.log('hello world!....');
}

// console.log(test);
test.abc();
delete test.email;
console.log(test);
