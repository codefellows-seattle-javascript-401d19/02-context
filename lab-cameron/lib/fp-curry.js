'use strict';

const fp = module.exports = {};

// fp.map = (callback, collection) => {
//   if (typeof callback !== 'function') {
//     throw new TypeError('<callback> should be a function');
//   }
//
//   if (!Array.isArray(collection)) {
//     throw new TypeError('<collection> should be an array');
//   }
//
//   return Array.prototype.map.call(collection, callback);
// };

fp.map =
  callback =>
    collection => {
      if (typeof callback !== 'function') {
        throw new TypeError('<callback> should be a function');
      }
      if (!Array.isArray(collection)) {
        throw new TypeError('<collection> should be an array');
      }

      return Array.prototype.map.call(collection, callback);
    };


fp.filter =
  callback =>
    collection => {
      if (typeof callback !== 'function') {
        throw new TypeError('<callback> should be a function');
      }

      if (!Array.isArray(collection)) {
        throw new TypeError('<collection> should be an array');
      }

      return Array.prototype.filter.call(collection, callback);
    };

fp.reduce =
  callback =>
    initialState =>
      collection => {
        if (typeof callback !== 'function') {
          throw new TypeError('<callback> should be a function');
        }

        if (!Array.isArray(collection)) {
          throw new TypeError('<collection> should be an array');
        }

        return Array.prototype.reduce.call(collection, callback, initialState);
      };

fp.slice =
begin =>
  end =>
    collection => {
      if (!Array.isArray(collection)) {
        throw new TypeError('<collection> should be an array');
      }

      return Array.prototype.slice.call(collection, begin, end);
    };
