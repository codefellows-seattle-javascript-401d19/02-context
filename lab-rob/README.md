# Code Fellows: Code 401d19: Full-Stack JavaScript
## Lab 01: Node Ecosystem
#### 11/27/17 - Robert Reed

### greet.js
greet.js exports a single function, creatively called `greet()`. The function has an arity of 1, expecting a single string as its argument.

If a non-string (or no argument) is provided to the function, `null` is returned. 

If a single string is provided as argument, the function returns a concatenated version of the string with `hello <string>`.

If multiple strings are provided, the first string is used.

### arithmetic.js
arithmetic.js exports an object containing three methods.

#### `arithmetic.areNums(array)`
`arithmetic.areNums()` has an arity of one, and expects a single array as argument. If a non-array or no argument is given, the method will throw an error. If an array of length 0 is provided, it will return `false`. Otherwise, if the array contains only elements of type `number`, the function will return `true`. If the array contains _any_ non-numbers, the function will return `false`.

#### `arithmetic.add(num1, num2)`
`arithmetic.add()` has an arity of 2 and expects numbers. If both arguments given are numbers, the function returns their sum. If either or both of the arguments are not a number, the function will return `null`. This method makes use of the `arithmetic.areNums()` method to ensure valid arguments are given. If additional arguments are given, and one of those arguments is not a number, the function will return `null`.

#### `arithmetic.sub(num1, num2)`
`arithmetic.sub()` has an arity of 2 and expects numbers. If both arguments given are numbers, the function returns their difference, in the form `num1 - num2`. If either or both of the arguments are not a number, the function will return `null`. This method makes use of the `arithmetic.areNums()` method to ensure valid arguments are given. If additional arguments are given, and one of those arguments is not a number, the function will return `null`.
