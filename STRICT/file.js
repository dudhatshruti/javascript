// " use strict"

// In JavaScript, 'use strict'; states that the code should be executed in 'strict mode'. This makes it easier to write good and secure JS code. 

// 'use strict';

{
    // myVariable = 9;   
    // console.log(myVariable)
}

// Here, myVariable is created without declaring. This works as a global variable in JavaScript. However, if you use this in strict mode, the program will throw an error. 

// STRICT MODE IN VARIABLE

// In strict mode, using a variable without declaring it throws an error.

{
    // console.log("some code");

    // 'use strict' is ignored
    // "use strict"

    //  x = 21; does not throw an error
    // console.log(x);
}

// Strict Mode in Function
// You can also use strict mode inside a function.

{
    // myvariable = 9;
    // console.log(myvariable);  // 9

    // function hello(){
    //     //  applicable only for this function
    //     'use strict';

    //     let strict = 'hello';    // throws an error
    // }

    // hello();
}

// If you use 'use strict'; inside a function, the code inside the function will be in strict mode.

{
    function hello(){
        String = 'hello';    // throws an error
    }

    hello();

    // Note : Strict mode doesn't apply to block statements with {} braces.
}

// THINGS NOT ALLOWED IN STRICT MODE

// 1. Undeclared variable is not allowed

{
    'use strict';

    a = 'hello';
}