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
    )).toEqual(6);
  });

  test('In Reduce Exception Thrown If Callback Is Not A Function', () => {
    expect(
      () => {
        fp.reduce('Not a Function', [1,2,3], 0);
      }
    ).toThrow();
  }); 
});

describe('fp.map', () => {
  test('Should return a new collection with each element changed', () => {
    expect(fp.map(
      (currentValue) => {
        return currentValue + 1; 
      },
      [1,2,3,4]
    )).toEqual([2,3,4,5]);
  });
});

test('In Map Exception Thrown If Callback Is Not A Function', () => {
  expect(
    () => {
      fp.map('Not a Function', [1,2,3,4]);
    }
  ).toThrow();
}); 

describe('fp.filter', () => {
  test('Should return a new collection with only elements that passed conditional test as true', () => {
    expect(fp.filter(
      (currentValue) => {
        return currentValue > 2; 
      },
      [1,2,3,4]
    )).toEqual([3,4]);
  });
});

test('In Filter Exception Thrown If Callback Is Not A Function', () => {
  expect(
    () => {
      fp.filter('Not a Function', [1,2,3,4]);
    }
  ).toThrow();
}); 

describe('fp.slice', () => {
  test('Should return a new collection with elements at ', () => {
    expect(fp.slice(1,3,[1,2,3,4,5])).toEqual([2,3]);
  });
});

test('In Slice Exception Thrown If Callback Is Not A Function', () => {
  expect(
    () => {
      fp.slice('Not a Function', [1,2,3,4]);
    }
  ).toThrow();
}); 