const accountId = 144668
// const means the value will be fix not able to change 

let accountEmail = "amanpraj@google.com"
// yaha pr kuch cheeze change bhi hongi sare nahi lekin kuch 

var accoundPassword = "1256"

accoundCity = "Jaipur"
let accountState;


// here are two methods to create variables by const(i.e constant)
// and let and var for changleable variables 
// var is not use to delace a variable because of problem in block scope and functional scope 
// scope is this {} and prefer let use bcz in let is was solved 

// accountId = 2  // not allowed

accountEmail = "hcfc@google.com"
accoundPassword = "1478"
accoundCity = "Ghaziabad"

console.log(accountId); //constant keyword values change nahi ho sakti hai 
// console.log(accountEmail);
// console.log(accoundPassword);
console.table([accountEmail,accoundPassword,accoundCity,accountState]);
