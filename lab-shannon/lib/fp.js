'use strict';

const fp = module.exports = {};

fp.map = (callback, collection) => {
  if(typeof callback !== 'function'){
    throw new TypeError('The callback you provided is not a function');
  }

  return Array.prototype.map.call(collection, callback);
};

fp.filter = (callback, collection) => {
  return Array.prototype.filter.call(collection, callback);
}
