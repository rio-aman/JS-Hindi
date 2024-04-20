// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

console.log(null>0);
console.log(null==0);
console.log(null>=0);

/* the reason is that an equality check == and comparisons > < >= <= work differently.
Comparisons convert null to a number , treating it as 0.
that's why null>=0 is true and null >0 is false
*/

console.log(undefined>0);
console.log(undefined<0);
console.log(undefined>=0);
console.log(undefined==0);

// this === stricly checks that is the value are equal and in this no conversions happen 

console.log("3"=== 2);

//NOTE ---  these above type of conversions is make you confused this means above way of conversions are not prefer 
// CLEAN CODE IS IMPORTANT 