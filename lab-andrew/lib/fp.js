'use strict';

const fp = module.exports = {};

fp.map = (callback, collection) => {
  if (typeof collection !== 'object') throw new TypeError('collection must be an array');
  if (collection.length < 1) throw new TypeError('collection must contain values');
  collection.forEach(e => {
    if (typeof e !== 'number') throw new TypeError('all array values must be numbers');
  });
  return Array.prototype.map.call(collection, callback);
};

fp.filter = (callback, collection) => {
  if (typeof collection !== 'object') throw new TypeError('collection must be an array');
  if (collection.length < 1) throw new TypeError('collection must contain values');
  collection.forEach(e => {
    if (typeof e !== 'number') throw new TypeError('all array values must be numbers');
  });
  return Array.prototype.filter.call(collection, callback);
};

fp.reduce = (callback, collection, initialValue) => {
  if (typeof collection !== 'object') throw new TypeError('collection must be an array');
  if (collection.length < 1) throw new TypeError('collection must contain values');
  collection.forEach(e => {
    if (typeof e !== 'number') throw new TypeError('all array values must be numbers');
  });
  if (typeof initialValue !== 'number') throw new TypeError('accumulator must be a number');
  return Array.prototype.reduce.call(collection, callback, initialValue);
};

fp.slice = (collection, begin, end) => {
  if (typeof collection !== 'object') throw new TypeError('collection must be an array');
  if (collection.length < 1) throw new TypeError('collection must contain values');
  if (begin){
    begin = parseInt(begin);
    if (isNaN(begin)) throw new TypeError('begin argument must be an integer');
  }
  if (end){
    end = parseInt(end);
    if (isNaN(end)) throw new TypeError('end argument must be an integer');
  }
  if (Math.abs(begin) > collection.length) throw new TypeError('beginning must not exceed length of array');
  return Array.prototype.slice.call(collection, begin, end);
};
