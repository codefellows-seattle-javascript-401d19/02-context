'use strict';

const fp = module.exports = {};

fp.map = (callback, collection) => {
  if(!collection) throw new TypeError('fp.map(callback, collection) requires two arguments');
  if(collection.length === undefined) throw new TypeError('<collection> must be an iterable object.');
  return [].map.call(collection, callback);
};