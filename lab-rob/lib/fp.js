'use strict';

const fp = module.exports = {};

fp.enoughArgs = (funcName, ...args) => {
  if (!isString(funcName))
    throw new TypeError(`argument 'funcName' must be a string, but was a ${typeof funcName}.`);
  for(let arg in args) {
    if ([undefined, null].includes(args[arg]))
      throw new TypeError(`Argument ${Number(arg) + 1} of ${funcName} is either undefined or null.`);
  }
  return true;
};

fp.correctType = (arg, expected, test) => {
  fp.enoughArgs('correctType()', arg, expected, test);
  if(!isString(expected))
    throw new TypeError(`argument 'expected' must be a string, but was a ${typeof expected}.`);
  if(!isFunction(test))
    throw new TypeError(`argument 'test' must be a function, but was a ${typeof expected}.`);
  if(test(arg)) return true;
  throw new TypeError(`${expected} was expected, but was not supplied. Got ${typeof arg}.`);
};

fp.map = (callback, collection) => {
  fp.enoughArgs('fp.map()', callback, collection);
  fp.correctType(callback, 'A function', isFunction);
  fp.correctType(collection, 'An iterable object', isIterable);
  return [].map.call(collection, callback);
};

fp.filter = (callback, collection) => {
  fp.enoughArgs('fp.filter()', callback, collection);
  fp.correctType(callback, 'A function', isFunction);
  fp.correctType(collection, 'An iterable object', isIterable);
  return [].filter.call(collection, callback);
};

let isIterable = object => object.length !== undefined;
let isFunction = object => typeof object === 'function';
let isString = object => typeof object === 'string';