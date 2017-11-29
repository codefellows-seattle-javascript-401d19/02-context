'use strict';

const fp = module.exports = {};

fp.map = (callback, collection) => {
  if(!collection.length) throw new TypeError('<collection> must be an iterable object.');
  if(!collection) throw new TypeError('fp.map(callback, collection) requires two arguments');
  return [].map.call(collection, callback);
};