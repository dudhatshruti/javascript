const  data = new Map([
    ["audi",20],
    ["BMW",20],
    ["ferari",20],
    ["tata",20],
])

console.log(data);

data.set ("suzuki",90);
console.log(data);

console.log(data.has("hello"))

console.log(data.delete("BMW"))
console.log(data)

console.log(data.entries())

console.log(data.size);

let a = " "
data.forEach(function(value,key)
{
    a += key + " - " +value + "\n";
})

console.log(a)


const hello = new Map();
hello.set("car",120);
hello.set("bike",260);
hello.set("truck",320);
hello.set("bus",220);

console.log(hello);
console.log(hello. entries());
