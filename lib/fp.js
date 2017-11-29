'use strict';


const fp = module.exports = {};

fp.reduce = (callback, collection, initialValue) => {
  //assumes that collection is an array like object, we should test for this
  if(typeof callback !== 'function' ){
    throw new TypeError('<callback> must be a function');
  }
  if(typeof collection !== 'object' ){
    throw new TypeError('<collection> must be an array or array like object');
  }
  collection.forEach((x) => {if(typeof x !== 'number'){throw new TypeError('<collection> inputs must be numbers');}});
  if(typeof initialValue !== 'number'){
    console.log('callback');
    throw new TypeError('<initialValue> must be a number');
  }
  return Array.prototype.reduce.call(collection, callback, initialValue);
};

fp.map = (callback, collection) => {
  if(typeof callback !== 'function' ){
    throw new TypeError('<callback> must be a function');
  }
  if(typeof collection !== 'object' ){
    throw new TypeError('<collection> must be an array or array like object');
  }
  collection.forEach((x) => {if(typeof x !== 'number'){throw new TypeError('<collection> inputs must be numbers');}});
  return Array.prototype.map.call(collection, callback);
};

fp.filter = (callback, collection) => {
  if(typeof callback !== 'function' ){
    throw new TypeError('<callback> must be a function');
  }
  if(typeof collection !== 'object' ){
    throw new TypeError('<collection> must be an array or array like object');
  }
  for(let i=0; i<collection.length-1; i++){
    if(typeof collection[i] !== typeof collection[i+1]){throw new TypeError('<collection> inputs must be of same type');}
  }
  return Array.prototype.filter.call(collection, callback);
};

fp.filter = (collection, begin, end) => {
  if(!Number.isInteger(begin) || !Number.isInteger(end)){
    throw new TypeError('begin and end must both be integers');
  }
  if(typeof collection !== 'object' ){
    throw new TypeError('<collection> must be an array or array like object');
  }
  for(let i=0; i<collection.length-1; i++){
    if(typeof collection[i] !== typeof collection[i+1]){throw new TypeError('<collection> inputs must be of same type');}
  }
  if(begin >= collection.length || end >= collection.length){
    throw new TypeError('<begin> and <end> must not be larger than the length of the <collection -1>');
  }
  return Array.prototype.filter.call(collection, begin, end);
};
