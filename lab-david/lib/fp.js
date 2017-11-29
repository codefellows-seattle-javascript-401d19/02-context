'use strict';

const fp = module.exports = {};

fp.reduce = (callback, collection, initialValue) => {
  if(typeof callback !== 'function')
    throw new TypeError('<callback> should be a function!');
  return Array.prototype.reduce.call(collection, callback, initialValue);
};

fp.map = (callback, collection) => {
  if(typeof callback !== 'function')
    throw new TypeError('<callback> should be a function!');
  return Array.prototype.map.call(collection, callback);
};

fp.filter = (callback, collection) => {
  if(typeof callback !== 'function')
    throw new TypeError('<callback> should be a function!');
  return Array.prototype.filter.call(collection, callback);
};

fp.slice = (begin, end, collection) => {
  if(typeof callback !== 'object')
    throw new TypeError('<collection> is not an object!');
  return Array.prototype.slice.apply(this, [collection, begin, end]);
};