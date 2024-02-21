// CALL BACK FUNCTION

// function hello(){
//     console.log("how are you...");
// }

function skill(s, callback){
    console.log("hi...",s);
    callback();
}
skill("peter", hello)

// area of triangle

function hello(base,height){
    console.log("area of triangle:", 0.5*base*height);
}

function area(callback){
    callback(10,20);
}
area(hello)

// area of circle

function hii(pi,r)
{
    console.log("area of circle:",pi*r*r);
}

function circle(callback){
    callback(10,20);
}
hii(3.14,4)