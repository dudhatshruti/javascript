// JavaScript Objects VS JSON

// Though the syntax of JSON is similar to the JavaScript object, JSON is different from JavaScript objects.


    //  ====> Converting JSON to JavaScript Object
//-----------------------------------------------------//

// You can convert JSON data to a JavaScript object using the built-in JSON.parse() function.


{
    // json object
    const jsonData = '{"name" : "shruti", "age" : 20}';

    // // converting to JavaScript object
    const  obj = JSON.parse(jsonData);

    // accessing the data
    console.log(obj);
    console.log(obj.age);
}