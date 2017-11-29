'use strict';

const curry = require('../lib/fp-curry.js');
const map = function(obj) {
  return curry.type('map', obj);
};
const filter = function(obj) {
  return curry.type('filter', obj);
};
const reduce = function(obj) {
  return curry.type('reduce', obj);
};
const slice = function(obj) {
  return curry.type('slice', obj);
};

describe('fp-curry.js', () => {
  // ---------------------------------------------
  //  MAP
  // ---------------------------------------------
  describe('curry map method', () => {
    // ------METHODS/PARAMETERS-------
    const multiplyByTwo = function(currentElement) {
      if (typeof(currentElement) !== 'number') throw new TypeError('array can only include numbers');
      return currentElement * 2;
    };

    // --------TEST FUNCTIONS---------
    let successfulTest = function(collection, method, expected) {
      expect(map({
        collection: collection,
        callback: method,
      })).toEqual(expected);
    };

    let throwTest = function(collection, method) {
      expect(() => {
        map({
          collection: collection,
          callback: method,
        });
      }).toThrow();
    };

    // -----------TESTS---------------
    test('multiply by two - [0, 1, 2] => [0, 2, 4]', () => {
      successfulTest([0, 1, 2], multiplyByTwo, [0, 2, 4]);
    });

    test('multiply by two - empty array returns an empty array', () => {
      successfulTest([], multiplyByTwo, []);
    });

    test('multiply by two - if any element is not a number will throw an error', () => {
      throwTest([1, 4, null], multiplyByTwo);
    });
  });

  // ---------------------------------------------
  //  FILTER
  // ---------------------------------------------
  describe('curry filter method', () => {
    // ------METHODS/PARAMETERS-------

    // --------TEST FUNCTIONS---------
    // -----------TESTS---------------

  });

  // ---------------------------------------------
  //  REDUCE
  // ---------------------------------------------
  describe('curry reduce method', () => {
    // ------METHODS/PARAMETERS-------
    // --------TEST FUNCTIONS---------
    // -----------TESTS---------------
  });

  // ---------------------------------------------
  //  SLICE
  // ---------------------------------------------
  describe('curry slice method', () => {
    // ------METHODS/PARAMETERS-------
    // --------TEST FUNCTIONS---------
    // -----------TESTS---------------
  });
});
