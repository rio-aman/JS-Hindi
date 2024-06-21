const name = "aman"
const repoCount = 4

// console.log(name + repoCount) not prefer to do like this 
// bcz it is out date 

// `` this is backtis and below code is called string interpolation this ${}
console.log(`Hello my name is ${name.toUpperCase()} and my repo is ${repoCount}`);

// for string declaration 
const gameName = new String('Am-an')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2)); //charAt to check the at which index alphabate is present 
console.log(gameName.indexOf('a'));

// we can use - in both but only slice will allow that to something happen 
const newstring = gameName.substring(0,2);
console.log(newstring);
const anotherstring = gameName.slice(-4,3);
console.log(anotherstring);

const newstringone = "   aman   "
console.log(newstringone)
console.log(newstringone.trim());
console.log(newstringone.trimStart());
console.log(newstringone.trimEnd());

const url = "https://aman.com/aman%25singh"
console.log(url.replace('%25','-'));

console.log(url.includes('lang'));
console.log(gameName.split('-'));


// blink 

const contentString = "Hello, world";

console.log(contentString.blink());
console.log(contentString.anchor()); // to make string anchor like html wala <a></a> ye wale jaisa   
console.log(contentString.at(-10)); //at() to show the number in any place 








