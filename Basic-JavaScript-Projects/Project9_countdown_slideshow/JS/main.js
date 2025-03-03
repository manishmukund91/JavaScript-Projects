// Function to handle the countdown logic
function countdown() {
    var countdownElement = document.getElementById("countdownDisplay");
    var timeLeft = 10; // Countdown time in seconds

    // Display countdown every second
    var countdownInterval = setInterval(function() {
        countdownElement.textContent = "Time left: " + timeLeft + " seconds";
        timeLeft--;

        // Stop countdown when time reaches 0
        if (timeLeft < 0) {
            clearInterval(countdownInterval);
            countdownElement.textContent = "Countdown finished!";
        }
    }, 1000); // 1000ms = 1 second
}

// Function to create a basic slideshow
var slideIndex = 0;

// Show the next slide in the slideshow
function showSlides() {
    var slides = document.getElementsByClassName("slides");

    // Hide all slides
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    // If we've reached the end, reset to the first slide
    if (slideIndex > slides.length) { slideIndex = 1 }

    // Display the current slide
    slides[slideIndex - 1].style.display = "block";

    // Change slide every 3 seconds
    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

// Start the countdown and slideshow when the page loads
window.onload = function() {
    countdown(); // Start countdown
    showSlides(); // Start slideshow
};
