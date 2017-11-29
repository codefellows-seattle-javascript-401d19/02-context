'use strict';

const fp = module.exports = {};

fp.enoughArgs = (funcName, ...args) => {
  for(let arg in args) {
    if ([undefined, null].includes(args[arg]))
      throw new TypeError(`Argument ${Number(arg) + 1} of ${funcName} is either undefined or null.`);
  }
  return true;
};

fp.correctType = (arg, expected, test) => {
  if(test(arg)) return true;
  throw new TypeError(`${expected} was expected, but was not supplied. Got ${typeof arg}.`);
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

console.log(fp.correctType(
  [],
  'An iterable object',
  arg => arg.length !== undefined
));