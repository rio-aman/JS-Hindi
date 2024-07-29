// const promiseone = new Promise(function(resolve, reject){

//     //Do an async task
//     // DB calls, cryptography, network

//     setTimeout(function(){
//         console.log('Async task is compelete');
//         resolve() // by writing this then resolve connect to then 
//     }, 1000)
// })

// promiseone.then(function () { //// resolve is directly connected to .then
//     console.log("Promise consumed");
// })  

// new Promise(function (resolve,reject) {
//     setTimeout(function(){                   // promises two 
//         console.log("Async task 2");
//         resolve()
//     }, 1000)

// }).then(function(){
//     console.log("Async 2 resolved");
// })

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "Chai", email: "chai@example.com"})
//     }, 1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
// })

const promisefour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        // let error = false;
        let error = true;
        if (!error) {
            resolve({ username: "aman", password: "146" })
        } else {
            reject("ERROR : Something went wrong")
        }
    }, 1000)
})

// promisefour.then().catch()

//how to avoid callback hell

// promisefour.then((user)=>{   // so we can't get data by setting the promises to variable
//     console.log(user);
//     return user.username
// })
promisefour
    .then((user) => {
        console.log(user);
        return user.username
    }).then((username) => {
        console.log(username);
    }).catch(function (error) {
        console.log(error);
        //this defaulty execute 
    }).finally(() => console.log("The promise is either resolved or rejected"))

const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "javascript", password: "123" })
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});


//  second method 
async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json() // here response takes time to get the whole data from api to json that's why we have to write await so that after other runs

//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.