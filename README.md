##  Documentation
In your README.md describe the exported values of each module you have defined. Every function description should include it's arity (expected number of parameters), the expected data for each parameters (data-type and limitations), and it's behavior (for both valid and invalid use). Feel free to write any additional information in your README.md.

## Bonus 2pts
* Create a second module fp-curry.js that is a refactored version of fp.js, where each function has curried arguments
* Create a fp-curry.test.js that is a refactored version of fp.curry.js that tests fp-curry.js

## Reduce function and test

Reduce includes a function that takes in three parameters, a callback to the reduce function, an array, and a starting value.  The expeted data type for each parameter is function, object, and integer.  The array may contain integers or strings and for valid use, this will return a total of each of the integers in the array.  For invalid use, this will return a type error for the function if a callback is not passed.

## Map function and test

Map includes a function that takes in two parameters, a callback to the map function and an array.  The expeted data type for each parameter is function and object.  The array may contain integers and for valid use, return a shallow copy of the original array with each indice doubled.  For invalid use, this will return a type error for the function if a callback is not passed.

##Filter function and test

Filter includes a function that takes in two parameters, a callback to the filter function and an array.  The expeted data type for each parameter is function and object.  The array may contain integers and for valid use, will return the odd numbers.  For invalid use, this will return a type error for the function if a callback is not passed.

##Slice function and test

Slice includes a function that takes in three parameters, the beginning index, ending index, and an array.  The expeted data type for each parameter is an integer, integer and an array.  The array may contain integers and for valid use, it will return a shallow copy of the original array with the first five indices.  For invalid use, this will return a type error for the type error for the array if an object is not passed.

##

##

##