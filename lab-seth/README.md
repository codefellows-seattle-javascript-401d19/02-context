In your README.md describe the exported values of each module defined in your lib/ directory. Every function description should include it's airty (expected number of parameters), the expected data for each parameter (data-type and limitations), and it's behavior (for both valid and invalid use). Feel free to write any additional information in your README.md.

# fp.js
fp.js exports an object named fp that has the following functions

###fp.map
airity: 2, callback(function), collection(array)
returns a new array with callback applied to the original array's elements
limitations: should take any array...
behavior: throws TypeError if collection input is not an array.

###fp.reduce
airity: 3, callback(function), collection(array), initialValue(string,number)
returns a data with callback applied to sum original array's elements
limitations: should take any array and optional initialValue...
behavior: throws TypeError if collection input is not an array.
throws TypeError if callback is not a function

###fp.filter
airity: 2, callback(function), collection(array)
returns a new array with callback applied that filters the original array's elements with a test statement
limitations: should take any array...
behavior: throws TypeError if collection input is not an array.
throws TypeError if callback is not a function

###fp.slice
airity: 3, begin(number), end(number), collection(array)
returns a new array with elements from input array starting at index of begin argument and ending before end argument
limitations: should take any array...
behavior: throws TypeError if collection input is not an array.
throws TypeError if begin or end are not a number
