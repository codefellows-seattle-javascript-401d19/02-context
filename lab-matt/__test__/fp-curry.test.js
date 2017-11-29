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
    const filterWordsOverFive = function(currentElement) {
      return currentElement.length > 5;
    };
    const filterNumbersOverFifty = function(currentElement) {
      return currentElement > 50;
    };

    // --------TEST FUNCTIONS---------
    let successfulTest = function(collection, method, expected) {
      expect(filter({
        collection: collection,
        callback: method,
      })).toEqual(expected);
    };

    // -----------TESTS---------------
    test(`words over length of five - ['foobar', 'truthy', 'falsy', 'true', 'one'] => ['foobar', 'truthy']`, () => {
      successfulTest(['foobar', 'truthy', 'falsy', 'true', 'one'], filterWordsOverFive, ['foobar', 'truthy']);
    });

    test(`words over length of five  - ['random', 'large', 'orange', 'banana', 'vehicle'] => ['random', 'orange', 'banana', 'vehicle']`, () => {
      successfulTest(['random', 'large', 'orange', 'banana', 'vehicle'], filterWordsOverFive, ['random', 'orange', 'banana', 'vehicle']);
    });

    test('numbers over fifty - [34, 23, 1235432, 268234, 372] => [1235432, 268234, 372]', () => {
      successfulTest([34, 23, 1235432, 268234, 372], filterNumbersOverFifty, [1235432, 268234, 372]);
    });

    test('numbers over fifty - [50, 40, 30, 60] => [60]', () => {
      successfulTest([50, 40, 30, 60], filterNumbersOverFifty, [60]);
    });
  });

  // ---------------------------------------------
  //  REDUCE
  // ---------------------------------------------
  describe('curry reduce method', () => {
    // ------METHODS/PARAMETERS-------
    const reduceNumbers = (accumulator, currentElement) => {
      return accumulator + currentElement;
    };
    const concatStrings = (accumulator, currentElement) => {
      if (accumulator === '') return currentElement;
      return `${accumulator} ${currentElement}`;
    };

    // --------TEST FUNCTIONS---------
    let successfulTest = function(collection, method, initialState, expected) {
      expect(reduce({
        collection: collection,
        callback: method,
        initialState: initialState,
      })).toEqual(expected);
    };

    // -----------TESTS---------------
    test('reduce [3, 6, 10] to 19', () => {
      successfulTest([3, 6, 10], reduceNumbers, 0, 19);
    });

    test(`reduce ['hello', 'there', 'friend'] => 'hello there friend'`, () => {
      successfulTest(['hello', 'there', 'friend'], concatStrings, '', 'hello there friend');
    });

    test('reduce empty string => returns empty string', () => {
      successfulTest('', concatStrings, '', '');
    });
  });

  // ---------------------------------------------
  //  SLICE
  // ---------------------------------------------
  describe('curry slice method', () => {
    const array1 = [3, 'two', null, 2, undefined];

    // --------TEST FUNCTIONS---------
    let successfulTest = function(collection, begin, end, expected) {
      expect(slice({
        collection: collection,
        begin: begin,
        end: end,
      })).toEqual(expected);
    };

    // -----------TESTS---------------
    test(`begin: 1, end: -1 removes outer elements of array`, () => {
      successfulTest(array1, 1, -1, ['two', null, 2]);
    });

    test(`begin: 0, end: 0 empties the array`, () => {
      successfulTest(array1, 0, 0, []);
    });
  });
});
