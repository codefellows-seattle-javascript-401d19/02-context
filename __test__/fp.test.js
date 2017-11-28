'use strict';

const customFunct = require('../lib/fp.js');

describe('fp.js', () => {
  describe('fp.reduce', () => {
    // parameters are f(collection, callback, initialValue)
    test('return value should be the sum of the collection', ()=>{
      expect(customFunct.reduce(
        (x, y) => x+y,
        [1,2,3],
        0)
      ).toBe(6);
    });
    test('return value should be the product of the collection', ()=>{
      expect(customFunct.reduce(
        (x, y) => x*y,
        [1,5,3],
        1)
      ).toBe(15);
    });
    test('an exception should be thrown if error', ()=>{
      expect(
        () => {
          customFunct.reduce(
            (x, y) => x+y,
            ['1',2, null],
            0);
        }).toThrow();
      expect(
        () => {
          customFunct.reduce(
            (x, y) => x+y,
            1,
            0);
        }).toThrow();
      expect(
        () => {
          customFunct.reduce(
            (x, y) => x+y,
            [1,2,3],
            'a');
        }).toThrow();
      expect(
        () => {
          customFunct.reduce(
            'lets do this',
            [1, 2, 3],
            0);
        }).toThrow();
    });
  });
  describe('fp.map', () => {
    // parameters are f(collection, callback)
    test('return values should increment by two', ()=>{
      expect(customFunct.map(
        (x) => x+2,
        [1,2,3]
      )
      ).toBe([3,4,5]);
    });
    test('return values should double', ()=>{
      expect(customFunct.map(
        (x) => x*2,
        [1,2,3]
      )
      ).toBe([2,4,6]);
    });
    test('an exception should be thrown if error', ()=>{
      expect(
        () => {
          customFunct.map(
            (x) => x+2,
            ['1',2, null],
            0);
        }).toThrow();
      expect(
        () => {
          customFunct.map(
            (x) => x+2,
            1
          );
        }).toThrow();
      expect(
        () => {
          customFunct.map(
            (x) => x+'a',
            [1,2,3]
          );
        }).toThrow();
      expect(
        () => {
          customFunct.map(
            'lets do this',
            [1, 2, 3]
          );
        }).toThrow();
    });
  });

});
