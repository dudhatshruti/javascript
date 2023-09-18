// DISPLAY TIME  EVERY SECOND (1000,2000,3000,...N)

function showTime(){
    // return new date and time
    let dateTime = new Date()

    // returns the current local time
    let time = dateTime.toLocaleTimeString()

    console.log(time);

    // display the time after 3 seconds
    setTimeout(showTime, 3000);
    
}

// calling the function
showTime();


//  ==> The above program displays the time every 3 seconds.

//   ==> The setTimeout() method calls the function only once after the time interval (here 3 seconds).
