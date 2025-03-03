// Step 1: Ternary operation function
function checkAge() {
    var age = document.getElementById("age").value; // Get the value of the input field
    var result = (age >= 18) ? "You are an adult." : "You are a minor."; // Ternary operation
    document.getElementById("result").textContent = result; // Display result in the HTML element
}

// Step 2: Constructor function with 'new' and 'this'
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        return "Hello, my name is " + this.name + " and I am " + this.age + " years old.";
    };
}

// Step 3: Function to display results of the constructor
function displayPersonInfo() {
    var john = new Person("John", 30); // Create a new person object using the constructor
    document.getElementById("personInfo").textContent = john.greet(); // Display the greeting
}

// Step 4: Nested function example
function outerFunction() {
    var outerVariable = "I am outside!";
    
    function innerFunction() {
        var innerVariable = "I am inside!";
        return outerVariable + " And " + innerVariable; // Nested function accessing outer scope
    }
    
    console.log(innerFunction()); // Call the inner function from the outer function
}
