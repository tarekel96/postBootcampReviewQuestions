"use strict";

// Can you explain, and fix, this behavior?
var first = [1, 2, 3];
var second = [1, 2, 3];

// Problem 1
console.log(first == second); // returns false
// Problem 2
console.log(first === second); // returns false

// My theory

/* We cannot simply check if one array equals another by setting 
them equal to eachother and returning a boolean value because we need to specify 
which element within an array is equal to an element from the other array. 
To do this we would need to use a for loop.
*/

// Bootcamp Solution
function deepEquals(array1, array2) {
  if (array1 === array2) {
    return true;
  } else if (array1.length !== array2.length) {
    return false;
  } else {
    var equals = true;

    for (var i = 0; i < array1.length; i += 1) {
      var current_element1 = array1[i];
      var current_element2 = array2[i];

      // if both elements are arrays, check for equality recursively
      if (Array.isArray(current_element1) && Array.isArray(current_element2)) {
        equals = deepEquals(current_element1, current_element2);
      }

      // return false if any pair of elements is found not to be equal
      else if (current_element1 !== current_element2) {
        return false;
      }
    }

    return equals;
  }
}

// test with Bootcamp sol
// deepEquals(first, second);
for (let i = 0; i <= first.length; i++) {
  console.log(deepEquals(first[i], second[i])); // returns true so I believe my theory above is correct
}
