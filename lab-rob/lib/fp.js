'use strict';

const fp = module.exports = {};

fp.enoughArgs = (funcName, ...args) => {
  for(let arg in args) {
    if ([undefined, null].includes(args[arg]))
      throw new TypeError(`Argument ${Number(arg) + 1} of ${funcName} is either undefined or null.`);
  }
  return true;
};

fp.map = (callback, collection) => {
  fp.enoughArgs(callback, collection);
  if(collection.length === undefined) 
    throw new TypeError('<collection> must be an iterable object.');
  return [].map.call(collection, callback);
};

fp.filter = (callback, collection) => {
  fp.enoughArgs(callback, collection);
  if (collection.length === undefined)
    throw new TypeError('<collection> must be an iterable object.');
  return [].filter.call(collection, callback);
};
