// The Question

/* 
Write a function that determines if its string argument is a palindrome. 
A palindrome is a word, phrase, or sequence that reads the same backward as forward.
*/

// My Answer

let paliExampleOne = "racecar";
let paliExampleTwo = "eye";
let paliExampleThree = "radar";
let notPalidrome = "tarek";

let testPalidrome = function(word) {
  let palidrome = `This ${word} is a palidrome.`;
  for (let i = 0; i < word.length; i++) {
    let letterIterator = word[i];
    break;
    if (letterIterator[0] === i[word.length]) {
      continue;
    }
    for (let j = word.length; j >= 0; j--) {
      //       console.log(j);
      console.log("word[i]:" + letterIterator);
      //       console.log("word[j]:" + word[j]);
      if (letterIterator === j) {
        palidrome.word = letterIterator;
      } else {
        palidrome = `This ${word} is NOT a palidrome`;
      }
    }
  }
  //   console.log(palidrome);
};

testPalidrome(paliExampleOne);
// testPalidrome(paliExampleThree);
testPalidrome(notPalidrome);
