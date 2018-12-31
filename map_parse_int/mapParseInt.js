// The Question
/* 
Consider this line of JavaScript.

```
  ["1", "2", "3"].map(parseInt);
```
1. what do you expect this line of code to do? Explain your logic.

I would expect this code to output a new array that contains an integer version of 
the given array. 

map() is a built in JavaScript function that creates a creates a copy of the current array
and outputs it depending on the line of code (immutability is maintained). 

parseInt() is a built in JavaScript method that parses a string version of 
a number into an integer version of the number.  

2. Run this snippet. What output do you get? Is this what you expected?

The output: [1, NaN, NaN]

3. It's not immediately clear why we get this output. How would you go about figuring out what's wrong?

The problem with this code is that parseInt() is only parsing the first element of the array.
A 'for' loop probably needs to be used to solve this issue.

4. What would you search for if you could use Google?

I would use Google: 'JavaScript convert string array to integer array.'

5. Do you think you can explain what's going on?
*/

// My pre-notes:
/* 
The parseInt() function parses a string and returns an integer.
*/

// The given snippet:
// console.log(["1", "2", "3"].map(parseInt));

let givenArray = ["1", "2", "3"];

/* // let convertArrayOfNumbers = function(numbers) {
let newArray = numbers.map(function(array) {
  for (let i = 0; i <= array.length; i++) {
    parseInt(array[i]);
  }
});
console.log(`The converted array: ${newArray}`);
// }; */

/* function convertArray() {
  console.log(`The given array: ${givenArray}`);
  givenArray.map(function() {
    for (let i = 0; i < givenArray.length; i++) {
      let convertedArray = [];
      convertedArray = parseInt(givenArray[i]);
      console.log(`Converted Array: ${convertedArray}`);
      if (convertedArray.length === givenArray.length) {
        break;
      }
      console.log(`Converted Array AFTER IF: ${convertedArray}`);
      //       console.log(`The converted array: ${newArray}`);
    }
  });
  //   console.log(`The converted array: ${newArray}`);
}
convertArray(); */
// console.log("Hello World");

/* let convertArrayToInt = function(array) {
  let stringVersion = array[0];
  let intArray = [];
  for (let i = 0; i < array.length; i++) {
    let iterating = array[i];
    if (stringVersion == iterating) {
      stringVersion = parseInt(iterating);
      intArray.push(stringVersion);
    }
  }
  console.log(`integer array: ${intArray}`);
  console.log(typeof intArray[0]);
  // return intArray;
};

convertArrayToInt(givenArray); */

// let five = "5";
// parseInt(five, 5);
// console.log(typeof five);
// console.log(typeof parseInt("6"));

let arrayOfStringNumbers = ["1", "2", "3"];

let stringToNumbers = function(array) {
  let originalArray = array;
  let theNewArray = [];
  for (let i = 0; i < array.length; i++) {
    theNewArray.push(parseInt(originalArray[i]));
    // console.log(`The New Array: ${theNewArray}`);
  }
  console.log(theNewArray);
  console.log(typeof theNewArray[0]);
};

stringToNumbers(arrayOfStringNumbers);
