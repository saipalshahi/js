// const tinderUser = new Object()  //SingleTon Object
const tinderUser = {}               //Non_singleTon object

tinderUser.id = "123sjdb"
tinderUser.name = "saipal"
tinderUser.isLoggedIn = false


// console.log(tinderUser);


const regularUser = {
    email : "saipalmessi@gmail.com",
    fullName : {
        UserFullName :{
            FirstName : "Saipal",
            LastName: "Shahi"
        }
    }
}
// console.log(regularUser.fullName.UserFullName.FirstName);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2}        //  get error
// const obj3 = Object.assign( obj1, obj2)   // it also give correct output but bla bla
// const obj3 = Object.assign({}, obj1, obj2)    //good way to write  {} helps to put obj1, obj2 value inside {}

const obj3 = {...obj1, ...obj2}  //  90% we will use this one which is new and easy also
// console.log(obj3);

const users = [
   {
    id: 1,
    email: "a@gmail.com"
   },
   {
    id: 1,
    email: "a@gmail.com"
   },
   {
    id: 1,
    email: "a@gmail.com"
   },
]

// console.log(users[1].id)
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('name'));
// console.log(tinderUser.hasOwnProperty('isLogged'));


const course = {
    coursename: "js with chai aur code",
    price: "1999",
    courseInstructor: "hitesh"
}

// console.log(course.courseInstructor);

const {coursename : name} = course
// console.log(name);

// old value = xml // complex
// new value = json  // simple

// {
//     name: "saipal",
//     coursename: "js with chai aur code",
//     price: "free"
// }

[
    {},
    {},
    {}
]