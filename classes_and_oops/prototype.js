// let myName = "hitesh     "
// // let mychannel = "chai     "

// console.log(myName.trueLength);

//we are going to make a method 

let myHeros = ["thor","spiderman"]

let heroPower = {
    thor : "hammer",
    spideman : "sling",

    getSpiderPower: function () {
        console.log(`Spidy Power is ${this.spideman}`); 
    }
}

// by writing below code we created a property in object and its our own and this property can be access to function,string,arrary and others also

Object.prototype.aman = function(){
    console.log(`aman is present in all objects`);
}

// heroPower.aman()
myHeros.aman()

Array.prototype.amanarray = function () {
    console.log("aman says brooo! wake up");
}

// heroPower.aman()
// myHeros.aman()
myHeros.amanarray()
// heroPower.amanarray()  // this not get amanarray property 


//INHERITANCE

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// so bacically we are doing prototyple inheritance means we creating a prototype and so by writing __proto__ we can link the one prototype to another so prototype can use each other properties or of one 


// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()

// Every object in JavaScript has a built-in property, which is called its prototype. The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype.

// JavaScript is a prototype-based, automatically adds a prototype property to functions upon creation. This prototype object allows attaching methods and properties, facilitating inheritance for all objects created from the function.

// Prototypes are the mechanism by which JavaScript objects inherit features from one another