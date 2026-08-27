

// question 1
let userInput = " HeLLo JaVaScRiPt ";

// Remove extra spaces and convert to lowercase
let cleanInput = userInput.trim().toLowerCase();

console.log("userInput:", userInput);
console.log("cleanInput:", cleanInput);

// question 2
let email = " USER@EXAMPLE.COM ";

let formattedEmail = email.trim().toLowerCase();

console.log(formattedEmail);


// topic name indexOf() Method
    // QUESTION 1

let sentence = "JavaScript is awesome and JavaScript is fun";

let awesomePosition = sentence.indexOf("awesome");
let javascriptPosition = sentence.indexOf("JavaScript");
let pythonPosition = sentence.indexOf("Python");

console.log("Position of awesome:", awesomePosition);
console.log("First occurrence of JavaScript:", javascriptPosition);
console.log("Position of Python:", pythonPosition);


    // Question 2

let message = "Welcome to coding class";

if (message.indexOf("coding") !== -1) {
    console.log("Found coding!");
} else {
    console.log("Coding not found");
}


// Section 3: Method Chaining

//   qUESTION 1

let rawData = " MESSY iNpuT ";

// Method chaining in a single line
let processedData = rawData.trim().toLowerCase();

console.log("Original:", rawData);
console.log("Processed:", processedData);




