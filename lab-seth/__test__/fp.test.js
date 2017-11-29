'use strict';

const fp = require('../lib/fp.js');

describe('fp.test.js', () => {
  describe('tests for fp.map', () => {

    test('fp.map should return a new array of elements with the callback function enacted on each of the original array elements, if no errors are present', () => {
      expect(fp.map(
        x => x * 2,
        [1,2,3]
      )).toEqual([2,4,6]);
    });

    test('An exception should be thrown if collection is not an array', () => {
      expect(
        () => {
          fp.map(
            (x => x * 2),
            'string, not array');
        }).toThrow();
    });
  });


  describe('tests for fp.reduce', () => {

    test('fp.reduce should return a single value after applying a function against an accumulator and each element in an array', () => {
      expect(fp.reduce(
        (accumulator, currentValue) => {
          return accumulator + currentValue;
        },
        [1,2,3],
        0
      )).toBe(6);
    });

    test('An exception should be thrown if callback is not a function', () => {
      expect(
        () => {
          fp.reduce(
            'a string, not a function',
            [1,2,3],
            0);
        }).toThrow();
      expect(
        () => {
          fp.reduce(
            [1,2,3],
            [1,2,3],
            0);
        }).toThrow();
    });

    test('An exception should be thrown if collection is not an array', () => {
      expect(
        () => {
          fp.reduce(
            (accumulator, currentValue) => {
              return accumulator + currentValue;
            },
            'string, not array',
            0);
        }).toThrow();
    });
  });

  describe('tests for fp.filter', () => {

    test('fp.filter should return an array with elemetns that passed the filter applied by the callback', () => {
      expect(fp.filter(
        (x => x < 3),
        [1,2,3]
      )).toEqual([1,2]);
    });

    test('An exception should be thrown if collection is not an array', () => {
      expect(
        () => {
          fp.filter(
            x => x < 3,
            'string, not array');
        }).toThrow();
    });

    test('An exception should be thrown if callback is not a function', () => {
      expect(
        () => {
          fp.filter(
            'string',
            [1,2,3]);
        }).toThrow();
    });
  });

  describe('tests for fp.slice', () => {

    test('fp.slice should return an array with elements starting with begin argument and ending before end argument', () => {
      expect(fp.slice(
        1,
        4,
        [1,2,3,5,6,7,8]
      )).toEqual([2,3,5]);
    });

    test('An exception should be thrown if collection is not an array', () => {
      expect(
        () => {
          fp.slice(
            1,
            4,
            'collection not an array');
        }).toThrow();
    });

    test('An exception should be thrown if begin or end is not a number', () => {
      expect(
        () => {
          fp.slice(
            'string',
            4,
            [1,2,3,5,6,7,8]);
        }).toThrow();
      expect(
        () => {
          fp.slice(
            1,
            true,
            [1,2,3,5,6,7,8]);
        }).toThrow();
    });
  });
});
