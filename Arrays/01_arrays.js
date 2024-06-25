// ARRAYS
// we can create by these two methods
const myArr = [0,1,2,3,4,5,6] //1
const myArr2 = new Array(1,2,3,4,5) //2
console.log(myArr[0])
console.log(myArr2[1])

// ARRAY METHODS

myArr.push(7) 
console.log(myArr)
myArr.pop()
console.log(myArr)
myArr.unshift(8)
console.log(myArr)
myArr.shift()
console.log(myArr)

console.log(myArr.includes(2));
console.log(myArr.indexOf(5));

const newArr = myArr.join();

console.log(myArr);
console.log(newArr);
console.log(typeof newArr);

// slice , splice

console.log("A",myArr)
const myn1 = myArr.slice(1,4)
console.log(myn1)
console.log("B",myArr)
const myn2 = myArr.splice(1,4)
console.log("C",myArr)
console.log(myn2)


