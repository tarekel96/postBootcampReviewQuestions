// The Question

/* 
Consider the snippet below.

```
var obj = {};

function foo () {
  var updated = 0;

  return bar;
}

function bar (arg) {
  var key = JSON.stringify(arg);

  if (!(obj[key])) {
    obj[key] = arg
  }
  else {
    return obj[key];
  }

  console.log(updated);
}
```

2. After updatin your code, explain where `bar` and `obj` are visible, and why.

3. Run `foo`; store its return value in a variable; and experiment with it. 
Explain its behavior. What fundamental JavaScript concept is responsible for this behavior?
*/

// Question 1
/* 
What will happen if we call `bar`? Why? 

if 'bar 'is called an error would most likely pop up because the 'bar' function console logs
'updated' which is only defined in the scope of the foo function. The foo function is not in the 
'bar' function so there's no way the computer will know 'updated exists.

How can we rearrange our code to fix this, and why does this work?

to fix this, 'updated' should be defined within the 'bar' function scope in order for the 'bar'
function to console log 'updated. Another idea is to put the whole 'foo' function into the 'bar
function prior to the body of the 'bar' function. This would work because the 'updated' variable
would be defined in the 'bar' function, however, the return 'bar' portion may terminate the 
function early since it is a asych.
*/
