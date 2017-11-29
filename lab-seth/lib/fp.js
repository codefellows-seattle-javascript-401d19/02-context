'use strict';

const fp = module.exports = {};

fp.map = (callback, collection) => {

  // Not needed as .map() already has a built in test for the callback not being a function
  // if(typeof callback !== 'function')
  //   throw new TypeError('<callback> should be a function');

  if(!Array.isArray(collection))
    throw new TypeError('<collection> should be an array or array of objects/object');

  if(collection === null)
    throw new TypeError('<collection> or <callback> should NOT be null');



  return Array.prototype.map.call(collection, callback);
};

fp.filter = (callback, collection) => {

  return array;
};

fp.reduce = (callback, initialState, collection) => {

  return data;
};

fp.slice = (begin, end, collection) => {

  return array;
};
