'use strict';

const fp = require('../lib/fp');

describe('fp.js', () => {
  describe('fp.map', () => {
    test('map should return a new array which applies a function to each value of input array', () => {
      expect(fp.map(x => x * 2, [1,2,3])).toEqual([2,4,6]);
      expect(fp.map(x => x, 'hello')).toEqual(['h', 'e', 'l', 'l', 'o']);
    });
  });
});
