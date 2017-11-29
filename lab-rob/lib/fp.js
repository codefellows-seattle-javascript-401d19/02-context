'use strict';

const fp = module.exports = {};

fp.map = (callback, collection) => {
  // if(typeof callback !== 'function') throw TypeError;
  return [].map.call(collection, callback);
};