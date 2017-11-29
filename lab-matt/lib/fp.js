'use strict';

const fp = module.exports = {};

fp.map = function(callback, collection) {
  return Array.prototype.map.call(collection, callback);
};

fp.filter = (callback, collection) => {
  return Array.prototype.filter.call(collection, callback);
};

fp.reduce = () => {

};

fp.slice = () => {

};
