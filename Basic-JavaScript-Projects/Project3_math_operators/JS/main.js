// Function for addition (+) operator
function showAddition() {
    var num1 = 5;
    var num2 = 7;
    var sum = num1 + num2; // Addition operation
    document.getElementById("Math").innerHTML = "The result of " + num1 + " + " + num2 + " is " + sum + ".";
}

// Function for subtraction (-) operator
function showSubtraction() {
    var num1 = 10;
    var num2 = 4;
    var difference = num1 - num2; // Subtraction operation
    document.getElementById("Math").innerHTML = "The result of " + num1 + " - " + num2 + " is " + difference + ".";
}

// Function for multiplication (*) operator
function showMultiplication() {
    var num1 = 6;
    var num2 = 8;
    var product = num1 * num2; // Multiplication operation
    document.getElementById("Math").innerHTML = "The result of " + num1 + " * " + num2 + " is " + product + ".";
}

// Function for modulo (%) operator
function showModulo() {
    var num1 = 17;
    var num2 = 5;
    var remainder = num1 % num2; // Modulo operation (remainder)
    document.getElementById("Math").innerHTML = "The result of " + num1 + " % " + num2 + " is " + remainder + ".";
}

// Function for increment (++) operator
function showIncrement() {
    var num = 5;
    num++; // Increment operation
    document.getElementById("Math").innerHTML = "The result of incrementing 5 is " + num + ".";
}

// Function for decrement (--) operator
function showDecrement() {
    var num = 5;
    num--; // Decrement operation
    document.getElementById("Math").innerHTML = "The result of decrementing 5 is " + num + ".";
}

// Function for generating a random number using Math.random()
function showRandom() {
    var randomNum = Math.random(); // Generate a random number between 0 and 1
    document.getElementById("Math").innerHTML = "A random number between 0 and 1 is " + randomNum + ".";
}
