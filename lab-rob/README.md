# Code Fellows: Code 401d19: Full-Stack JavaScript
## Lab 02: Tools and Context
#### 11/28/17 - Robert Reed

### fp.js
fp.js exports 4 functions that extend the built in array methods `map()`, `filter()`, `reduce()`, and `slice()`.

#### `fp.map(callback, collection)`
`fp.map()` has an arity of two, and expects first a callback function, and then an iterable object like an array, string, or array-like object. If either parameter is not of the intended type, the method will throw an error. If there are less than two arguments provided, it will throw an error. If the callback is not a function, the `map` array method will throw an error. Otherwise, if the callback is valid and the object is iterable, the function will return an array with each iterable item acted upon by the callback function. If an empty array or empty string is input for `collection`, and empty array is returned.
