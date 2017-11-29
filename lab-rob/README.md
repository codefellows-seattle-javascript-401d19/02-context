# Code Fellows: Code 401d19: Full-Stack JavaScript
## Lab 02: Tools and Context
#### 11/28/17 - Robert Reed

### fp.js
fp.js exports 4 functions that extend the built in array methods `map()`, `filter()`, `reduce()`, and `slice()`.

#### `fp.map(callback, collection)`
`fp.map()` has an arity of two, and expects first a callback function, and then an iterable objet like an array, string, or array-like object. If either parameter is not of the intended type, the method will throw an error. If there are less than two arguments provided, it will throw an error. Otherwise, if the array contains only elements of type `number`, the function will return `true`. If the array contains _any_ non-numbers, the function will return `false`.

#### `arithmetic.add(num1, num2)`
`arithmetic.add()` has an arity of 2 and expects numbers. If both arguments given are numbers, the function returns their sum. If either or both of the arguments are not a number, the function will return `null`. This method makes use of the `arithmetic.areNums()` method to ensure valid arguments are given. If additional arguments are given, and one of those arguments is not a number, the function will return `null`.

#### `arithmetic.sub(num1, num2)`
`arithmetic.sub()` has an arity of 2 and expects numbers. If both arguments given are numbers, the function returns their difference, in the form `num1 - num2`. If either or both of the arguments are not a number, the function will return `null`. This method makes use of the `arithmetic.areNums()` method to ensure valid arguments are given. If additional arguments are given, and one of those arguments is not a number, the function will return `null`.
