'use strict';

const customFunctions = require('../lib/fp.js');

describe('customFunctions.reduce', () => {
  test('applies a function against an accumulator and each element in the array to reduce it to a single value', () => {
    expect(customFunctions.reduce(
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
        customFunctions.reduce(`I'm totally a function ()`, [3,3,3], 0);
      }
    ).toThrow();
  });
});
