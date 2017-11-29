'use strict';

const fp = require('..liv/fp.js');

describe('fp.test.js', () => {
  describe('tests for fp.map', () => {
    test('fp.map should return a new array with the callback function applied on the original elements unless there are errors', () => {
      expect(fp.map(
        n => n * 2, [1, 2, 3]
      )).toEqual([2, 4, 6]);
    });
    test('throw an exception if NOT an array', () => {
      expect(() => {
        fp.map((n => n * 2),
          'This is a string, NOT an array');
      }).toThrow();
    });
  });

  describe('tests fp.reduce', () => {
    test('fp.reduce should return a single value when applying a function on a accumulator and the array', () => {
      expect(fp.reduce(
        (accumulator, currentValue) => {
          return accumulator + currentValue;
        }, [1, 2, 3],
        0
      )).toBE(6);
    });

    test('An exception will be thrown if callback is NOT a function', () => {
      expect(() => {
        fp.reduce('This is a STRING, NOT a function', [1, 2, 3],
          0);
      }).toThrow();
      expect(() => {
        fp.reduce(
          [1,2,3], [1,2,3],
          0);
      }).toThrow();
    });

    test('An exception will be thrown if the collection is NOT an array', () => {
      
    })
  });
});
