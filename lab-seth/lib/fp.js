'use strict';

const fp = module.exports = {};

fp.map = (callback, collection) => {

  if(typeof callback !== 'function')
    throw new TypeError('<callback> should be a function');

  return Array.prototype.map.call(collection, callback);
};

fp.filter = (callback, collection) => {

  return array;
};

fp.reduce = (callback, initialState, collection) => {

  return data;
};

fp.slice = (begin, end, collection) => {

  return array;
};
