'use strict';

const fp = module.exports = {};

fp.map = (callback, collection) => {
  if(typeof callback !== 'function')
    throw new TypeError('<callback> should be a function');
  return Array.prototype.map.call(collection, callback);
};
