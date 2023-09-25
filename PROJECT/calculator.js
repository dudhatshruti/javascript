
function data(v){
    var hello = document.getElementById('hello') 
    var oldvalue = hello.value;
    var t = oldvalue.length ;
    var lastchr = oldvalue[t-1];
    console.log(lastchr);
    // hello.value = oldvalue+v;  // concat value

    var symbol = ["+","-","*","/","."]
    if(symbol.includes(v)){
        if (symbol.includes(lastchr)){
            var removelast = oldvalue.slice(0,-1)
            hello.value = removelast+v
        }
        else{
            hello.value = oldvalue+v;
        }
    }
    else{
    hello.value = oldvalue+v;
    }
}

function caldata(){
    var hello = document.getElementById('hello')
    var oldvalue = eval(hello.value)
    hello.value = oldvalue;
}

function removeall(){
    let hello = document.getElementById('hello').value="";
}

function delLast(){
    let hello = document.getElementById('hello').value;
    document.getElementById('hello').value = hello.substring(-1,hello.length-1)
}

