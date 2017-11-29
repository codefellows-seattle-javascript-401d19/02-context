'use strict';

const fp = module.exports = {};

fp.map = (callback, collection) => {
  if(typeof callback !== 'function')
    throw new TypeError('<callback> should be a function');
  if(typeof collection !== 'object')
    throw new TypeError('<collection> should be an array like object');
  return Array.prototype.map.call(collection, callback);
};

fp.filter = (callback, collection) => {
  if(typeof callback !== 'function')
    throw new TypeError('<callback> should be a function');
  if(typeof collection !== 'object')
    throw new TypeError('<collection> should be an array like object');
  return Array.prototype.filter.call(collection, callback);
};

fp.reduce = (callback, collection, initialValue) => {
  if(typeof callback !== 'function')
    throw new TypeError('<callback> is not a function');
  if(typeof initialValue !== 'number')
    throw new TypeError('<initialValue> is not a number')
  return Array.prototype.reduce.call(collection, callback, initialValue);
};
