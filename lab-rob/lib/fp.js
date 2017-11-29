'use strict';

const fp = module.exports = {};

fp.map = (callback, collection) => {
  if ([undefined, null].includes(collection))
    throw new TypeError('fp.map(callback, collection) requires two defined arguments. Either <callback> or <collection> is undefined or null');
  if(collection.length === undefined) 
    throw new TypeError('<collection> must be an iterable object.');
  return [].map.call(collection, callback);
};
