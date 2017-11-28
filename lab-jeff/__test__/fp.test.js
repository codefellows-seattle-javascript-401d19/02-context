'use strict';

const fp = require('../lib/fp');

describe('fp.js', () => {
  describe('fp.map', () => {
    test('map should return a new array which applies a function to each value of input array', () => {
      expect(fp.map(x => x * 2, [1,2,3])).toEqual([2,4,6]);
      expect(fp.map(x => x, 'hello')).toEqual(['h', 'e', 'l', 'l', 'o']);
    });
    test('map should return exception if first input is not a function', () => {
      expect( () => {
        fp.map('not a function', [1,2,3]);
      }
      ).toThrow();
    });
    test('map should return exception if 2nd input is not an array or string', () => {
      expect( () => {
        fp.map(x => x * 2, true);
      }
      ).toThrow();
      expect( () => {
        fp.map(x => x * 2, null);
      }
      ).toThrow();
    });
  });
});
