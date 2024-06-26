// singleton

// object literals
const mySym = Symbol("key1")

const JsUser = {
    name : "Aman",
    "full name": "Aman",
    [mySym]: "mykey1", // to access symbol like symbol then we write mysym in []
    age : 19,
    location: "Jaipur",
    email: "aman@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"]) // 2 method of above imp 
console.log(JsUser["full name"])  //imp reason to write like this bcz full name valuce can't be access by dot that's why 

console.log(JsUser[mySym]) 

JsUser.email = "aman@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "aman@microsoft.com"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("hello js user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())
