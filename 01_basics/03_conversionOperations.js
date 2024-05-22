let score = "saipal"

// console.log(typeof score);
// console.log(typeof (score));


let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);


// "33" => 33
// "33" => NaN
// true => 1; false => 0

let isLogIn = "Saipal"

let booleanIsLogIn = Boolean(isLogIn)
// console.log(booleanIsLogIn)

// 1 => true; 0 => false
// " " => false
// " value " => true


let someNumber = 200

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);


// =============== Operations ===================

let value = 30

let negValue = -value
// console.log(negValue);


// console.log(2+2)
// console.log(2-2)
// console.log(2*3)
// console.log(2/3)
// console.log(2**3)
// console.log(2%3)


let str1 = "Saipal"
let str2 = " Shahi"

let str3 = str1 + str2;
// console.log(str3);

// console.log("1" + 2)
// console.log(1 + "2")
// console.log(1 + 1 + "2")
// console.log(1 + "1" + 1)
// console.log("1" + 1 + 1)



let gameCounter = 100
gameCounter++
// console.log(gameCounter)


//=====prefix======

let a = 4
const b = a++
console.log(`a:${a}, b:${b}`)


//=======postfix==========

let x = 10
const y = ++x
console.log(`x:${x}, y:${y}`)