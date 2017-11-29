'use strict';

const fp = module.exports = {};

fp.map = function(callback, collection) {
  if(typeof collection !== 'object') throw new TypeError('<collection> should be an object');
  if(collection.length < 1) throw new TypeError('<collection> must have input');
  collection.forEach(a => {
    if(typeof a !== 'number') throw new TypeError('all .map items in <collection> must be numbers');
  });
  return Array.prototype.map.call(collection, callback);
};

fp.filter = function(callback, collection) {
  if(typeof collection !== 'object') throw new TypeError('<collection> should be an object');
  if(collection.length < 1) throw new TypeError('<collection> must have input');
  collection.forEach(a => {
    if(typeof a !== 'number') throw new TypeError('all .filter items in <collection> must be numbers');
  });
  return Array.prototype.filter.call(collection, callback);
};

fp.reduce = function(callback, collection, initialState) {
//   if(typeof callback !== 'function') throw new TypeError('<callback> should be a function');
  if(typeof collection != 'object') throw new TypeError('<collection> should be an object');
  if(collection.length < 1) throw new TypeError('<collection> must have input');
  collection.forEach(a => {
    if(typeof a !== 'number') throw new TypeError('all .reduce items in <collection> must be numbers');
  });
  if(typeof initialState !== 'number') throw new TypeError('<initialState> must be a number');
  return Array.prototype.reduce.call(collection, callback, initialState);
};

// fp.slice = function(begin, end, collection) {
//   if(typeof callback !== 'function') throw new TypeError('<callback> should be a function');
//   if(typeof collection != 'object') throw new TypeError('<callback> should be a function');
//   return Array.prototype.filter.call(collection, callback);
// };



// fp.reduce should have the function signature (callback, initialState, collection) => data
// fp.slice should have the function signature (begin, end, collection) => Array