// Step 1: Declare a variable and display its type using typeof operator
var myVariable = 42; // Integer value
document.write("The type of myVariable is: " + typeof myVariable + "<br>");

// Step 2: Combine a string and a number in an expression
var myString = "The number is ";
var result = myString + myVariable; // Combining string and number
document.write(result + "<br>");

// Step 3: Use comparison operators and display results

// == (loose equality) operator
var x = 10;
var y = "10"; // String value of "10"
document.write("x == y: " + (x == y) + "<br>"); // true because JavaScript coerces the string "10" into a number

// === (strict equality) operator
document.write("x === y: " + (x === y) + "<br>"); // false because types do not match

// > (greater than) operator
var a = 5;
var b = 3;
document.write("a > b: " + (a > b) + "<br>"); // true because 5 is greater than 3

// < (less than) operator
document.write("a < b: " + (a < b) + "<br>"); // false because 5 is not less than 3

// && (logical AND) operator
var condition1 = true;
var condition2 = false;
document.write("condition1 && condition2: " + (condition1 && condition2) + "<br>"); // false because both conditions must be true

// || (logical OR) operator
document.write("condition1 || condition2: " + (condition1 || condition2) + "<br>"); // true because at least one condition is true

// ! (logical NOT) operator
document.write("!condition1: " + (!condition1) + "<br>"); // false because condition1 is true, so !condition1 is false

// Display the result of the logical operators and comparisons
