// The Question
// Consider the constructor function:

/* function User (firstName, lastName, email) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
} */

/* 
1. How could you update this code such that all `User` objects have a `fullName` 
method that returns the user's full name? Sketch and implement your solution.

original:
function User (firstName, lastName, email) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
}

updated User object constructor with fullName method:

function User(firstName, lastName, fullName, email) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function() {
        return this.firstName + " " + this.lastName
};
  this.email = email;
}

alternative way to do ONLY for already created objects
this adds fullName method to the 'Yaris' object because it is an EXISTING object.
The object constructor is not being re-defined with the new fullName method so any
User objects created after this will still not have the full name integrated in it.
adds fullName method:

Yaris.fullName = function() {
        return this.firstName + " " + this.lastName
};

Diff btwn constructor method and constructor property 
You can NOT add a new property to a constructor function:

Yaris.fullName = "Yaris Baris" 
fullName in this case will output UNDEFINED

2. Can _all_ `User` objects call `fullName`—including those created _before_ you 
defined the method? If not, how would you update this code such that this is the case?

- The Objects created from the constructor before the 'fullName' method/property was defined will
not have the 'fullName' property. 
Scenario: Let's say we have a new user created called Yaris that 
was defined before the 'fullName' method/property was defined in the constructor
Solution:
Yaris.fullName = function() {
        return this.firstName + " " + this.lastName
};

3. In your implementation, you use `User.prototype`. What object does `fullName` 
live on? Draw how it's related to individual `User` objects. 

All JavaScript objects inherit properties and methods from a prototype.
The fullName method lives on the User object.
The JavaScript prototype property allows you to add 
new properties to object constructors: 

Users.prototype.fullName = "fullName"

The JavaScript prototype property also allows you to add
 new methods to objects constructors:

 Users.prototype.fullName = function(){
         return this.firstName + ' ' + this.lastName;
 }

*/

// Bootcamp solution
/* 
function User (firstName, lastName, email) {
  this.firsTName = firstName;
  this.lastName = lastName;
  this.email = email;
}

User.prototype.fullName = function () {
  return this.firstname + " " + this.lastname;
} 
*/
