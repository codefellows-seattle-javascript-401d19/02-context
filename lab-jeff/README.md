# Code 401 lab 2

## Purpose
The purpose of this lab is to learn Test Driven Development (TDD) when writing code.  We are using jest.js to test our code.

## File Structure
There are two test files in the __test__ folder which test the functions included in the module in the lib folder.

## greet module
The fp module contains four functions: map, filter, reduce, and slice.  

### fp.map
fp.map expects 2 arguments: a function and an array of data. If a function and an array are passed in, it iterates over the array and applies the function to each one, returning an array with the results of those function calls.  If the first argument is not a function or the second argument is not an array (or string), it throws a TypeError.

### fp.filter
This function takes two arguments: a function and an array of data.  With valid data, it returns a new array with all elements that pass the test implemented by the provided function.  If the first argument is not a function or the second argument is not an array (or string), it throws a TypeError.

### fp.reduce
This function takes three arguments: a function, an array of data, and an initial value.  With valid data, it applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value, which it returns. If the first argument is not a function or the second argument is not an array (or string), it throws a TypeError.

### fp.slice
This function takes three arguments: a beginning index, an ending index, and an array.  With valid data, it returns a portion of the array into a new array selected from begin to end (end not included). If the first or second arguments are not integers, or the third argument is not an array (or string), it throws a TypeError.
