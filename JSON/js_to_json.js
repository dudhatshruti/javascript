// Converting JavaScript Object to JSON

// You can also convert JavaScript objects to JSON format using the JavaScript built-in JSON.stringify() function. 

{
    // js object
    const jsonData = { "name": "John", "age": 22 };

    // converting to json
    const obj = JSON.stringify(jsonData)

    // accessing the data
    console.log(obj);
}