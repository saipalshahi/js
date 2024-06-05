function sayMyName(){
console.log("S");
console.log("A");
console.log("I");
console.log("P");
console.log("A");
console.log("L");
}

// sayMyName ()

// function addTwoNumbers(number1, number2){            //parameters
//     console.log(number1 + number2);
// }
// addTwoNumbers (3, 4)                                //arguments
// addTwoNumbers (3, "s")

function addTwoNumbers(number1, number2){            
    // let results = number1 + number2
    // console.log("Saipal Shahi");      //  before return it will give output
    // return results
    // console.log("saipal");      // after return it don't give output

    return number1 + number2   // easy way to return
}

const results = addTwoNumbers(3, 5)

// console.log("value : ", results);


function loginUserMessage(username = "shyam"){         //default value
    if(username === undefined){
        console.log("please enter the username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("saipal"))
// console.log(loginUserMessage("saipal"))   //passed value

function calculateCardPrice (...num1){         // ... is rest operator and spread operator
    return num1
}

// console.log(calculateCardPrice(200, 400, 500, 800));


function calculateCardPrice (val1, val2 ,...num1){        
    return num1
}

// console.log(calculateCardPrice(200, 400, 500, 800));

const user = {
    username: "saipal",
     price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}.`);
}
// handleObject(user)

handleObject({
    username: "himal",
    price: 299
})


