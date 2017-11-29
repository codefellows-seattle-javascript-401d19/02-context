'use strict';

const fp = module.exports = {};

fp.map = (callback, collection) => {
  if (typeof callback !== 'function') {
    throw new TypeError();
  }
  return Array.prototype.map.call(collection, callback);
};

fp.filter = (callback, collection) => {
  if (typeof callback !== 'function') {
    throw new TypeError();
  }
  return Array.prototype.filter.call(collection, callback);
};

fp.reduce = (callback, initialState, collection) => {
  return Array.prototype.reduce.call(collection, callback, initialState);
};
