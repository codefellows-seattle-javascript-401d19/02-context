'use strict';

const fp = module.exports = {};

fp.reduceGenerator = (...args) => {
  return Array.prototype.reduce.call(args,
    (accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);
};

fp.reduce = (callback, array, initialValue) => {
  if (typeof callback !== 'function')
    throw new TypeError('<Callback> Not A Function');

  return Array.prototype.reduce.call(array, callback, initialValue);
};