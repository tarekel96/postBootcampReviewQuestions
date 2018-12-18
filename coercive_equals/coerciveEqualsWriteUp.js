// Question 1
/* What is the difference between `==` and `===`? */

// My Answer

/* '==' can be used to compare if two inputs equal the same VALUE, but
does NOT take into consideration the data type. */
// '==' example explaining it:
let x = 5;
/* console.log(`x: ${x == 5}`); //returns true
console.log(`x: ${x == "5"}`); //returns true */

/* '===' on the other hand, compares the VALUE and DATA TYPE of two inputs */
// '===' example explaining it:
let y = 7;
/* console.log(`y: ${y == 7}`); //returns true
console.log(`y: ${y == "7"}`); //returns false */

// Question 2
// What are the advantages to using `==`? To using `===`?
// Question 3
// When might we prefer the one over the other?

// My Answer

// '==' advantages:
/* In certain situations we may want to compare values of different inputs, 
but not care about data types. */
// Example:
let arrayOne = [1, 2, 3, "5", 6];
let arrayTwo = [1, 2, 3, 5, 6];
for (let i = 0; i <= arrayOne.length; i++) {
  console.log(arrayOne[i] == arrayTwo[i]); // returns all trues
  console.log(arrayOne[i] === arrayTwo[i]); // returns a single false
}

// '===' advantages:
/* Generally when comparing two inputs, we want to take into consideration the data types
and value, so the '===' is ideal */

// Bootcamp answer
/* Most candidates will claim that we should generally, or always, use `===`. 
This is a perfectly reasonable response. */
/* Some candidates might suggest that we might prefer `==` when checking equality to `undefined`, 
as in `if (x == null)`. This is also legitimate—the alternative with `===` is longer and arguably 
less readable: `if (x === null && x === undefined)`. */
