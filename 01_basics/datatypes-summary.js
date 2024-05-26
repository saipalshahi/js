// Primitive 

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100   //string
const scoreValue = 80.55 //number

const IsLoged = true  //boolean
const outSideTemp = null  //null
let userEmail;   //undefined

const id = Symbol('123')  //Symbol
const anotherId = Symbol('123')
// console.log(id === anotherId)

const bigNummber = 23456789768987n  //BigInt


// Reference (Non Primitive)

// Array, Objects, Functions

const brothers = ["saipal", "bishal", "himal"]  //array

let myObj = {            //object
    name: "Saipal",
    age: 99,
}


const myFunction = function(){
    console.log("hello world");
}



//primitve
// console.log(typeof bigNummber); //BigInt
// console.log(typeof outSideTemp); //null
// console.log(typeof scoreValue);  //number
// console.log(typeof IsLoged);  //noolean
// console.log(typeof score);   //string
// console.log(typeof userEmail);  //undefined
// console.log(typeof id);  //symbol


//Non-Primitive(Reference)   datatype = object
// console.log(typeof brothers);
// console.log(typeof myObj);
// console.log(typeof myFunction);



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (use premitive) change in copy value
// Heap (use non-primitive) change in original value

// stack

let firstName = "BhaiBahadur"

let secondName = "firstName"
secondName = "Saipal"

// console.log(firstName);
// console.log(secondName);


// Heap

 let userOne = {
    name: "saipal",
    email: "abc@gmail.com"
 }

 let userTwo = userOne

 userTwo.email = "saipalmessi@gmail.com"

//  console.log(userOne.email)
//  console.log(userOne.email)
