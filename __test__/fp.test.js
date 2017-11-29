'use strict';

const ourFunctions = require('../lib/fp');

describe('fp.test.js', () => {
  describe('ourFunctions.ourReduce', () => {

    test('ourFunctions.ourReduce should return a sum of the array passed to it.', () => {
      expect(ourFunctions.reduce((acc, curVal) => {
        return acc + curVal;
      },
      [1, 2, 3],
      0)).toBe(6);
    });
    test('If not a function, throw a error.', () => {
      expect( () => {
        ourFunctions.reduce ('', [1,2,3], 0);
      }
      ).toThrow();
    });
  });

  describe('ourFunctions.ourMap', () => {

    test('ourFunctions.ourMap should iterate over an array and produce a result.', () => {
      expect(ourFunctions.map(x => x * 2, [2, 3, 4])).toEqual([4, 6, 8]);
    }); 

    test('If not a function, throw a error.', () => {
      expect(() => {
        ourFunctions.map('', [2, 3, 4]);
      }
      ).toThrow();
    });
  });

  describe('ourFunctions.ourFilter', () => {

    test('ourFunctions.ourFilter should take in an array and filter out the odd numbers.', () => {
      expect(ourFunctions.filter(x => !(x % 2), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual([2, 4, 6, 8, 10]);
    });

    test('If not a function, throw a error.', () => {
      expect(() => {
        ourFunctions.filter('', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
      }
      ).toThrow();
    });
  });

  describe('ourFunctions.ourSlice', () => {

    test('ourFunctions.ourSlice should take in an array and remove the first five numbers.', () => {
      expect(ourFunctions.slice(0, 5, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual([1, 2, 3, 4, 5]);
    });

    test('If not an object, throw a error.', () => {
      expect(() => {
        ourFunctions.slice('', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
      }
      ).toThrow();
    });
  });

});