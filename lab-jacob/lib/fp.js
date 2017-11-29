'use strict';

const fp = module.exports = {};

fp.reduce = (callback,collection,startValue) => {
  if (typeof callback !== 'function')
    throw new TypeError('<Callback> Not A Function');

  return Array.prototype.reduce.call(collection,callback,startValue);
};

fp.map = (callback, collection) => {
  if (typeof callback !== 'function')
    throw new TypeError('<Callback> Not A Function');

  return Array.prototype.map.call(collection,callback);
};

fp.filter = (callback, collection) => {
  if (typeof callback !== 'function')
    throw new TypeError('<Callback> Not A Function');

  return Array.prototype.filter.call(collection,callback);
};

