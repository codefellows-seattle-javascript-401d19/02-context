'use strict';

const fp = require('../lib/fp');

describe('fp.js tests', () => {
  describe('When called correctly, fp.map should take in a callback function and an array/array-like object, and return an Array.', () => {
    test('When called with an array, fp.map() should return a mapped array', () => {
      expect(fp.map(
        num => num * 2,
        [1, 2, 3]
      )).toEqual([2, 4, 6]);
    });
  });
});