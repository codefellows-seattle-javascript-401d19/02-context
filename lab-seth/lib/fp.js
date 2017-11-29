'use strict';

const fp = module.exports = {};

fp.map = (callback, collection) => {

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

  if(typeof callback !== 'function')
    throw new TypeError('<callback> should be a function');

  if(!Array.isArray(collection))
    throw new TypeError('<collection> should be an array');

  return Array.prototype.filter.call(collection, callback);
};

fp.slice = (begin, end, collection) => {

  if(!Array.isArray(collection))
    throw new TypeError('<collection> should be an array');

  if(typeof begin !== 'number' || typeof end !== 'number')
    throw new TypeError('<begin> and <end> should be a number');


  return Array.prototype.slice.call(collection, begin, end);
};
