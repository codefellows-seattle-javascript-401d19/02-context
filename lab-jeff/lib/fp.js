'use strict';

const fp = module.exports = {};

fp.map = (callback, collection) => {
  return Array.prototype.map.call(collection, callback);

};
