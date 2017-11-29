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