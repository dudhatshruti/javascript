//  GENERATOR FUNCTION

function* GENERATOR(){
    yield 1;
    yield 2;
    return '3';
}

let hello = GENERATOR();
console.log(hello.next().value);
console.log(hello.next().value);
console.log(hello.next().value);
console.log(hello.next().value);

