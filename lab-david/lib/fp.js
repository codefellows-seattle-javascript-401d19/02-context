'use strict';

const customFunctions = module.exports = {};

customFunctions.reduce = (callback, collection, initialValue) => {
  if(typeof callback !== 'function')
    throw new TypeError('<callback> should be a function!');
  return Array.prototype.reduce.call(collection, callback, intitalValue);
};

