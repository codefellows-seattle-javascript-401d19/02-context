'use strict';

const fp = module.exports = {};

fp.map = function(callback, collection) {
  return Array.prototype.map.call(collection, callback);
};

fp.filter = (callback, collection) => {
  return Array.prototype.filter.call(collection, callback);
};

fp.reduce = (callback, collection) => {
  return Array.prototype.reduce.call(collection, callback);

};

fp.slice = (callback, collection) => {
  return Array.prototype.slice.call(collection, callback);
};
