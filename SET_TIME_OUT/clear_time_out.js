//  clearTimeout()

// As you have seen in the above example, the program executes a block of code after the specified time interval. If you want to stop this function call, you can use the clearTimeout() method.

// The syntax of clearTimeout() method is
{
    // clearTimeout(intervalID);
}

// Use clearTimeout() Method

{
    // // program to stop the setTimeout() method

    let count = 0;

    // function creation
    function increaseCount(){

        // increasing the count by 1
        count += 1;
        console.log(count)
    }

    let id = setTimeout(increaseCount, 3000);

    // clearTimeout
    clearTimeout(id); 
    console.log('setTimeout is stopped.');
}


// the setTimeout() method is used to increase the value of count after 3 seconds. However, the clearTimeout() method stops the function call of the setTimeout() method. Hence, the count value is not increased.

//  You generally use the clearTimeout() method when you need to cancel the setTimeout() method call before it happens.
