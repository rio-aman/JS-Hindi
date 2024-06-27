
function sayMyName(){
    console.log("A");
    console.log("M");
    console.log("A");
    console.log("N");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     // console.log(number1 + number2);
// }
// addTwoNumbers(5,6)

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);

// function loginUserMessage(username){
//     return `${username} just logged in`
// }

// console.log(loginUserMessage())
function loginUserMessage(username = "sam"){
    if(!username){ // side if condition is equals to if(username === undefined)
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("aman"))
// console.log(loginUserMessage())

// rest operator and spread operator are same it depends on how they are using
// below are the rest operator example 
// function calculateCartPrice(val1, val2, ...num1){
//     return num1
// }

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "aman",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){ // argument in bracket define what we are gettig in function 
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 500, 1000]));