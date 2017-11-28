'use strict';

const customFunct = require('../lib/fp.js');

// P Module Tests
//
// Create a NodeJS module in the __test__/ named fp.test.js that asserts the correctness of the fp module.
//
// Use TDD describe and test methods to define descriptive tests
// Each test callback should aim to test a small well defined feature of a function
// Write tests to ensure the fp module functions correctly error-check parameters
// Assert that the correct errors are thrown with invalid arguments
// Write tests to ensure the fp module functions returns the correct results when invoked with valid arguments

describe('fp.js', () => {
  describe('fp.reduce', () => {
    // parameters are f(collection, callback, initialValue)
    test('return value should be the sum of the collection', ()=>{
      expect(customFunct.reduce(
        (x, y) => x+y,
        [1,2,3],
        0)
      ).toBe(6);
    });
    test('an exception should be thrown if error', ()=>{
      expect(
        () => {
          customFunct.reduce(
            (x, y) => x+y,
            ['1',2, null],
            0);
        }).toThrow();
      // expect(customFunct.addWithES6(1,2,3)).toBe(6);
    });

    // test('return value should be the sum of all arguments', ()=>{
    //   // parameter is f(x, y)
    //   // arguments are f(1, 2)
    //   expect(customFunct.addWithES6()).toBe(0);
    // });

  });
});
