'use strict';

const fp  = require('../lib/fp');

describe('fp.reduce', () => {
  test('should aggregate all the values to the accumulator and return that accumulated value', () => {
    expect(fp.reduce(
      (accumulator, currentValue) => {
        return accumulator + currentValue; 
      },
      [1,2,3],
      0
    )).toBe(6);
  });
  test('In Reduce Exception Thrown If Callback Is Not A Function', () => {
    expect(
      () => {
        fp.reduce('Not a Function', [1,2,3], 0);
      }
    ).toThrow();
  }); 
});


describe('fp.mapGenerator', () => {
  test('should return value of aggregated values', () => {
    expect(fp.mapGenerator(1,2,3,4).toBe(2,3,4,5));
  }); 
});

describe('fp.map', () => {
  
  test('should change each element in the array and return a mutated array', () => {
    
  });
  
})