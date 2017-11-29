'use strict';

const fp = module.exports = {};

fp.map = (callback, collection) => {
  if (typeof callback !== 'function') {
    throw new TypeError('<callback> should be a function');
  }

  if (!collection.hasOwnProperty('length')) {
    throw new TypeError('<collection> should be an array-like object');
  }

  return Array.prototype.map.call(collection, callback);
};

fp.filter = (callback, collection) => {
  if (typeof callback !== 'function') {
    throw new TypeError('<callback> should be a function');
  }

  if (!collection.hasOwnProperty('length')) {
    throw new TypeError('<collection> should be an array-like object');
  }

  return Array.prototype.filter.call(collection, callback);
};

fp.reduce = (callback, initialState, collection) => {
  if (typeof callback !== 'function') {
    throw new TypeError('<callback> should be a function');
  }

  if (!collection.hasOwnProperty('length')) {
    throw new TypeError('<collection> should be an array-like object');
  }

  return Array.prototype.reduce.call(collection, callback, initialState);
};

fp.slice = (begin, end, collection) => {
  if (typeof begin !== 'number') {
    throw new TypeError('<begin> should be a number');
  }

  if (typeof end !== 'number') {
    throw new TypeError('<end> should be a number');
  }

  if (!collection.hasOwnProperty('length')) {
    throw new TypeError('<collection> should be an array-like object');
  }

  return Array.prototype.slice.call(collection, begin, end);
};
