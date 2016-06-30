# JavaScript

Learning JavaScript

## Requirements

The results of the examples are shown in the console (CTRL + SHIFT + I).

## Object literals

```javascript
var x1 = {};            // new object
var x2 = "";            // new primitive string
var x3 = 0;             // new primitive number
var x4 = false;         // new primitive boolean
var x5 = [];            // new array	object
var x6 = /()/           // new regexp object
var x7 = function() {

};  // new function object
```

## Functions

JavaScript functions are defined with the function keyword. You can use a function declaration or a function expression.

### Function Declarations

Syntax:

```javascript
function functionName(parameters) {
    // code to be executed
}
```

### Function Expressions
A JavaScript function can also be defined using an expression. A function expression can be stored in a variable:

```javascript
var x = function (a, b) {
    return a * b
};
```

After a function expression has been stored in a variable, the variable can be used as a function:

```javascript
var x = function (a, b) {
    return a * b
};
var z = x(4, 3) * 32;
```

### Self-Invoking Functions

Function expressions can be made "self-invoking". A self-invoking expression is invoked (started) automatically, without being called. Function expressions will execute automatically if the expression is followed by (). You cannot self-invoke a function declaration. You have to add parentheses around the function to indicate that it is a function expression:

```javascript
(function () {
    console.log('This is self-invoked');
})();
```

### Arguments

The parameters, in a function call, are the function's arguments. JavaScript arguments are passed **by value**. If a function changes an argument's value, it does not change the parameter's original value. Objects are passed **by reference**. If a function changes an object property, it changes the original value.

If a function is called with missing arguments (less than declared), the missing values are set to: `undefined`.

```javascript
x = findMax(1, 123, 500, 115, 44, 88);

function findMax() {
    var i;
    var max = -Infinity;
    for (i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}
```

## Objects

Objects are mutable: they are addressed **by reference**, not by value. If `y` is an object, the following statement will not create a copy of `y`:

```javascript
var x = y;
```

The object `x` is not a copy of `y`. It is `y`. Both `x` and `y` points to the same object. Any changes to `y` will also change `x`, because `x` and `y` are the same object.

### New objects

New objects are created using a constructor, which is a regular function invoked using `new`. The new constructor call (e.g. `new Foo()`):

1. Creates a new object
2. Sets the prototype of that object to `Foo.prototype`
3. Passes that as `this` to the constructor.

### Class pattern

```javascript
// Constructor
function Foo(bar) {
  // always initialize all instance properties
  this.bar = bar;
  this.baz = 'baz'; // default value
}
// class methods
Foo.prototype.fooBar = function() {

};

// export the class
module.exports = Foo;
```

### Class instantiation:

Instantiating a class is simple:

```javascript
// constructor call
var object = new Foo('Hello');
```

## JavaScript Prototypes

Javascript is an object-oriented programming language that supports delegating inheritance based on prototypes.

1. All JavaScript objects inherit the properties and methods from their prototype.
2. Objects created using an object literal, or with `new Object()`, inherit from a prototype called `Object.prototype`. Objects created with `new Date()` inherit the `Date.prototype`.
3. The `Object.prototype` is on the top of the prototype chain.
4. All JavaScript objects (Date, Array, RegExp, Function, ....) inherit from the `Object.prototype`.

### Creating a Prototype

The standard way to create an object prototype is to use an object constructor function:

```javascript
function Person(name, surname, age, eyeColor) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.eyeColor = eyeColor;
}

var father = new Person("John", "Doe", 50, "blue");
var mother = new Person("Sally", "Rally", 48, "green");
```

#### Adding a Property to an Object

Adding a new property to an existing object is easy:

```javascript
mother.nationality = "English";
```

#### Adding a Method to an Object

Adding a new method to an existing object is also easy:

```javascript
father.fullName = function () {
    return this.name + " " + this.surname;
};
```

#### Adding Properties and Methods to a Prototype

You cannot add a new property or method to a prototype the same way as you do to an existing object, because the prototype is not an existing object.

```javascript
Person.prototype.nationality = "English";
Person.prototype.fullName = function() {
    return this.name + " " + this.surname;
};
```
