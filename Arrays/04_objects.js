// const tinderUser = new Object() // singleton object 
const tinderUser = {}  // non singleton object 

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Aman",
            lastname: "Prajapati"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "a", 4 : "b"}

// const obj3 = { obj1, obj2 }
// const obj4 = Object.assign(obj1,obj2)
// console.log(obj4)
// const obj5 = Object.assign({},obj1,obj2)
// console.log(obj5)

const obj3 = {...obj1 , ...obj2};
console.log(obj3);

// user coming from database 
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
console.log(users[1].email)
console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "js in hindi",
    price: "499",
    courseInstructor: "aman"
}

// course.courseInstructor
const {courseInstructor} = course
console.log(courseInstructor);

const {courseInstructor: instructor} = course
console.log(instructor);

// THE USE OF BELOW {} TO SHOW DESTRUCTING IN REACT 
// const navbar = ({company}) => {

// }
// navbar(company = "AMAN");

// {
//     {
//         "name: "aman",
//         "coursename": "js in hindi",
//         "price": "free"
//     }
    
//     [
//         {},
//         {},
//         {}
//     ]
// }
