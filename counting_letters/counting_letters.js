// The Question

// Write a function that counts how many times each letter in a string occurs.
/* 
Your function should be case-insensitive. In other words, 'E' and 'e' should both
 increment the count for the letter 'e'. */

// Two Dimensional array concept

// var items = [
//         [1, 2],
//         [3, 4],
//         [5, 6]
//       ];
//       console.log(items[0][0]); // 1
//       console.log(items);

// Answer #1 - inefficient for loop
/* Not an efficient solution */

/* let eCounter = 0;
let countTheLetterE = function(theWord) {
  for (let i = 0; i < theWord.length; i++) {
    if (theWord[i] === "e" || theWord[i] === "E") {
      eCounter++;
      console.log(eCounter);
    } else {
      console.log("There are no 'e' or 'E' in the given word");
    }
  }
}; */

// TEST 1
// countTheLetterE("tarek");

// Answer #2 - works great and much more efficient than for loop, but does not work with 'return' for some reason??

/* function lookForE(letter, string) {
  lowerCaseString = string.toLowerCase(); // ensures consisty with lower case letters
  //   console.log(lowerCaseString);
  let theAnswer = 0;
  theAnswer = lowerCaseString.split(letter).length - 1;
  console.log(theAnswer);
  return theAnswer;
} */

/* "split not recommended. Resource hungry. Allocates new instances of 'Array' for each match. Don't try that for a >100MB file via FileReader. You can actually easily observe the EXACT resource usage using Chrome's profiler option." */
// Quote source: https://stackoverflow.com/questions/881085/count-the-number-of-occurrences-of-a-character-in-a-string-in-javascript

// TEST 2
// lookForE("e", "TaRek");

// Answer #3 - RegEx & match method - Most EFFICIENT way to do it - BETTER than SPLIT even

// RegEx Notes:
/* A Regular Expression, or RegEx, is sequence of characters that forms a search pattern. The search pattern can be used for text search and text replace operations. In JavaScript, regular expressions are also objects. */
// source: https://www.w3schools.com/js/js_regexp.asp
// A regular expression literal is a RegEx pattern enclosed with forward slashes
// re = /ab/ or or can write it with the RegExp constructor: re = RegExp("ab")

// match() method notes:
/* The match() method searches a string for a match against a regular expression, and returns the matches, as an Array object. */
// source: https://www.w3schools.com/jsref/jsref_match.asp

let countTheNumberOfE = function(string) {
  lowercaseString = "";
  lowercaseString = string.toLowerCase(); // ensures consisty with lower case letters
  //   console.log(lowercaseString);
  console.log((lowercaseString.match(/e/g) || []).length); // 'g' is used because it finds all matches rather than stopping after the first match
  return (lowercaseString.match(/e/i) || []).length; // could use 'i' instead of 'g' since it is case INSENSITIVE but it STOPS after the first match
};

// TEST #3
countTheNumberOfE("Elephant");
// TEST #4
countTheNumberOfE("EeeeeEeeEe"); // should return 10
