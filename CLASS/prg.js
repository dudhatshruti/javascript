class person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    hello(){
        return ('hello how are you?')
    }
    newAge(){
        return this.age + 10
    }
}

let x = new person('peter',23);
console.log(x.name);
console.log(x.age);
console.log(x.hello());
console.log(x.newAge());

