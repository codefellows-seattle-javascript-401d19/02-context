'use strict';

const fp = module.exports = {};

fp.map = function(callback, collection) {
  if(typeof callback !== 'function') throw new TypeError('<callback> should be a function');
  if(typeof collection !== 'object') throw new TypeError('<callback> should be an object');
  return Array.prototype.map.call(collection, callback);
};

fp.filter = function(callback, collection) {
  if(typeof callback !== 'function') throw new TypeError('<callback> should be a function');
  if(typeof collection != 'object') throw new TypeError('<callback> should be a function');
  return Array.prototype.filter.call(collection, callback);
};

// fp.reduce = function(callback, initialState, collection) {
//   if(typeof callback !== 'function') throw new TypeError('<callback> should be a function');
//   if(typeof collection != 'object') throw new TypeError('<callback> should be a function');
//   return Array.prototype.filter.call(collection, callback);
// };

// fp.slice = function(begin, end, collection) {
//   if(typeof callback !== 'function') throw new TypeError('<callback> should be a function');
//   if(typeof collection != 'object') throw new TypeError('<callback> should be a function');
//   return Array.prototype.filter.call(collection, callback);
// };


// fp.map and fp.filter should have the function signature (callback, collection) => Array
// fp.reduce should have the function signature (callback, initialState, collection) => data
// fp.slice should have the function signature (begin, end, collection) => Array