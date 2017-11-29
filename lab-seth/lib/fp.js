'use strict';

const fp = module.exports = {};

fp.map = (callback, collection) => {

  // Not needed as .map() already has a built in test for the callback not being a function
  // if(typeof callback !== 'function')
  //   throw new TypeError('<callback> should be a function');

  if(!Array.isArray(collection))
    throw new TypeError('<collection> should be an array');

  if(collection === null)
    throw new TypeError('<collection> should NOT be null');

  return Array.prototype.map.call(collection, callback);
};

fp.reduce = (callback, collection, initialValue) => {

  if(typeof callback !== 'function')
    throw new TypeError('<callback> should be a function');

  if(!Array.isArray(collection))
    throw new TypeError('<collection> should be an array');

  if(collection === null)
    throw new TypeError('<collection> should NOT be null');

  return Array.prototype.reduce.call(collection, callback, initialValue);
};

fp.filter = (callback, collection) => {

  return Array.prototype.filter.call(collection, callback);
};

fp.slice = (begin, end, collection) => {

  return array;
};
