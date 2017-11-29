'use strict';

const fp = module.exports = {};

fp.map = function(callback, collection) {
  if(typeof callback !== 'function') throw new TypeError('<callback> should be a function');
  if(typeof collection !== 'object') throw new TypeError('<callback> should be an object');
  return Array.prototype.map.call(collection, callback);

};


// In each function error-check each parameter and throw an Error with a meaningful message if the function is invoked with invalid arguments. Do not use any third party libraries in the FP module.

// fp.map and fp.filter should have the function signature (callback, collection) => Array
// fp.reduce should have the function signature (callback, initialState, collection) => data
// fp.slice should have the function signature (begin, end, collection) => Array