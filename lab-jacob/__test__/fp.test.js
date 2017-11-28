'use strict';

const fp  = require('../lib/fp');


describe('fp.reduceGenerator', () => {
  
  test('should return value of aggregated values', () => {
    expect(fp.reduceGenerator(1,2,3,4).toBe(10))
  }); 
});


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
  test('Exception Thrown If Callback Is Not A Function', () => {
    expect(
      () => {
        fp.reduce('Not a Function', [1,2,3], 0);
      }
    ).toThrow();
  }); 
});


describe('fp.map', () => {
  test('', () => {
    
  });
  
});

