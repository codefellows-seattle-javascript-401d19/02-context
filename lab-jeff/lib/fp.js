'use strict';

const fp = module.exports = {};

fp.map = (callback, collection) => {
  if (!collection.length)
    throw new TypeError('<collection> should be a string or array');
  return Array.prototype.map.call(collection, callback);
};

fp.filter = (callback, collection) => {
  if (!collection.length)
    throw new TypeError('<collection> should be a string or array');
  return Array.prototype.filter.call(collection, callback);
};
