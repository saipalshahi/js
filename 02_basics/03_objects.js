// singleton
//Object.create

// object literals


const mySym = Symbol("key1");  // Use parentheses instead of square brackets

const jsUser = {
    name: "Saipal",
    "full name": "Saipal Shahi",
    [mySym]: "myKey1",
    age: 19,
    location: "Kathmandu",
    email: "saipalmessi@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Wednesday"],
}

// console.log(jsUser.email);           // saipalmessi@gmail.com
// console.log(jsUser["email"]);        // saipalmessi@gmail.com
// console.log(jsUser["full name"]);    // Saipal Shahi
// console.log(jsUser[mySym]);          // myKey1

jsUser.email = "saipal@gmail.com";   // Change email before freezing
// Object.freeze(jsUser);               // Freeze the object
jsUser.email = "saipal123@gmail.com"; // Attempt to change email after freezing (will not work)
// console.log(jsUser);                 // Print the object, email remains "saipal@gmail.com"


jsUser.greeting = function(){
    console.log(("hello js user"));
}

jsUser.greetingTwo = function(){
    console.log(`hello js user ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());