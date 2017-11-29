'use strict';

const fp = module.exports = {};

fp.map = function(callback, collection) {
  return Array.prototype.map.call(collection, callback);
};

fp.filter = (callback, collection) => {
  return Array.prototype.filter.call(collection, callback);
};

fp.reduce = (callback, collection, initialState) => {
  return Array.prototype.reduce.call(collection, callback, initialState);
};

fp.slice = (begin, end, collection) => {
  return Array.prototype.slice.call(collection, begin, end);
};
