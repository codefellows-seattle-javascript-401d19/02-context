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
  fp.correctType(callback, 'A function', isFunction);
  fp.correctType(collection, 'An iterable object', isIterable);
  return [].map.call(collection, callback);
};

fp.filter = (callback, collection) => {
  fp.enoughArgs(callback, collection);
  fp.correctType(callback, 'A function', isFunction);
  fp.correctType(collection, 'An iterable object', isIterable);
  return [].filter.call(collection, callback);
};

let isIterable = object => object.length !== undefined;
let isFunction = object => typeof object === 'function';