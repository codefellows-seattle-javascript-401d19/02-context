'use strict';

const fp = module.exports = {};

fp.map = function (callback, collection) {
  if(!(callback instanceof Function)) throw new Error('first parameter is not a function');
  if(!(collection instanceof Array) && (typeof collection !== 'string')) throw new Error('second parameter is not an array or string');
  return Array.prototype.map.call(collection, callback);
};

fp.filter = function (callback, collection) {
  if(!(callback instanceof Function)) throw new Error('first parameter is not a function');
  if(!(collection instanceof Array)) throw new Error('second parameter is not an array');
  return Array.prototype.filter.call(collection, callback);
};

fp.reduce = function (callback, collection, initialValue) {
  if(!(callback instanceof Function)) throw new Error('first parameter is not a function');
  if(!(collection instanceof Array)) throw new Error('second parameter is not an array');
  return Array.prototype.reduce.call(collection, callback, initialValue);
};

fp.slice = function (begin, end, collection) {
  if(!(collection instanceof Array)) throw new Error('third parameter is not an array');
  return Array.prototype.slice.call(collection, begin, end);
};
