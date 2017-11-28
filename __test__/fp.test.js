'use strict';

const fp = require('../lib/fp.js');

describe('fp.js', () => {
  describe('fp.reduce', () => {
    // parameters are f(collection, callback, initialValue)
    test('return value should be the sum of the collection', ()=>{
      expect(fp.reduce(
        (x, y) => x+y,
        [1,2,3],
        0)
      ).toBe(6);
    });
    test('return value should be the product of the collection', ()=>{
      expect(fp.reduce(
        (x, y) => x*y,
        [1,5,3],
        1)
      ).toBe(15);
    });
    test('an exception should be thrown if error', ()=>{
      expect(
        () => {
          fp.reduce(
            (x, y) => x+y,
            ['1',2, null],
            0);
        }).toThrow();
      expect(
        () => {
          fp.reduce(
            (x, y) => x+y,
            1,
            0);
        }).toThrow();
      expect(
        () => {
          fp.reduce(
            (x, y) => x+y,
            [1,2,3],
            'a');
        }).toThrow();
      expect(
        () => {
          fp.reduce(
            'lets do this',
            [1, 2, 3],
            0);
        }).toThrow();
    });
  });
  describe('fp.map', () => {
    // parameters are f(collection, callback)
    test('return values should increment by two', ()=>{
      expect(fp.map(
        (x) => x+2,
        [1,2,3]
      ).toString()
      ).toBe('3,4,5');
    });
    test('return values should double', ()=>{
      expect(fp.map(
        (x) => x*2,
        [1,2,3]
      ).toString()
      ).toBe('2,4,6');
    });
    test('an exception should be thrown if error', ()=>{
      expect(
        () => {
          fp.map(
            (x) => x+2,
            ['1',2, null],
            0);
        }).toThrow();
      expect(
        () => {
          fp.map(
            (x) => x+2,
            1
          );
        }).toThrow();
      expect(
        () => {
          fp.map(
            'lets do this',
            [1, 2, 3]
          );
        }).toThrow();
    });
  });
  describe('fp.filter', () => {
    // parameters are f(collection, callback)
    test('return values should only have a length greater than 6', ()=>{
      expect(fp.filter(
        (password) => password.length > 6,
        ['password','pass','1234']
      ).toString()
      ).toBe('password','pass','1234');
    });
    test('return values should be larger than 90', ()=>{
      expect(fp.filter(
        (grades) => grades > 90,
        [95, 97.5, 81, 99, 23]
      ).toString()
      ).toBe('95,97.5,99');
    });
    test('an exception should be thrown if error', ()=>{
      expect(
        () => {
          fp.filter(
            (grades) => grades > 90,
            ['kerry', 97.5, 'nicholas', 99, 23]
          );
        }).toThrow();
      expect(
        () => {
          fp.filter(
            (grades) => grades > 90,
            99
          );

        }).toThrow();
      expect(
        () => {
          fp.filter(
            'greater than 90',
            [1, 2, 3]
          );
        }).toThrow();
    });
  });
  describe('fp.slice', () => {
    // parameters are f(collection, begin, end)
    test('return value should be the last three values', ()=>{
      expect(fp.slice(
        [1, 2, 3, 4, 5],
        2
      ).toString()
      ).toBe('3,4,5');
    });
    test('return value should be the middle 3 values', ()=>{
      expect(fp.slice(
        [1, 2, 3, 4, 5],
        1,
        3
      ).toString()
      ).toBe('2,3,4');
    });
    test('an exception should be thrown if error', ()=>{
      expect(
        () => {
          fp.slice(
            [1, 2, 3, 4, 5],
            5,
            1
          );
        }).toThrow();
      expect(
        () => {
          fp.slice(
            1,
            1,
            1);
        }).toThrow();
    });
  });
});
