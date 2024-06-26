// JavaScript is a dynamically typed language , which means that 
// data types of variables are determined by the value they hold at runtime
// and can change throughout the program as we assign different values to them.


//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 347859203
const BigNumber = 347859203n 
// if we write n at last in any no then it becomes bigint

let bigNumber ; 

console.log(typeof bigNumber)
console.log(typeof BigNumber)

// Reference (Non primitive)

// Array, Objects, Functions

// things in curly braces are object 
// example          let myobj={ name:"aman",age:19 }

// const heros = ["shaktiman", "naagraj", "doga"];  array in js

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);
console.log(typeof myFunction);



// ====================================================

// Stack(Primitive) , Heap (Non-Primitive)

let myyoutubename = "AmanParajitdotcom";

let anothername = myyoutubename;
anothername = "Aman088dotcom";

console.log(myyoutubename);
console.log(anothername);

// below code is of object code 
let userone = {
    email : "user@google.com",
    upi : "user@ybl"
}

let usertwo = userone;

usertwo.email = "user@upi.com"
usertwo.upi = "user@upi"

console.log(userone)
console.log(usertwo)

