'use strict';

const fp = require('../lib/fp');

describe('fp.js tests', () => {
  describe('When called, fp.enoughArgs() will return true if all requested parameters are defined and not null, or will throw an error otherwise.', () => {
    test('When called with all requested parameters, the function should return true.', () => {
      function test(param1, param2, param3) {
        return fp.enoughArgs('test()', param1, param2, param3);
      }

      expect(test(1, 2, 3)).toBeTruthy();
      expect(test(1, 2, 3, 4, 5)).toBeTruthy();
    });

    test('When called with too few, undefined, or null args, an exception is thrown.', () => {
      function test(param1, param2, param3) {
        return fp.enoughArgs('test()', param1, param2, param3);
      }

      expect(() => {
        test(1, 2);
      }).toThrow();

      expect(() => {
        test(1, 2, undefined);
      }).toThrow();

      expect(() => {
        test('1', {}, null);
      }).toThrow();
    });

    test('When the first argument is not a string, an error is thrown.', () => {
      expect(() => {
        fp.enoughArgs(234);
      }).toThrow();
    });
  });

  describe('When fp.correctType() is called with an argument, expected value, and a type test, if the argument passes the test true is returned, otherwise an error is thrown.', () => {
    test('When the argument passes the type test, true is returned.', () => {
      expect(
        fp.correctType(
          'words and stuff',
          'A string',
          arg => typeof arg === 'string'
        )).toBeTruthy();

      expect(
        fp.correctType(
          [],
          'An iterable object',
          arg => arg.length !== undefined
        )).toBeTruthy();
    });

    test('When the argument fails the type test, an error is thrown.', () => {
      expect(() => {
        fp.correctType(
          'words and stuff',
          'A number',
          arg => typeof arg === 'number'
        );
      }).toThrow();

      expect(() => {
        fp.correctType(
          234,
          'An iterable object',
          arg => arg.length !== undefined
        );
      }).toThrow();
    });

    test('If the argument "expected" is not a string, or "test" is not a function, an error is thrown.', ()=> {
      expect(() => {
        fp.correctType(123, 312, ele => ele);
      }).toThrow();

      expect(() => {
        fp.correctType(123, '312', 3);
      }).toThrow();
    });

    test('If there are too few arguments, an error is thrown.', () => {
      expect(() => {
        fp.correctType(1, '23');
      }).toThrow();

      expect(() => {
        fp.correctType();
      }).toThrow();
    });
  });

  describe('When called correctly, fp.map() should take in a callback function and an array / array-like object, and return an Array.', () => {
    test('When called with an array, fp.map() should return a mapped array', () => {
      expect(fp.map(
        num => num * 2,
        [1, 2, 3]
      )).toEqual([2, 4, 6]);

      expect(fp.map(
        word => word + word,
        ['hi', 'there']
      )).toEqual(['hihi', 'therethere']);
    });

    test('When called with arguments or args, an acted-on array should be returned.', () => {
      expect(
        (function(){
          return fp.map(
            num => num * 2,
            arguments
          );
        })(1, 1.5, 5)
      ).toEqual([2, 3, 10]);

      expect(
        ((...args) => {
          return fp.map(
            word => word.toUpperCase(),
            args
          );
        })('i', 'use', 'sPrEaD!')
      ).toEqual(['I', 'USE', 'SPREAD!']);
    });

    // test('When called with an empty collection, fp.map() should return an empty array', () => {
    //   expect(fp.map(
    //     num => num * 2,
    //     [1, 2, 3]
    //   )).toEqual([2, 4, 6]);

    //   expect(fp.map(
    //     word => word + word,
    //     ['hi', 'there']
    //   )).toEqual(['hihi', 'therethere']);
    // });

    test('When called with a non-array, but iterable object, like a string, the object should be returned as an array with its elements acted upon.', () => {
      expect(fp.map(
        char => char + char,
        'hey'
      )).toEqual(['hh', 'ee', 'yy']);

      expect(fp.map(
        num => Number(num) * 3,
        '123'
      )).toEqual([3, 6, 9]);
    });

    test('If the first argument is not a function, or the second argument is not iterable, an exception should be thrown.', () => {
      expect(() => {
        fp.map(
          'ele => ele',
          456
        );
      }).toThrow();

      expect(() => {
        fp.map(
          ele => ele,
          null
        );
      }).toThrow();
    });

    test('If there are less than two arguments, an exception should be thrown.', () => {
      expect(() => {
        fp.map(
          ele => ele
        );
      }).toThrow();

      expect(() => {
        fp.map();
      }).toThrow();
    });
  });

  describe('When called correctly, fp.filter should take in a callback function and an array / array - like object, and return an Array.', () => {
    test('When given a valid callback function and an array, a filtered array should be returned.', () => {
      expect(
        fp.filter(
          num => num > 3,
          [1, 2, 3, 4, 5]
        )
      ).toEqual([4, 5]);

      expect(
        fp.filter(
          word => /schmoo/.test(word),
          ['shmee', 'schmaack', 'schmoo', 'schmoopoppy', 'shmapps']
        )
      ).toEqual(['schmoo', 'schmoopoppy']);
    });

    test('When given a valid callback and a string, a filtered array should be returned.', () => {
      expect(
        fp.filter(
          char => char === 'p',
          'schmeeple-schmapple-peups'
        )
      ).toEqual(['p', 'p', 'p', 'p', 'p']);

      expect(
        fp.filter(
          char => char > 2 && char < 5,
          '1234567890'
        )
      ).toEqual(['3', '4']);
    });

    test('When given a valid callback and an array-like object, such as arguments or args, a filtered array should be returned.', () => {
      expect(
        (function() {
          return fp.filter(
            arr => typeof arr[0] === 'object',
            arguments
          );
        })([[[]]], [9, {arr: [{}, []]}], [['boo'], 'hi'])
      ).toEqual([[[[]]], [['boo'], 'hi']]);

      expect(
        ((...args) => {
          return fp.filter(
            arr => arr,
            args
          );
        })('', 0, 1, '1', null, undefined, true, false)
      ).toEqual([1, '1', true]);
    });

    test('If the first argument is not a function, or the second argument is not an iterable object, an exception should be thrown.', () => {
      expect(() => {
        fp.filter(
          'ele => ele',
          456
        );
      }).toThrow();

      expect(() => {
        fp.filter(
          ele => ele,
          null
        );
      }).toThrow();
    });

    test('If there are less than two arguments, an exception should be thrown.', () => {
      expect(() => {
        fp.filter(
          ele => ele
        );
      }).toThrow();

      expect(() => {
        fp.filter();
      }).toThrow();
    });
  });

  describe('When called correctly, fp.reduce should take in a callback function, an initial state, and an array / array - like object, and return some type of object.', () => {
    test('When given a valid callback function, an initial state, and an array, an object should be returned.', () => {
      expect(
        fp.reduce(
          (accumulator, currentValue) => accumulator + currentValue,
          0,
          [1, 2, 3, 4, 5]
        )
      ).toBe(15);

      expect(
        fp.reduce(
          (accumulator, currentValue) => accumulator.concat(currentValue),
          [],
          [[1, 2], [3, 4, 5]]
        )
      ).toEqual([1, 2, 3, 4, 5]);
    });

    test('When given a valid callback function, an initial state, and a string, a reduced object should be returned.', () => {
      expect(
        fp.reduce(
          (accumulator, currentValue) => currentValue === 'x' ? accumulator + '!!!' : accumulator + currentValue,
          '',
          'fjwejxwjex'
        )
      ).toBe('fjwej!!!wje!!!');

      expect(
        fp.reduce(
          (accumulator, currentValue) => accumulator + (Number(currentValue) - 3),
          '',
          '1234567890'
        )
      ).toBe('-2-10123456-3');
    });

    test('When given a valid callback function, an initial state, and an array-like object, such as arguments or args, a reduced object should be returned.', () => {
      expect(
        (function() {
          return fp.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            0,
            arguments
          );
        })(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
      ).toBe(55);

      expect(
        ((...args) => {
          return fp.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            '',
            args
          );
        })('I', ' ', 'a', 'm', ' ', 's', 'u', 'p', 'e', 'r', ' ', 't', 'i', 'r', 'e', 'd', '!')
      ).toBe('I am super tired!');
    });

    test('If the first argument is not a function, or the third argument is not an iterable object, an exception should be thrown.', () => {
      expect(() => {
        fp.reduce(
          '(accumulator, currentValue) => accumulator + (Number(currentValue) - 3)',
          '',
          '1234567890'
        );
      }).toThrow();

      expect(() => {
        fp.reduce(
          (accumulator, currentValue) => accumulator + (Number(currentValue) - 3),
          '',
          1234567890
        );
      }).toThrow();
    });

    test('If there are less than three arguments, an exception should be thrown.', () => {
      expect(() => {
        fp.reduce(
          ele => ele,
          ''
        );
      }).toThrow();

      expect(() => {
        fp.reduce();
      }).toThrow();
    });
  });
});