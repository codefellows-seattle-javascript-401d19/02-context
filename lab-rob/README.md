# Code Fellows: Code 401d19: Full-Stack JavaScript
## Lab 02: Tools and Context
#### 11/28/17 - Robert Reed

### fp.js
fp.js exports 6 functions, 2 that are used across methods, and 4 that extend the built in array methods `map()`, `filter()`, `reduce()`, and `slice()`.

#### `fp.enoughArgs(funcName, ...args)`
`fp.enoughArgs()` has one required argument and any number of optional arguments. `funcName` must be a string, and should be the name of the function. The function is used to check that all of the requested parameters have been supplied as arguments to the named function. Feed `enoughArgs` all of the parameters you want to check for existence. If all exist, true is returned. If any is missing, an error is thrown that tells the user which arg is missing. This is called in each of map, filter, reduce, and splice.

#### `fp.correctType(arg, expected, test)`
`fp.enoughArgs()` has an arity of 3, and is used on each argument to check that the correct type is supplied. `arg` is the parameter you want to check, `expected` is a string description of what you expected, for example 'A number', or 'A string', or, 'An enumerable object', and `test` is a callback function to test that the argument is of the expected type. If the test passes, true is returned. If the test fails, then an error is thrown. This is called in each of map, filter, reduce, and splice. 

#### `fp.map(callback, collection)`
`fp.map()` has an arity of two, and expects first a callback function, and then an iterable object like an array, string, or array-like object. If either argument is not of the intended type, the method will throw an error. If there are less than two arguments provided, it will throw an error. If the callback is not a function, or the collection is not iterable, it will throw an error. Otherwise, if the callback is valid and the object is iterable, the function will return an array with each iterable item acted upon by the callback function. If an empty array or empty string is input for `collection`, an empty array is returned.

#### `fp.filter(callback, collection)`
`fp.filter()` has an arity of two, and expects first a callback function, and then an iterable object like an array, string, or array-like object. If either argument is not of the intended type, the method will throw an error. If there are less than two arguments provided, it will throw an error. If the callback is not a function, or the collection is not iterable, it will throw an error. Otherwise, if the callback is valid and the object is iterable, the function will return an array with each iterable item acted upon by the callback function. If an empty array or empty string is input for `collection`, an empty array is returned.

#### `fp.reduce(callback, initialState, collection)`
`fp.reduce()` has an arity of three, and expects first a callback function, then an initialState for the reduction, and then an iterable object like an array, string, or array-like object. If any argument is not of the intended type, the method will throw an error. If there are less than three arguments provided, it will throw an error. If the callback is not a function, or the collection is not iterable, it will throw an error. Otherwise, if the callback is valid and the object is iterable, the function will return an object reduced as specified. If an empty array or empty string is input for `collection`, the initialState argument is returned.

#### `fp.slice(begin, end, collection)`
`fp.slice()` has an arity of three, and expects first a beginning index, then an ending index, and then an iterable object like an array, string, or array-like object. If any argument is not of the intended type, the method will throw an error. If there are less than three arguments provided, it will throw an error. Otherwise, the function will return an object sliced as specified. If an empty array or empty string is input for `collection`, an empty array is returned.
