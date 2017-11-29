'use strict';

const fp = require('../lib/fp.js');

describe('fp.js', () => {
  // ---------------------------------------------
  //  fp.map
  // ---------------------------------------------
  describe('fp.map', () => {
    const multiplyByTwo = function(currentElement) {
      if (typeof(currentElement) !== 'number') throw new TypeError('array can only include numbers');
      return currentElement * 2;
    };

    test('multiply by two - [0, 1, 2] => [0, 2, 4]', () => {
      expect(fp.map(multiplyByTwo, [0, 1, 2])).toEqual([0, 2, 4]);
    });

    test('multiply by two - empty array returns an empty array', () => {
      expect(fp.map(multiplyByTwo, [])).toEqual([]);
    });

    test('multiply by two - if any element is not a number will throw an error', () => {
      expect(() => {
        fp.map(multiplyByTwo, [1, 4, null]);
      }).toThrow();
    });
  });

  // ---------------------------------------------
  //  fp.filter
  // ---------------------------------------------
  describe('fp.filter - (returns previous array with only the words that are longer than 5 letters)', () => {
    const words = ['foobar', 'truthy', 'falsy', 'true', 'one'];
    const filterWordsOverFive = function(currentElement) {
      return currentElement.length > 5;
    };

    test(`words over five characters - ['foobar', 'truthy', 'falsy', 'true', 'one'] => ['foobar', 'truthy']`, () => {
      expect(fp.filter(filterWordsOverFive, words)).toEqual(['foobar', 'truthy']);
    });
  });

  // ---------------------------------------------
  //  fp.reduce
  // ---------------------------------------------


  // ---------------------------------------------
  //  fp.slice
  // ---------------------------------------------
});
