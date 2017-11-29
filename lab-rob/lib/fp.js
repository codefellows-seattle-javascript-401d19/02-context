'use strict';

const fp = module.exports = {};

fp.enoughParams = (funcName, ...args) => {
  for(let arg in args) {
    if ([undefined, null].includes(args[arg]))
      throw new TypeError(`Argument ${arg} of ${funcName} is either undefined or null`);
  }
  return true;
};

fp.map = (callback, collection) => {
  if ([undefined, null].includes(collection))
    throw new TypeError('fp.map(callback, collection) requires two defined arguments. Either <callback> or <collection> is undefined or null');
  if(collection.length === undefined) 
    throw new TypeError('<collection> must be an iterable object.');
  return [].map.call(collection, callback);
};

fp.filter = (callback, collection) => {
  if ([undefined, null].includes(collection))
    throw new TypeError('fp.map(callback, collection) requires two defined arguments. Either <callback> or <collection> is undefined or null');
  if (collection.length === undefined)
    throw new TypeError('<collection> must be an iterable object.');
  return [].filter.call(collection, callback);
};

// console.log(fp.filter(
//   ele => ele
// ));