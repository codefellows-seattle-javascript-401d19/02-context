'use strict';


const fp = module.exports = {};



// #### fp Module
// Create a NodeJS module in the lib/ directory named fp.js that exports an object. Create stand-alone `map`, `filter`, `reduce`, and `slice` functions using the `call` and `apply` function methods. Define each function using ES6 lexical arrow function syntax.
//
// In each function error-check each parameter and throw an Error with a meaningful message if the function is invoked with invalid arguments. Do not use any third party libraries in the FP module.
//
// * `fp.map` and `fp.filter` should have the function signature `(callback, collection) => Array`
// * `fp.reduce` should have the function signature `(callback, initialState, collection) => data`
// * `fp.slice` should have the function signature `(begin, end, collection) => Array`
