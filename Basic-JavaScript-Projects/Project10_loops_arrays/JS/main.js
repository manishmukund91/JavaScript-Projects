// Function using a while loop
function whileLoop() {
    let result = "";
    let i = 1;
    
    // Loop until i reaches 5
    while (i <= 5) {
        result += "Number " + i + "<br>";
        i++;
    }

    // Display the result in the HTML
    document.getElementById("whileLoopResult").innerHTML = result;
}

// Function using a for loop
function forLoop() {
    let result = "";
    
    // Loop through numbers 1 to 5 using a for loop
    for (let i = 1; i <= 5; i++) {
        result += "Number " + i + "<br>";
    }

    // Display the result in the HTML
    document.getElementById("forLoopResult").innerHTML = result;
}

// Function using an array
function displayArray() {
    const fruits = ["Apple", "Banana", "Orange", "Grapes", "Mango"];
    let result = "Fruits:<br>";

    // Loop through the array and display each element
    fruits.forEach(fruit => {
        result += fruit + "<br>";
    });

    // Display the result in the HTML
    document.getElementById("arrayContents").innerHTML = result;
}

// Function to create and display an object using the "let" keyword
function displayObject() {
    let car = {
        make: "Toyota",
        model: "Corolla",
        year: 2020,
        color: "blue"
    };

    let result = `Car Make: ${car.make}<br>
                  Car Model: ${car.model}<br>
                  Car Year: ${car.year}<br>
                  Car Color: ${car.color}`;

    // Display the object details in the HTML
    document.getElementById("objectDetails").innerHTML = result;
}

// Call the functions after the page loads
window.onload = function() {
    whileLoop();
    forLoop();
    displayArray();
    displayObject();
}
