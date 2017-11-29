'use strict';

const fp = require('../lib/fp.js');

describe('fp.test.js', () => {
  describe('tests for fp.map', () => {

    test('fp.map should return a new array of elements with the callback function enacted on each of the original array elements, if no errors are present', () => {
      expect(fp.map(
        (x => x * 2),
        [1,2,3]
      )).toEqual([2,4,6]);
    });

    test('An exception should be thrown if callback is not a function', () => {
      expect(
        () => {
          fp.map(
            'a string, not a function',
            [1,2,3]);
        }).toThrow();
      expect(
        () => {
          fp.map(
            [1,2,3],
            [1,2,3]);
        }).toThrow();
    });

    test('An exception should be thrown if collection is not an array', () => {
      expect(
        () => {
          fp.map(
            (x => x * 2),
            'string, not array');
        }).toThrow();
    });

    test('An exception should be thrown if collection is null', () => {
      expect(
        () => {
          fp.map(
            null,
            [1,2,3]);
        }).toThrow();
    });
  });
});
