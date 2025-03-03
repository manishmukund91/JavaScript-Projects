// Function to demonstrate the concat() method
function concatStrings() {
    var str1 = "Hello, ";
    var str2 = "World!";
    // Using concat() to join two strings
    var result = str1.concat(str2);
    // Display the result in the HTML
    document.getElementById("concatResult").textContent = "Concatenated Result: " + result;
}

// Function to demonstrate the slice() method
function sliceString() {
    var str = "JavaScript is awesome!";
    // Using slice() to extract a part of the string (from index 0 to index 10)
    var result = str.slice(0, 10);
    // Display the result in the HTML
    document.getElementById("sliceResult").textContent = "Sliced String: " + result;
}

// Function to demonstrate the toString() method
function toStringExample() {
    var num = 123.45;
    // Using toString() to convert a number to a string
    var result = num.toString();
    // Display the result in the HTML
    document.getElementById("toStringResult").textContent = "Number as String: " + result;
}

// Function to demonstrate the toPrecision() method
function toPrecisionExample() {
    var num = 123.456789;
    // Using toPrecision() to format the number to 4 significant digits
    var result = num.toPrecision(4);
    // Display the result in the HTML
    document.getElementById("precisionResult").textContent = "Number with Precision: " + result;
}
