"use strict";

// The Original snippet of Code

// for (var i = 0; i < 5; i += 1) {
//   setTimeout(function() {
//     console.log(i);
//   }, i * 1000);
// }

// Question 1 & 2
/* What do you expect this code to do? */
/* What will this log, and why? */

// Answer 1 & 2
/* setTimeout calls a function or evaluates an expression after a 
specified number of milliseconds. In this particular case the 
setTimeout method is logging 'i' to the console for each value of i
AFTER that same value of 'i' times 1000 (milliseconds)*/

// Question 3
/* How can you "fix" this code, if you expected it to behave 
differently than it did? */

// Test for Q3
// let logTheNumber = function() {
//   for (var i = 0; i < 5; i += 1) {
//     setTimeout(function() {
//       console.log(i);
//     }, i * 1000);
//   }
// };

// logTheNumber();

/* After testing out the variable, I noticed that it 
only logs 5, but the timeout seems to be running correctly,
however, it logs more 5's then I thought it would. */

// Testing - DISCONTINUED
// let logTheNumber = function() {
//   for (var i = 0; i < 5; i += 1) {
//     // console.log(i);
//     if (i < 5) {
//       // console.log(i);
//       setTimeout(function(j) {
//         j = i;
//         console.log(j);
//       }, i * 1000);
//     }
//   }
// };

// logTheNumber();

// Trial 2 - close but not quite right - look at Solve solution
let logTheNumber = function() {
  for (var i = 0; i < 5; i += 1) {
    let theIArray = [];
    theIArray.push(i);
    // console.log(theIArray)
    setTimeout(
      function(array) {
        array = theIArray;
        for (let j = 0; j < array.length; j++) {
          console.log(array[j]), j * 1000;
        }
      }
      // console.log(i);
    );
  }
};

logTheNumber();
