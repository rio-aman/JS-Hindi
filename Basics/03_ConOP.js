// let score = "33abc" 
// let score = null
// let score = true
let score = "aman"

// console.log(typeof score);

// if we confiremd that we have to work on number then below things have to do 

let valueNumber = Number(score)

// console.log(typeof valueNumber);
// console.log(valueNumber); //NaN (not a number)

//"33" - 33
// "33abc" - NaN 
// true - 1 / false - 0

let isLoggedIn = null
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn) ;

// 1 - true / 0 - false
// "" - false
// "aman" - true 
// "TRUE" - true
// null - false

let someNumber = 33
let stringNumber = String(someNumber)
console.log(typeof stringNumber);
console.log(stringNumber);