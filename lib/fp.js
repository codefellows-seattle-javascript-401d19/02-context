'use strict';

const ourFunctions = module.exports = {};

ourFunctions.reduce = (callback, collection, initialValue) => {
  if (typeof callback !== 'function')
    throw new TypeError ('<callback> must be a function');

  return [].reduce.call(collection, callback, initialValue);

};

ourFunctions.map = (callback, collection) => {
  if (typeof callback !== 'function')
    throw new TypeError('<callback> must be a function');

  return [].map.call(collection, callback);

};

ourFunctions.filter = (callback, collection) => {
  if (typeof callback !== 'function')
    throw new TypeError('<callback> must be a function');

  return [].filter.call(collection, callback);

};

ourFunctions.slice = (begin, end, collection) => {
  if (typeof collection !== 'object')
    throw new TypeError('<collection> must be a function');

  return [].slice.call(collection, begin, end);

};