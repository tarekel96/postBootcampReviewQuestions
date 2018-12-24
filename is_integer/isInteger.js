// The Question

/* Sketch and, if time allows, implement a robust function 
that checks if a given string input is an integer and, if possible, parses it.

By _robust_, we mean that your function should intelligently handle common error 
cases, such as the user passing completely invalid string arguments (`"not a number at all"`);
 values that aren't integers (`"-Infinity"`); and such.

You are encoruaged to spend most of your time for this problem planning your solution, 
accounting for edge cases, etc. A strong understanding of the solution and thorough pseudocode 
is worth more than a correct implementation for this problem.

Don't use `parseInt`.
 */

// My pre-notes

// typeof() Built-in JavaScript method
/* The typeof operator returns a string indicating the type of the unevaluated operand. */
/* 
console.log(typeof 42);
// expected output: "number"

console.log(typeof 'blubber');
// expected output: "string"

console.log(typeof true);
// expected output: "boolean"

console.log(typeof declaredButUndefinedVariable);
// expected output: "undefined";
*/

// toString() Built-in JavaScript method
/* 
The toString() method converts a number to a string.*/
/* 
var num = 15;
var n = num.toString();
 */

// My Answer

let integerFive = 5;
let stringFive = "5";

let convertIntToString = function(number) {
  let givenParType = typeof number;
  console.log(`The given parameter has a data type of: ${givenParType}`);
  if (typeof number) {
    console.log(`Given number: ${number}`);
    let stringVersion = number.toString();
    console.log(`The string version is: ${stringVersion}`);
    let stringVersionType = typeof stringVersion;
    console.log(`The data type of the number is: ${stringVersionType}`);
    return stringVersion;
  }
};

convertIntToString(integerFive);
