'use strict';


const fp = module.exports = {};

fp.reduce = (callback, collection, initialValue) => {
  //assumes that collection is an array like object, we should test for this
  if(typeof callback !== 'function' ){
    throw new TypeError('<callback> must be a function');
  }
  if(typeof collection !== 'object' ){
    throw new TypeError('<collection> must be an array or array like object');
  }
  collection.forEach((x) => {if(typeof x !== 'number'){throw new TypeError('<collection> inputs must be numbers');}});
  if(typeof initialValue !== 'number'){
    console.log('callback');
    throw new TypeError('<initialValue> must be a number');
  }
  return Array.prototype.reduce.call(collection, callback, initialValue);
};

fp.map = (callback, collection) => {
  //assumes that collection is an array like object, we should test for this
  if(typeof callback !== 'function' ){
    throw new TypeError('<callback> must be a function');
  }
  if(typeof collection !== 'object' ){
    throw new TypeError('<collection> must be an array or array like object');
  }
  collection.forEach((x) => {if(typeof x !== 'number'){throw new TypeError('<collection> inputs must be numbers');}});
  return Array.prototype.map.call(collection, callback);
};

fp.filter = (callback, collection) => {
  //assumes that collection is an array like object, we should test for this
  if(typeof callback !== 'function' ){
    throw new TypeError('<callback> must be a function');
  }
  if(typeof collection !== 'object' ){
    throw new TypeError('<collection> must be an array or array like object');
  }
  for(let i=0; i<collection.length-1; i++){
    if(typeof collection[i] !== typeof collection[i+1]){throw new TypeError('<collection> inputs must be of same type');}
  }
  return Array.prototype.filter.call(collection, callback);
};
// fp.filter
// fp.slice


// fp.sum = () => {
//   if(typeof a !== 'number' || typeof b !== 'number'){
//     return null;
//   }
//   return a+b;
// };

// #### fp Module
// Create a NodeJS module in the lib/ directory named fp.js that exports an object. Create stand-alone `map`, `filter`, `reduce`, and `slice` functions using the `call` and `apply` function methods. Define each function using ES6 lexical arrow function syntax.
//
// In each function error-check each parameter and throw an Error with a meaningful message if the function is invoked with invalid arguments. Do not use any third party libraries in the FP module.
//
// * `fp.map` and `fp.filter` should have the function signature `(callback, collection) => Array`
// * `fp.reduce` should have the function signature `(callback, initialState, collection) => data`
// * `fp.slice` should have the function signature `(begin, end, collection) => Array`
