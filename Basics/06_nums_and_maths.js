const score = 400;
// console.log(score)

const balance = new Number(100)
// console.log(balance)

// const str = new String('MOTU')
// console.log(str);

// a=console.log(balance.toString().length)
// console.log(typeof a)

// console.log(balance.toFixed(2));
const othernumber = 1187.789
// console.log(othernumber.toPrecision(3))

const number = 19837383682
// console.log(number.toLocaleString('en-IN'))

// ====================== Maths ==================================

console.log(Math.abs(-6));
console.log(Math.round(90.2))
console.log(Math.ceil(90.2));
console.log(Math.floor(90.2));
console.log(Math.min(90,23,2,10,1));
console.log((Math.random()*10) +1) //by this guarented that min value is 1 not 0
console.log(Math.ceil(Math.random()*10 +1));

const min = 10;
const max = 20;
// below is the formula to find random number between given number 
console.log(Math.floor(Math.random()*(max-min +1)) + min);
