'use strict';

const fp = module.exports = {};

fp.map = (callback, collection) => {
  if (typeof callback !== 'function') throw new TypeError('callback must be function');
  if (typeof collection !== 'object') throw new TypeError('collection must be an array');
  if (collection.length < 1) throw new TypeError('collection must contain values');
  collection.forEach(e => {
    if (typeof e !== 'number') throw new TypeError('all array values must be numbers');
  });
  return Array.prototype.map.call(collection, callback);
};

fp.filter = (callback, collection) => {
  if (typeof callback !== 'function') throw new TypeError('callback must be function');
  if (typeof collection !== 'object') throw new TypeError('collection must be an array');
  if (collection.length < 1) throw new TypeError('collection must contain values');
  collection.forEach(e => {
    if (typeof e !== 'number') throw new TypeError('all array values must be numbers');
  });
  return Array.prototype.filter.call(collection, callback);
};

fp.reduce = (callback, collection, initialValue) => {
  if (typeof callback !== 'function') throw new TypeError('callback must be function');
  if (typeof collection !== 'object') throw new TypeError('collection must be an array');
  if (collection.length < 1) throw new TypeError('collection must contain values');
  collection.forEach(e => {
    if (typeof e !== 'number') throw new TypeError('all array values must be numbers');
  });
  return Array.prototype.reduce.call(collection, callback, initialValue);
};

fp.slice = (collection, begin, end) => {
  return Array.prototype.slice.call(collection, begin, end);
};
