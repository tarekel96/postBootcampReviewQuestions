// The Question

/* 
Write a function that returns the reverse of an input string. It should work thus:

```
reverse('foobar') // 'raboof'
*/

// My Answer

// let givenWord = "tarek";

// let reverse = function(word) {
//   for (let i = word.length - 1; i >= 0; i--) {
//     let reverseArray = [];
//     let reverseLetters = "";
//     reverseArray = reverseLetters.concat(word[i]);
//     console.log(reverseArray);
//   }
// };

// reverse(givenWord);

let givenWord = "tarek";

let reverse = function(word) {
  for (let i = word.length - 1; i >= 0; i--) {
    let newArray = [];
    let reverseLetters = "";
    //     console.log(reverseLetters);
    newArray.push(reverseLetters.concat(word[i]));
    console.log(newArray[0]);
  }
};

reverse(givenWord);
