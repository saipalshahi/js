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
    let results = number1 + number2
    console.log("Saipal Shahi");      //  before return it will give output
    return results
    console.log("saipal");      // after return it don't give output
}

const results = addTwoNumbers(3, 5)

console.log("value : ", results);