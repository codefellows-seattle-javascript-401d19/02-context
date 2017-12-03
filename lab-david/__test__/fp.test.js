'use strict';

const fp = require('../lib/fp.js');

describe('fp.reduce', () => {
  test('applies a function against an accumulator and each element in the array to reduce it to a single value', () => {
    expect(fp.reduce(
      (accumulator, currentValue) => {
        return accumulator + currentValue;
      },
      [3,3,3],
      0
    )).toBe(9);
  });
    
  test('An exception should be thrown if the callback is not a function', () => {
    expect(
      () => {
        fp.reduce(`I'm totally a function ()`, [3,3,3], 0);
      }
    ).toThrow();
  });
});

describe('fp.map', () => {
  test('applies a function against each element in the array and creates a new array', () => {
    expect(fp.map(
      (x) => {
        return x + 1;
      },
      [3,3,3]
    )).toEqual([4,4,4]);
  });
      
  test('An exception should be thrown if the callback is not a function', () => {
    expect(
      () => {
        fp.map(`I'm totally a function ()`, [3,3,3], 0);
      }
    ).toThrow();
  });
});

describe('fp.filter', () => {
  test('creates a new array with all elements that pass the test by the function', () => {
    expect(fp.filter(
      (x) => {
        return x > 0;
      },
      [0, 1, 2]
    )).toEqual([1, 2]);
  });

  test('an exception should be thrown if the callback is not a function', () => {
    expect(
      () => {
        fp.filter(`I'm totally a function ()`, [3,3,3], 0);
      }
    ).toThrow();
  });
});

describe('fp.slice', () => {
  test('returns a portion of the old array into a new array according to position specified', () => {
    expect(fp.slice(
      0,
      [0,1,2,3]
    )).toEqual([0]);
  });

  test('an exception should be thrown if the collection is not an array-like object', () => {
    expect(
      () => {
        fp.slice(1, 2, 3);
      }
    ).toThrow();
  });
});