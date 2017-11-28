'use strict';

const fp = module.exports = {};

fp.map = (callback, collection) => {
  if (typeof callback !== 'function')
    throw new TypeError('<callback> should be a function()');
  if (!collection.length)
    throw new TypeError('<collection> should be a string or array');
  return Array.prototype.map.call(collection, callback);

};
