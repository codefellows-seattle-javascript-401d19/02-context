'use strict';

const fp = require('../lib/fp');

describe('fp.test.js', () => {
  describe(('fp.map'), () => {
    test('testing that .map is functioning properly', () => {
      expect(fp.map(a => a * 3, 
        [1, 2, 3]
      )).toEqual([3, 6, 9]);
    });
    test('testing that .map will return an empty array as an empty array', () => {
      expect(fp.map(a => a * 3,
        []
      )).toEqual([]);
    });
    test('testing that .map will throw an error if passed a string', () => {
      expect(() => {
        fp.map(a => {
          a * 3;
          if(typeof a !== 'number') throw new TypeError('array can only include numbers');
        },
        [1, null, 3]
        );
      }
      ).toThrow();
    });
  });

    
  describe(('fp.filter'), () => {
    test('testing that .filter is functioning properly', () => {
 
    });
  });
  describe(('fp.reduce'), () => {
    test('testing that .reduce is functioning properly', () => {
 
    });
  });
  describe(('fp.slice'), () => {
    test('testing that .slice is functioning properly', () => {
 
    });
  });

});