'use strict';

const fp = module.exports = {};

fp.map = (callback, collection) => {

  if(typeof callback !== 'function')
    throw new TypeError('<callback> should be a function');

  if(!Array.isArray(collection))
    throw new TypeError('<collection> should be an array or array of objects/object');

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
