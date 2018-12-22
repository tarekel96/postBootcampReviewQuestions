// Given info:
/* Suppose you have a web page that contains a `button` 
with the id `click-me`. */

// The original code snippet

var button = document.getElementById("click-me");

for (var i = 0; i < 5; i += 1) {
  button.addEventListener("click", function() {
    //     console.log(i);
  });
}

// Question 1
/* What happens when you click the button? There are two pieces of 
behavior to explain—be sure you touch on both of them. */

// Answer 1
/* When the user clicks the button, the function inside the 
addEventListener method is activated. This function will log
'i' to the console, which is just 5 because using a 'var' to
declate 'i' makes 'i' a global variable. */

// Question 2
/* Explain why the button behaves this way. */

// Testing the given forloop - LOOK AT INDEX.HTML
// let printTheNumber = function() {
//   for (var i = 0; i < 5; i += 1) {
//     button.addEventListener("click", function() {
//       console.log(i);
//     });
//   }
// };
// printTheNumber;
