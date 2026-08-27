

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


//    question 2

let password = " MyP@ssw0rd123 ";

let securePassword = password.trim().toUpperCase().slice(0, 8);

console.log(securePassword);


// SECTION 4 Section 4: String Slicing
//  que 1 
let fullName = "Alexander Hamilton";

let firstName = fullName.slice(0, 9);
let lastName = fullName.slice(10);

console.log("First name:", firstName);
console.log("Last name:", lastName);

// QUE 2
let phone = "9876543210";

let areaCode = phone.slice(0, 3);
let lastFour = phone.slice(-4);

console.log("Area code:", areaCode + ", Last four:", lastFour);


// section 5 Replace Method
// que 1
let announcement = "The event will happen on Monday and Monday only";

let updatedAnnouncement = announcement.replace("Monday", "Friday");

console.log("Original:", announcement);
console.log("Updated:", updatedAnnouncement);

// QUE 2
let template = "Hello NAME, welcome to our website";

let personalizedMessage = template.replace("NAME", "Alice");

console.log(personalizedMessage);

// Section 6: Basic Arrays
// Question 1:
let colors = ["red", "green", "blue", "yellow"];

console.log("Entire array:", colors);
console.log("First color:", colors[0]);
console.log("Last color:", colors[colors.length - 1]);
console.log("Total number of colors:", colors.length);

// question 2
let scores = [85, 92, 78, 90, 88];

console.log("Score at index 2:", scores[2]);

scores[0] = 95;

console.log("Modified array:", scores);

let sum = scores[0] + scores[1];
console.log("Sum of first two scores:", sum);


// Section 7: Array Methods (push, pop, shift, unshift)
// QUESTION 1
let playlist = [];

playlist.push("Song1");
playlist.push("Song2");

let removedSong = playlist.pop();

playlist.unshift("Song0");

console.log("Final playlist:", playlist);
console.log("Removed song:", removedSong);

// QUESTION 2
let queue = ["First", "Second", "Third"];

let served = queue.shift();

queue.push("Fourth");

let servedNext = queue.shift();

console.log("Remaining queue:", queue);
console.log("People served:", served, "and", servedNext);

// Section 8: Search Methods (indexOf, includes)
// QUESTION 1
let fruits = ["apple", "banana", "mango", "orange", "banana"];

console.log("Position of mango:", fruits.indexOf("mango"));
console.log("First position of banana:", fruits.indexOf("banana"));
console.log("Position of grape:", fruits.indexOf("grape"));

// QUESTION 2
let inventory = ["laptop", "mouse", "keyboard", "monitor"];

if (inventory.includes("mouse")) {
    console.log("Mouse is available");
}

if (!inventory.includes("printer")) {
    console.log("Printer is not available");
}

// Section 9: Concat and Reverse

// que 1
let morningClasses = ["Math", "English", "Science"];
let afternoonClasses = ["History", "Art", "PE"];

let fullSchedule = morningClasses.concat(afternoonClasses);

console.log("Full schedule:", fullSchedule);
console.log("Total number of classes:", fullSchedule.length);

// que2
let numbers = [1, 2, 3, 4, 5];

let reversedNumbers = numbers.reverse();

console.log("Reversed array:", reversedNumbers);
console.log("Numbers array:", numbers);

// note ⚠️ reverse() modifies the original array, so numbers is also reversed.

// Section 10: The splice() Method

// QUE 1
let months = ["Jan", "Feb", "Mar", "May", "Jun"];

months.splice(3, 0, "Apr");

console.log("Corrected array:", months);

// que 2 
let students = ["Alice", "Bob", "Charlie", "David", "Eve"];

students.splice(2, 1);

students.splice(2, 0, "Frank", "Grace");

console.log("Final array:", students);


// Section 11: Array References
// QUE 1

let original = [1, 2, 3];

let reference = original;

reference[0] = 99;

console.log("Original:", original);
console.log("Reference:", reference);

// Both arrays changed because reference and original point to the same array in memory.

// QUE2
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];

console.log("arr1 == arr2:", arr1 == arr2);
console.log("arr1 === arr2:", arr1 === arr2);

// Both are false because arr1 and arr2 are two different arrays (different references in memory),
// even though they contain identical values.


// Section 12: Nested Arrays
// que 1
let scores = [
    ["Alice", 85, 90, 92],
    ["Bob", 78, 85, 88],
    ["Charlie", 92, 88, 95]
];

// Print Charlie's name
console.log("Charlie's name:", scores[2][0]);

// Calculate Bob's average score
let bobAverage = (scores[1][1] + scores[1][2] + scores[1][3]) / 3;
console.log("Bob's average:", bobAverage);

// Change Bob's first score from 78 to 82
scores[1][1] = 82;

console.log("Updated array:", scores);
// que 2









