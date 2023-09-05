// ARROW FUNCTION

let x = (a,b) =>{
    let sum = a+b;
    return sum;
}
console.log(x(13,45));

// 1. print table

let y = () =>{
    let a=8;
    console.log("table 8::",a*1);
    console.log("table 8::",a*2);
    console.log("table 8::",a*3);
    console.log("table 8::",a*4);
    console.log("table 8::",a*5);
    console.log("table 8::",a*6);
    console.log("table 8::",a*7);
    console.log("table 8::",a*8);
    console.log("table 8::",a*9);
    console.log("table 8::",a*10);
}
console.log(y())

// 2. square of value

let two =(a)=>{
    square = a*a;
    return square;
}
console.log(two(7));

// 3. simple interest prg

let three = (p,t,r) =>{
    SI = p*t*r/100;
    return SI;
}
console.log(three(6,4,4));

//4. convert rupees to dollar

let four = (rupees) =>
{
    dollar = rupees * 75;
    return dollar;
}
console.log(four(20));

// 5. chaircost prg

let five = (total_chair,total_cost,each_chair) =>
{
    each_chair=total_cost/total_chair;
    return each_chair;
}
console.log(five(10,55,1));


// 6. find  l=(c+d)*(g+h);

let six = (c,d,g,h) =>{
    l=(c+d)*(g+h);
    return l;
}
console.log(six(3,4,5,6));

// 7. find x=((k-4)*(a*4)/100);

let seven = (k,a) =>{
    x=((k-4)*(a*4)/100);
    return x;
}
console.log(seven(22,3))

// 8. find  s=((4*a+c)-2*a*b)/100;

let eight = (a,c,b) =>{
    s=((4*a+c)-2*a*b)/100;
    return s;
}
console.log(eight(23,15,2))

// 9. find a=p*(1+(r/100)/n)-p;
let nine = (p,r,n) =>{
    a=p*(1+(r/100)/n)-p;
    return a;
}
console.log(nine(23,15,2))

// 10. find t=((v+s)+(1-m)*1);
let ten = (v,s,m) =>{
    t=((v+s)+(1-m)*1);
    return t;
}
console.log(ten(23,15,2))
    

//11. find area of circle

let eleven = (pi,r) =>{
    area = pi*r*r;
    return area;
}
console.log(eleven(3.14,5))

// 12. area of triangle

let twelve = (base,height) =>{
    area = 0.5*base*height;
    return area;
}
console.log(twelve(14,5))

   