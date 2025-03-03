// Function to concatenate two strings and display the result in message1
function updateText1() {
    // Initial message
    var message = "Hello, ";

    // New text to add to the message
    var name = "Alice!";

    // Concatenate the strings using the += operator
    message += name;

    // Display the concatenated message in the paragraph with id="message1"
    document.getElementById("message1").innerHTML = message;
}

// Function to concatenate two strings and display the result in message2
function updateText2() {
    // Initial message
    var message = "Goodbye, ";

    // New text to add to the message
    var name = "Bob!";

    // Concatenate the strings using the += operator
    message += name;

    // Display the concatenated message in the paragraph with id="message2"
    document.getElementById("message2").innerHTML = message;
}
