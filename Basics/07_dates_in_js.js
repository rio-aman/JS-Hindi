// Date

let mydate = new Date()
// console.log(mydate)
// console.log(mydate.toString())
// console.log(mydate.toDateString())
// console.log(mydate.toLocaleString())
// console.log(typeof mydate)

// let mycreatedDate = new Date(2023,0,15) //months in js is start from 0
// let mycreatedDate = new Date(2023,0,15,5,3)
// let mycreatedDate = new Date("2023-01-15")
let mycreatedDate = new Date("1-14-2023")

// console.log(mycreatedDate.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(mycreatedDate.getTime())
console.log(Math.floor(Date.now()/1000));

let newdate = new Date()
console.log(newdate);
console.log(newdate.getDate());
console.log(newdate.getDay());


