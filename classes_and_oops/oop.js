// So below is we call object literal
// const user = { }

const user = {
    username : "aman",
    loginCount : 8,
    signedId : true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        // console.log(this);
        // this keyword is use to get the current context means current me jo hai memory me vo mujhe do jo mere value hai 
    }
}

// console.log(user.username)
// console.log(user.getUserDetails());
// console.log(this);  
// In JavaScript, the this keyword is a special object that refers to the context in which a function is executed. 
// Its value is determined by how a function is called, not by how or where it is defined. Understanding this is crucial for working with object-oriented programming in JavaScript.


// constructor function  
// new is a constructor function and used to create new context 

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this     //here return if don't it still there bcz it is implicitly or by default declare 
}

// if we don't use new keyword then in merory we declared the useOne now if we declare the userTwo then it over write the values of userOne in memory with it's own values
const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
// console.log(userOne);
console.log(userOne.constructor);
//console.log(userTwo);


/** steps happening behind the scene 
1 - object creation
2 - constructor function call by new keyword
3 - this keyword inject to over values so by using or writing this. we can get our values 
4 - now we got the values  */