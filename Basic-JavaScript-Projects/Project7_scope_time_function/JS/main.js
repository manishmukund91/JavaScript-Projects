// Function to check the age based on user input
function checkAge() {
    // Get the value entered in the input field (age)
    var age = document.getElementById("age").value;

    // Check if the entered age is valid
    if (age >= 18) {
        document.getElementById("ageResult").textContent = "You are an adult.";
    } else if (age < 18 && age !== "") {
        document.getElementById("ageResult").textContent = "You are a minor.";
    } else {
        document.getElementById("ageResult").textContent = "Please enter a valid age.";
    }
}

// Function to handle the Timer functionality
function timeFunction() {
    var startTime = new Date().getTime(); // Capture start time
    document.getElementById("timerResult").textContent = "Timer started...";

    // Simulate a delay using setTimeout and display the time elapsed
    setTimeout(function() {
        var endTime = new Date().getTime(); // Capture end time
        var timeElapsed = (endTime - startTime) / 1000; // Time elapsed in seconds
        document.getElementById("timerResult").textContent = "Time elapsed: " + timeElapsed + " seconds.";
    }, 2000); // Wait 2 seconds before showing the result
}

// Function to trigger the error for debugging
function debuggingFunction() {
    var message = "This is a test message";
    try {
        // Intentional error: 'nonExistentVariable' is not defined
        console.log(nonExistentVariable);  // This will throw an error
    } catch (error) {
        // Log the error in the browser's console
        console.error("Error caught: " + error.message);
        
        // Display error message on the webpage as well
        document.getElementById("debuggingResult").textContent = "Error: " + error.message;
    }

    // After the error is caught, log the success message on the page
    document.getElementById("debuggingResult").textContent += "<br>Message logged after error: " + message;

    // Also log the valid message in the browser's console
    console.log(message);
}
