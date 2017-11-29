'use strict';

const fp = require('../lib/fp.js');

describe('fp.test.js', () => {
  describe('tests for fp.map', () => {

    test('fp.map should return a new array pf elements with the callback function enacted on each of the  original array elements, if no errors are present', () => {
      expect(fp.map(
        (x => x * 2),
        [1,2,3]
      )).toEqual([2,4,6]);
    });

    test('An exception should be thrown if callback is not a function', () => {
      expect(
        () => {
          fp.map(
            'not a function',
            [1,2,3]);
        }).toThrow();
    });
  });
});
