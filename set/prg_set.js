/*
    set
    add()
    has()
    size
*/

let data = new Set(['apple', 'mango','banana','kiwi'])
console.log(data)

data.add('orange')

console.log(data)

console.log('set size is:' +data.size)
console.log(data.has('orange'))
console.log(data.values())
console.log(data.delete('apple'))
console.log(data)


let a = " ";
data.forEach(function(val){
    a += val + "\n";
})

const hello = new Set()
hello.add(10)
hello.add(20)
hello.add(30)
hello.add(40)
hello.add(50)
console.log(hello)


