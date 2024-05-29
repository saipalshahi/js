// Dates

let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);


let myCreateDate = new Date(2024, 0, 24)     //  month start from 0 in js
// console.log(myCreateDate);
// console.log(myCreateDate.toDateString());

let myCreateDateSecond = new Date(2022, 2, 24, 5, 3 )
// console.log(myCreateDateSecond.toLocaleString());

let myCreateDateThird = new Date("2022-1-24")
// console.log(myCreateDateThird.toLocaleString());

let myTimeStramp = Date.now()
// console.log(myTimeStramp);

// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getFullYear());
// console.log(newDate.getDate());
// console.log(newDate.getMonth() + 1);
// console.log(`date is ${newDate.getDate()} and month is ${newDate.getMonth()}`);


console.log(newDate.toLocaleString('default',{
    weekday: "long"
}))