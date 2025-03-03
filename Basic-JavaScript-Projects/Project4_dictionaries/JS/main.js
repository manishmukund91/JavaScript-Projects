// Creating a dictionary (JavaScript object) with key-value pairs (KVPs)
var myDictionary = {
    name: "John",
    age: 30,
    city: "New York",
    job: "Developer"
};

// Function to display the value of a dictionary key
function showDictionaryValue() {
    // Retrieve the value for a specific key (e.g., 'name') from the dictionary
    var value = myDictionary.name; // Accessing the 'name' key value
    
    // Output the value to the paragraph with id "Dictionary"
    document.getElementById("Dictionary").innerHTML = "The name in the dictionary is: " + value;
}
