# Does javascript and classes

Yes, JavaScript does have classes, although they were not part of the language originally. Classes in JavaScript were introduced in ECMAScript 6 (ES6) in 2015. They provide a more familiar syntax for creating objects and managing inheritance, resembling classes in other object-oriented programming languages like Java or C#. However, it's important to understand that JavaScript classes are primarily syntactical sugar over its existing prototype-based inheritance model.

## OOP

## Object
- collection of properties and methods
- toLowerCase

## parts of OOP
Object literal means this {}

- Constructor function
- Prototypes
- Classes
- Instances (new, this)

# 4 pillars of oops

Abstraction  - eg (fetch)
Encapsulation 
Inheritance 
Polymorphism


## chatgpt's explaination

### Understanding JavaScript Classes

Here's a breakdown of how classes work in JavaScript:

#### Basic Class Syntax

```javascript
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

const animal = new Animal('Dog');
animal.speak();  // Output: Dog makes a noise.
```

- **Class Declaration**: The `class` keyword is used to declare a class.
- **Constructor Method**: The `constructor` method is a special method for creating and initializing objects created with the class.
- **Methods**: You can define methods directly within the class body, and they will be shared across all instances.

#### Inheritance

Classes in JavaScript can inherit from other classes using the `extends` keyword:

```javascript
class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

const dog = new Dog('Rex');
dog.speak();  // Output: Rex barks.
```

- **Inheritance**: The `extends` keyword is used to create a subclass.
- **Method Overriding**: Subclasses can override methods from the parent class.

#### Static Methods

Static methods are defined on the class itself rather than on instances of the class:

```javascript
class Calculator {
    static add(a, b) {
        return a + b;
    }
}

console.log(Calculator.add(5, 7));  // Output: 12
```

- **Static Methods**: Use the `static` keyword to define a static method, which can be called on the class itself.

### Prototype-Based Inheritance

Before classes were introduced, JavaScript used prototypes for inheritance. Classes in JavaScript are essentially a more readable and intuitive way to work with the prototype-based inheritance system:

```javascript
function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function() {
    console.log(`${this.name} makes a noise.`);
}

const animal = new Animal('Dog');
animal.speak();  // Output: Dog makes a noise.
```

### Key Points

- **Syntactic Sugar**: JavaScript classes are syntactic sugar over prototypes. The underlying mechanism is still prototype-based.
- **No Class-Level Privacy**: JavaScript classes do not have true private members like some other languages. Private fields can be simulated using closures or using the new `#` syntax introduced in ECMAScript 2022.

### Conclusion

JavaScript classes provide a cleaner and more familiar way to define objects and manage inheritance, but it's essential to understand that they are built on top of JavaScript's prototype-based inheritance system.