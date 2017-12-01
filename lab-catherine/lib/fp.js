'use strict';

const fp = module.exports = {};

//++++++++++++++++++++++++++++++++++++
// catherine - fp.map functions
//++++++++++++++++++++++++++++++++++++

fp.map = function(callback, collection) {
  if(typeof collection !== 'object') throw new TypeError('<collection> should be an object');
  if(collection.length < 1) throw new TypeError('<collection> must have input');
  collection.forEach(a => {
    if(typeof a !== 'number') throw new TypeError('all .map items in <collection> must be numbers');
  });
  return Array.prototype.map.call(collection, callback);
};

//++++++++++++++++++++++++++++++++++++
// catherine - fp.filter functions
//++++++++++++++++++++++++++++++++++++

fp.filter = function(callback, collection) {
  if(typeof collection !== 'object') throw new TypeError('<collection> should be an object');
  if(collection.length < 1) throw new TypeError('<collection> must have input');
  collection.forEach(a => {
    if(typeof a !== 'number') throw new TypeError('all .filter items in <collection> must be numbers');
  });
  return Array.prototype.filter.call(collection, callback);
};

//++++++++++++++++++++++++++++++++++++
// catherine - fp.reduce functions
//++++++++++++++++++++++++++++++++++++

fp.reduce = function(callback, collection, initialState) {
  if(typeof collection != 'object') throw new TypeError('<collection> should be an object');
  if(collection.length < 1) throw new TypeError('<collection> must have input');
  collection.forEach(a => {
    if(typeof a !== 'number') throw new TypeError('all .reduce items in <collection> must be numbers');
  });
  if(typeof initialState !== 'number') throw new TypeError('<initialState> must be a number');
  return Array.prototype.reduce.call(collection, callback, initialState);
};

//++++++++++++++++++++++++++++++++++++
// catherine - fp.slice functions
//++++++++++++++++++++++++++++++++++++

fp.slice = function(collection, begin, end) {
  if(typeof collection != 'object') throw new TypeError('<collection> should be an object');
  if(collection.length < 1) throw new TypeError('<collection> must have input');
  return Array.prototype.slice.call(collection, begin, end);
};