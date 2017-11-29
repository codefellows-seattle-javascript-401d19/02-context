'use strict';

const fp = require('../lib/fp');

describe('fp.js', () => {

  describe('fp.map', () => {
    test('returns array with values multiplied with 2', () => {
      expect(fp.map(
        (num) => num * 2,
        [0, 1, 2]
      )).toEqual([0, 2, 4]);
    });
    test('exception will be thrown if callback is not a function', () => {
      expect(
        () => {
          fp.map('I\'m not a function ()', [0, 1, 2]);
        }).toThrow();
    });
  });

  // describe('fp.filter', () => {
  //   test('')
  // });
  //
  // describe('fp.reduce', () => {
  //   test('')
  // });
  //
  // describe('fp.slice', () => {
  //   test('')
  // });


});
