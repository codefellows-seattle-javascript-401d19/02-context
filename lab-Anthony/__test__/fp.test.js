'use strict';

const fp = require('../lib/fp.js');

describe('Testing map functionality', () => {
  test('map() should return [H,E,L,L,O]', () => {
    let result = fp.map((word) => word.toUpperCase(), 'Hello');
    expect(result).toEqual(['H','E','L','L','O']);
  });
  test('map() should error with a bad first parameter', () => {
    try {
      fp.map('this is not a callback', 'this is a valid string');
    } catch (error) {
      expect(error.message).toEqual('first parameter is not a function');
    }
  });
  test('map() should error with a bad second parameter', () => {
    try {
      fp.map((word) => word.toUpperCase(), 44);
    } catch (error) {
      expect(error.message).toEqual('second parameter is not an array or string');
    }
  });
});
//
describe('Testing filter functionality', () => {
  test('filter() should return words shorter than 5 characters', () => {
    let result = fp.filter((words) => words.length > 6, ['super', 'neat', 'cool', 'radical', 'exceptional']);
    console.log(result);
    expect(result).toEqual(['radical','exceptional']);
  });
  test('filter() should error with a bad first parameter', () => {
    try {
      fp.filter('this is not a function', ['this', 'is', 'an', 'array']);
    } catch (error) {
      expect(error.message).toEqual('first parameter is not a function');
    }
  });
  test('filter() should error with a bad second parameter', () => {
    try {
      fp.filter((words) => words.length > 6, 55);
    } catch (error) {
      expect(error.message).toEqual('second parameter is not an array');
    }
  });
});
//
describe('Testing reduce functionality', () => {
  test('reduce() should return the sum of all the values', () => {
    let result = fp.reduce((accumulator, currentValue) => accumulator + currentValue, [1,2,3], 0);
    expect(result).toEqual(6);
  });
  test('reduce() should return an error with a bad first parameter', () => {
    try {
      fp.reduce('hello, this is not a function', [1,2,3], 0);
    } catch (error) {
      expect(error.message).toEqual('first parameter is not a function');
    }
  });
  test('reduce() should return an error with a bad second parameter', () => {
    try {
      fp.reduce((accumulator, currentValue) => accumulator + currentValue, 66, 0);
    } catch (error) {
      expect(error.message).toEqual('second parameter is not an array');
    }
  });
});

describe('Testing slice functionality', () => {
  test('slice() should return [steak, kimchi]', () => {
    let result = fp.slice(1, 3, ['ramen', 'steak', 'kimchi', 'lecho']);
    expect(result).toEqual(['steak', 'kimchi']);
  });
  test('slice() should return an error with a bad third parameter', () => {
    try {
      fp.slice(1, 3, 'this is not an array');
    } catch (error) {
      expect(error.message).toEqual('third parameter is not an array');
    }
  });
});
