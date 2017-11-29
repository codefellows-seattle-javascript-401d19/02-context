'use strict';

const { map, filter, reduce, slice } = require('../lib/fp');

describe('fp.js', () => {

  describe('fp.map', () => {
    test('return an array with each element multiplied by 2', () => {
      const callback = element => { return element * 2; };
      const collection = [1, 2, 3];
      const expected = [2, 4, 6];
      expect(map(callback, collection)).toEqual(expected);
    });

    test('return an array with each string element doubled', () => {
      const callback = element => { return element.concat(element); };
      const collection = ['hello', 'there', 'world', '!'];
      const expected = ['hellohello', 'therethere', 'worldworld', '!!'];
      expect(map(callback, collection)).toEqual(expected);
    });

    test('throw an exception if callback is not a function', () => {
      const callback = 'not a function';
      const collection = [1, 2, 3];
      expect(
        () => {
          map(callback, collection);
        }
      ).toThrow();
    });
  });

  describe('fp.filter', () => {
    test('return an array without even numbers', () => {
      const callback = element => { return element % 2; };
      const collection = [1, 2, 3, 4, 5, 6];
      const expected = [1, 3, 5];
      expect(filter(callback, collection)).toEqual(expected);
    });

    test('return an array with strings only with length greater than 5', () => {
      const callback = element => { return element.length > 5; };
      const collection = ['one', 'three', 'sixteen'];
      const expected = ['sixteen'];
      expect(filter(callback, collection)).toEqual(expected);
    });

    test('throw an exception if callback is not a function', () => {
      const callback = 'not a function';
      const collection = [1, 2, 3, 4, 5, 6];
      expect(
        () => {
          filter(callback, collection);
        }
      ).toThrow();
    });
  });

  describe('fp.reduce', () => {
    test('return a single combined-added result from an array', () => {
      const callback = (acc, current) => { return acc + current; };
      const initialState = 0;
      const collection = [1, 2, 3, 4];
      const expected = 10;
      expect(reduce(callback, initialState, collection)).toBe(expected);
    });

    test('return a single word from an array of words', () => {
      const callback = (acc, current) => { return acc + current; };
      const initialState = '';
      const collection = ['hello', 'there', 'world', '!'];
      const expected = 'hellothereworld!';
      expect(reduce(callback, initialState, collection)).toBe(expected);
    });

    test('throw an exception if callback is not a function', () => {
      const callback = 'not a function';
      const initialState = 0;
      const collection = [1, 2, 3, 4];
      expect(
        () => {
          reduce(callback, initialState, collection);
        }
      ).toThrow();
    });
  });

  describe('fp.slice', () => {
    test('return an sub array from an original array', () => {
      const arr = [1, 2, 3, 4];
      const expected = [2, 3];
      expect(slice(1, 3, arr)).toEqual(expected);
    });
  });
});
