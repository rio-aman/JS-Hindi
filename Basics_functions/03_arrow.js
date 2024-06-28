// browser me sabse jada jo global object hai wo window hai 
// console.log(this)

// function name() {
//     let username= "aman"
//     console.log(this.username)
// }
// name()

const user = {
    username: "aman",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function name(){
//     let username = "aman"
//     console.log(this.username);
// }

// name()

// const name = function () {
//     let username = "aman"
//     console.log(this.username);
// }

const chai =  () => {    // function replace and add => after () then this will become arrow function  
    let username = "aman"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2                 // basic arrow function 
// }

// if we writing {} this then we need to write return statement otherwise for () this or simply not to need to do that  // mostly it is use in react 

// const addTwo = (num1, num2) =>  num1 + num2  //implicite return in this env assume that something is returning bcz of one line statement 

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "aman"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()