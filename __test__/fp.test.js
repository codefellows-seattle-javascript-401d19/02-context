'use strict';

const fp = require('../lib/fp.js');


//Reduce testing


describe('fp.js', () => {

    //Reduce testing

  describe('fp.reduce', () => {
    // parameters are f(collection, callback, initialValue)
    test('sum of collection', ()=>{
      expect(fp.reduce(
        (x, y,) => x+y,
        [1,2,3,1,5],
        0)
      ).toBe(12);
    });
    test('sum of collection', ()=>{
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
            'lol');
        }).toThrow();
    });
  });

  describe('fp.map', ()=>{
      

    test('fp.map should return a new array after mupltiplying the numbers by 2', () => {
        expect(fp.map(
          x => x * 2,
          [1,2,3]
        )).toEqual([2,4,6]);
      });
      test('An exception should be thrown ifnot an array', () => {
        expect(
          () => {
            fp.map(
              (x => x * 2),
              'string, not array',
            console.log('exception'));
          }).toThrow();
      });

    describe('tests for fp.filter', () => {
    
        test('fp.filter should return an array with elements that passed the filter applied by the callback', () => {
            expect(fp.filter(
            (x => x < 3),
            [1,2,3]
            )).toEqual([1,2]);
        });
    
        test('An exception should be thrown if not an array', () => {
            expect(
            () => {
                fp.filter(
                x => x < 3,
                'string, not array');
            }).toThrow();
        });
    
        test('An exception should be thrown if callback is not a function', () => {
            expect(
            () => {
                fp.filter(
                'string',
                [1,2,3]);
            }).toThrow();
        });
        });









  });
























});

