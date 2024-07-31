const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")

console.log(descriptor);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

// console.log(Object.getOwnPropertyDescriptor(chai,"name"));
// console.log(chai);

// Object.defineProperty(chai,'name',{
//     writable : false,
//     enumerable : false
// })
// console.log(Object.getOwnPropertyDescriptor(chai,"name"));


// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
    //writable: false,
    enumerable: true,
    
})


for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}


// by chatgpt 

/**
 * ### Can We Change the Value of Pi in JavaScript?

#### Technical Explanation

In JavaScript, the mathematical constant Pi (\(\pi\)) is represented by the property `Math.PI`. This property is a part of the `Math` object and provides an approximation of Pi, which is a non-terminating, non-repeating decimal value. In JavaScript, `Math.PI` is approximately 3.141592653589793.

Technically, `Math.PI` is a read-only property, meaning it is a non-writable and non-configurable property of the `Math` object. This implies that you cannot change its value directly, as doing so will have no effect.

Here’s an example showing this immutability:

```javascript
console.log(Math.PI); // Output: 3.141592653589793

Math.PI = 3.14; // Attempt to change the value

console.log(Math.PI); // Output: 3.141592653589793
```

In this example, even after attempting to change `Math.PI` to 3.14, the output remains the original value because `Math.PI` is read-only.

#### Simple Explanation

In simple terms, in JavaScript, you cannot change the value of Pi because it is a fixed number stored in a special part of the language called `Math.PI`. This number is about 3.14159 and is set to always be that way. Even if you try to change it, JavaScript will ignore your change and keep the original value.

#### Workaround

While you cannot change `Math.PI`, you can define your own variable to represent Pi with a different value if you need a custom approximation or for other purposes:

```javascript
let myPi = 3.14; // Your custom Pi value

console.log(myPi); // Output: 3.14
```

This way, you can use `myPi` in your calculations instead of `Math.PI` if you need a different approximation or a simpler value for specific applications.

### Why Pi is Immutable in JavaScript?

1. **Precision and Consistency:** By making `Math.PI` immutable, JavaScript ensures that mathematical calculations relying on Pi remain consistent and precise across different parts of the code and across different programs.

2. **Prevent Errors:** If `Math.PI` could be changed, it could lead to unintended errors in mathematical computations if someone accidentally modifies it.

3. **Standardization:** As a fundamental constant, it is standardized across programming languages, ensuring developers have the same reference value when performing calculations involving circles, spheres, and other geometrical figures.

### Conclusion

In summary, while you cannot change the value of `Math.PI` in JavaScript, you can use your own variable to hold a custom value for Pi if needed. The immutability of `Math.PI` is designed to maintain precision and consistency in mathematical computations within the language.
 */