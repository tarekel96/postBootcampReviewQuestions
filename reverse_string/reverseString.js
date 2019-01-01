// The Question

/* 
Write a function that returns the reverse of an input string. It should work thus:

```
reverse('foobar') // 'raboof'
*/

// My Answer

let givenWord = "tarek";

let reverse = function(word) {
  for (let i = word.length - 1; i >= 0; i--) {
    let reverseArray = [];
    let reverseLetters = "";
    reverseArray = reverseLetters.concat(word[i]);
    console.log(reverseArray);
  }
};

reverse(givenWord);
