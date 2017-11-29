'use strict';

const fp = module.exports = {};

fp.map = (callback, collection) => {
  if (typeof callback !== 'function'){
    throw new TypeError('The callback you provided is not a function');
  }
  else if (!Array.isArray(collection)){
    throw new TypeError(`The collection provided must be an array`);
  }

  return Array.prototype.map.call(collection, callback);
};

fp.filter = (callback, collection) => {
  if (typeof callback !== 'function'){
    throw new TypeError('The callback you provided is not a function');
  }
  else if (!Array.isArray(collection)){
    throw new TypeError(`The collection provided must be an array`);
  }

  return Array.prototype.filter.call(collection, callback);
}

fp.slice = (start, stop, collection) => {
  if (!Array.isArray(collection)){
    throw new TypeError(`The collection provided must be an array`);
  }
  else if (typeof start !== `number` || start < 0){
    throw new Error(`Start must be a positive whole number`)
  }
  else if (typeof stop !== `number` || stop < 0){
    throw new Error(`Start must be a positive whole number`)
  }

  return Array.prototype.slice.call(collection, start, stop);
}

fp.reduce = (callback, collection, initialValue) => {
  if (typeof callback !== 'function'){
    throw new TypeError('The callback you provided is not a function');
  }
  else if (!Array.isArray(collection)){
    throw new TypeError(`The collection provided must be an array`);
  }
  else if (typeof initialValue !== `number`){
    throw new TypeError(`The accumulator must be a number`);
  }
  else if (!collection.every((num) => {
    return typeof num === `number`;
  })){
    throw new Error(`All elements of the array must be a number`);
  }

  return Array.prototype.reduce.call(collection, callback, initialValue)
}
