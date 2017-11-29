'use strict';

const fp = module.exports = {};

fp.map = (callback, collection) => {
  if(typeof callback !== 'function'){
    throw new TypeError('The callback you provided is not a function');
  }

  return Array.prototype.map.call(collection, callback);
};

fp.filter = (callback, collection) => {
  if(typeof callback !== 'function'){
    throw new TypeError('The callback you provided is not a function');
  }
  return Array.prototype.filter.call(collection, callback);
}

fp.slice = (start, stop, collection) => {
  
  return Array.prototype.slice.call(collection, start, stop);
}

fp.reduce = (callback, collection, initialValue) => {
  if(typeof callback !== 'function'){
    throw new TypeError('The callback you provided is not a function');
  }
  return Array.prototype.reduce.call(collection, callback, initialValue)
}
