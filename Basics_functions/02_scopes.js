// agar hum inspect kar ke scope try karte hai to vo alag hai 
// or jab env me node ke sath try karte hai to vo alag hai 

var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}

// console.log(a);
// // console.log(b);
// console.log(c);


function one(){
    const username = "aman"

    function two(){
        const website = "youtube"
        // console.log(username);
    }
    // console.log(website);

     two()

}

one()

if (true) {
    const username = "aman"
    if (username === "aman") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// // ++++++++++++++++++ interesting ++++++++++++++++++

// tecniques in js to write functions 

console.log(addone(5))

function addone(num){        //1
    return num + 1
}

// in this the error will occur bcz we declare the function and we are storing it in some variable so call before declare is not 
// possible in this method but above method can //1 wala

// addTwo(5)
const addTwo = function(num){   //2
    return num + 2
}