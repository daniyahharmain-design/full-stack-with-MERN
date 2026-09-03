// QUE1
// let numbers = [1, 2, 3, 4, 5];
// let sum = numbers.reduce((total,num)=>{
//     return total+num;


// }, 0);
// console.log(sum);


// QUE 2
let a = [2, 3, 4, 5];
let product = a.reduce((result, num) => result * num, 1);
console.log(product);

// QUE3
let cart = [
{ item: "Shirt", price: 500 },
{ item: "Shoes", price: 1200 },
{ item: "Hat", price: 300 }
];
// reduce()take all the items from the list &make final result
// 0 use for strat counting from rupee 0
let totalprice =cart.reduce((sum,product)=>sum + product.price,0);
console.log(totalprice);

// QUE 4 Count occurrences
let fruits = ["apple", "banana", "apple", "mango", "apple", "banana"];
let count = fruits.reduce((counter, fruit) => {
counter[fruit] = (counter[fruit] || 0) + 1;
return counter;
}, {});
console.log(count);


// que5
let nested = [[1, 2], [3, 4], [5, 6]];
let flat = nested.reduce((acc, arr) => acc.concat(arr), []);
console.log(flat);

// que 6: Find longest word
let words = ["hi", "hello", "hey", "goodbye"];
let longest = words.reduce((longest, word) => {
return word.length > longest.length ? word : longest;
}, "");
console.log(longest); // "goodbye"

// que 7 Group by category
let items = [
{ name: "Apple", type: "fruit" },
{ name: "Carrot", type: "vegetable" },
{ name: "Banana", type: "fruit" },
{ name: "Potato", type: "vegetable" }
];
let grouped = items.reduce((result, item) => {
if (!result[item.type]) {
result[item.type] = [];
}
result[item.type].push(item.name);
return result;
}, {});
console.log(grouped);


// que 8 Calculate average
// let scores = [85, 90, 78, 92, 88];
// let sum = scores.reduce((total, score) => total + score, 0);
// let average = sum / scores.length;
// console.log(average); // 86.6

// // que 9 Find maximum number
// let numbers = [45, 78, 23, 89, 34, 12];
// let max = numbers.reduce((maximum, num) => {
// return num > maximum ? num : maximum;
// });
// console.log(max); // 89

// que 10Find maximum with initial value
// let numbers = [45, 78, 23, 89, 34];
// let max = numbers.reduce((maximum, num) => {
// return num > maximum ? num : maximum;
// }, numbers[0]);
// console.log(max); // 89


// que Find minimum number
//  let numbers = [45, 78, 23, 89, 34, 12];
//  let max = numbers.reduce((maximum, num) => {
// return num > maximum ? num : maximum;
// }, numbers[0]);
// console.log(max); // 89

// que Find minimum number
// let numbers = [45, 78, 23, 89, 34, 12];
// let min = numbers.reduce((minimum, num) => {
// return num < minimum ? num : minimum;
// });
// console.log(min); // 12

// que Find highest price
// let products = [
// { name: "Laptop", price: 50000 },
// { name: "Mouse", price: 500 },
// { name: "Monitor", price: 15000 }
// ];
// let maxPrice = products.reduce((max, product) => {
// return product.price > max ? product.price : max;
// }, 0);
// console.log(maxPrice); // 50000


// Find student with highest marks
let students = [
{ name: "Rahul", marks: 85 },
{ name: "Priya", marks: 92 },
{ name: "Arjun", marks: 78 }
];
let topper = students.reduce((highest, student) => {
return student.marks > highest.marks ? student : highest;
});
console.log(topper); // { name: "Priya", marks: 92 }

// Example 1: Simple greeting
function greet(name = "Guest") {
console.log(`Hello, ${name}!`);
}
greet("Alice"); // Hello, Alice!
greet(); // Hello, Guest!

// Example 2: Calculate with tax
function calculateTotal(price, taxRate = 0.18) {
return price + (price * taxRate);
}
console.log(calculateTotal(1000)); // 1180 (uses 18% tax)
console.log(calculateTotal(1000, 0.10)); // 1100 (uses 10% tax)


// Multiple defaults
function createUser(name, age = 18, country = "India") {
return { name, age, country };
}
console.log(createUser("Raj"));
// { name: "Raj", age: 18, country: "India" }
console.log(createUser("Priya", 25));
// { name: "Priya", age: 25, country: "India" }
console.log(createUser("Tom", 30, "USA"));
// { name: "Tom", age: 30, country: "USA" }


// Power function
function power(base, exponent = 2) {
return base ** exponent;
}
console.log(power(5)); // 25 (5^2)
console.log(power(5, 3)); // 125 (5^3)
console.log(power(2, 4)); // 16 (2^4)

// // 5: Calculate discount
// function applyDiscount(price, discount = 10) {
// return price -- (rice * discount / 100);
// }
// console.log(applyDiscount(1000)); // 900 (10% off)
// console.log(applyDiscount(1000, 20)); // 800 (20% off)

// 6: Array slice with defaults
function getElements(arr, start = 0, end = arr.length) {
return arr.slice(start, end);
}
let numbers = [1, 2, 3, 4, 5];
console.log(getElements(numbers)); // [1, 2, 3, 4, 5]
console.log(getElements(numbers, 2)); // [3, 4, 5]
console.log(getElements(numbers, 1, 3)); // [2, 3]

// 7: Using expressions as defaults
function multiply(a, b = a * 2) {
return a * b;
}
console.log(multiply(5)); // 50 (5 * 10)
console.log(multiply(5, 3)); // 15 (5 * 3)

// 4. Spread Operator ( ... ) general synatx...iterableObject
// let original = [1, 2, 3, 4];
// let copy = [...original];
// console.log(copy); // [1, 2, 3, 4]

// Proof they're different arrays
// copy.push(5);
// console.log(original); // [1, 2, 3, 4] (unchanged)
// console.log(copy); // [1, 2, 3, 4, 5]


// Merge two arrays

let arr1 = [1,2,3,4,5,]
let arr2 = [0,9,8,7,6,]

let merg =[...arr1,...arr2];
console.log(merg);



// que combining multi arrys


let fruit = ["apple", "banana"];
let vegetables = ["carrot", "potato"];
let dairy = ["milk", "cheese"];
let groceries = [...fruit,...vegetables,...dairy];

console.log(groceries);

// Spread string into array
let word ="HELLO"
let letter =[...word];

console.log (letter);

// Example 6: Insert in middle
let start = [1, 2];
let end = [5, 6];
let middle = [3, 4];
let insert=[...start,...middle,...end];

console.log(insert);


// Example 7: Pass array elements as function arguments
function sum(a, b, c) {
return a + b + c;
}
let number = [1, 2, 3];
console.log(sum(...number));


// Example 8: Find max in array
let num = [45, 78, 23, 89, 34];
let max = Math.max(...num);
console.log(max);


// Example 1: Copy an object
let original = { name: "John", age: 25 };
let copy = { ...original };
console.log(copy); // { name: "John", age: 25 }
// Proof they're different objects
copy.age = 30;
console.log(original); // { name: "John", age: 25 } (unchanged)
console.log(copy); // { name: "John", age: 30 }

// Add new properties
// let user = { name: "Alice", age: 22 };
// let userupdate ={...user,city:"Hyderabad"}
// console.log(userupdate);


// Override properties
let user = {
name: "Tony Stark",
email: "tony@stark.com",
age: 45
};
let updatedUser = {
...user,
email: "ironman@stark.com", // Override
city: "New York" // Add new
};
console.log(updatedUser);


// // 7. Rest Operator ( ... )
// syntax// function functionName(...restParams) {
// // }
function sum(...numbers) {
return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3)); // 6
console.log(sum(5, 10, 15, 20)); // 50
console.log(sum(100, 200, 300, 400)); // 1000



// combining fisrt and secod

function describePodium(first, second, ...others) {
console.log(`Gold: ${first}`);
console.log(`Silver: ${second}`);
console.log(`Others: ${others.join(", ")}`);
}
describePodium("India", "Australia", "England", "Pakistan", "South Africa");


// 9. Array Destructuring
let d = 5;
let b = 10;
[d, b] = [b, d]; // Swap
console.log(d); // 10
console.log(b); // 5


// get high score

function getScores() {
return [95, 87, 92];
}
let [highest, middl, lowest] = getScores();
console.log(highest); // 95
console.log(middl); // 87
console.log(lowest); // 92


// 10. Object Destructuring
let student = {
name: "Rahul",
age: 20,
grade: "A"
};
let { name, age, grade } = student;
console.log(name); // "Rahul"
console.log(age); // 20
console.log(grade); // "A"


// default value

let settings = { theme: "dark" };
let { theme, language = "English", notifications = true } = settings;
console.log(theme); // "dark"
console.log(language); // "English" (default)
console.log(notifications); // true (default)


// Create an array of 5 product names
const products = ["Laptop", "Phone", "Headphones", "Keyboard", "Mouse"];

// Use forEach to print each product
products.forEach(function(product) {
    console.log("Available: " + product);
});


// Create an array of numbers
const numb = [1, 2, 3, 4, 5];

// Multiply each number by 10
const multipliedNumbers= numb.map(function(number) {
    return number * 10;
});

console.log(multipliedNumbers);

// Create an array of student objects
// const students = [
//     { name: "Rahul", marks: 85 },
//     { name: "Priya", marks: 72 },
//     { name: "Arjun", marks: 90 },
//     { name: "Sneha", marks: 68 },
//     { name: "Kiran", marks: 78 }
// ];

// // Get students who scored above 75
// const passedStudents = students.filter(function(student) {
//     return student.marks > 75;
// });

// console.log(passedStudents);

// Create an array of prices
const prices = [100, 250, 50, 300, 150];

// Calculate the total cost
const totalCost = prices.reduce(function(total, price) {
    return total + price;
}, 0);

console.log("Total Cost:", totalCost);


// Create two arrays of favorite movies
const movies1 = ["Inception", "Interstellar", "The Dark Knight"];

const movies2 = ["Avatar", "Titanic", "Avengers"];

// Merge both arrays using spread operator
const allMovies = [...movies1, ...movies2];

console.log(allMovies);

// Function accepts student name and any number of marks
function calculateAverage(studentName, ...marks) {

    // Calculate total marks
    const total = marks.reduce(function(sum, mark) {
        return sum + mark;
    }, 0);

    // Calculate average
    const average = total / marks.length;

    console.log("Student:", studentName);
    console.log("Average:", average);
}

// Call the function
calculateAverage("Rahul", 80, 75, 90, 85);

// Create a book object
// const book = {
//     title: "The Alchemist",
//     author: "Paulo Coelho",
//     year: 1988,
//     pages: 208
// };

// // Destructure title and rename author to writtenBy
// const { title, author: writtenBy } = book;

// console.log("Title:", title);
// console.log("Written By:", writtenBy);


// // Exercise 1: forEach
// const products = ["Laptop", "Phone", "Headphones", "Keyboard", "Mouse"];

// products.forEach(function(product) {
//     console.log("Available: " + product);
// });


// Exercise 2: map
// const numbers = [1, 2, 3, 4, 5];

// const multipliedNumbers = numbers.map(function(number) {
//     return number * 10;
// });

// console.log(multipliedNumbers);


// // Exercise 3: filter
// const students = [
//     { name: "Rahul", marks: 85 },
//     { name: "Priya", marks: 72 },
//     { name: "Arjun", marks: 90 },
//     { name: "Sneha", marks: 68 },
//     { name: "Kiran", marks: 78 }
// ];

// const passedStudents = students.filter(function(student) {
//     return student.marks > 75;
// });

// console.log(passedStudents);


// // Exercise 4: reduce
// const prices = [100, 250, 50, 300, 150];

// const totalCost = prices.reduce(function(total, price) {
//     return total + price;
// }, 0);

// console.log("Total Cost:", totalCost);


// // Exercise 5: Spread
// const movies1 = ["Inception", "Interstellar", "The Dark Knight"];
// const movies2 = ["Avatar", "Titanic", "Avengers"];

// const allMovies = [...movies1, ...movies2];

// console.log(allMovies);


// Exercise 6: Rest
// function calculateAverage(studentName, ...marks) {
//     const total = marks.reduce(function(sum, mark) {
//         return sum + mark;
//     }, 0);

//     const average = total / marks.length;

//     console.log("Student:", studentName);
//     console.log("Average:", average);
// }

// calculateAverage("Rahul", 80, 75, 90, 85);


// Exercise 7: Destructuring
// const book = {
//     title: "The Alchemist",
//     author: "Paulo Coelho",
//     year: 1988,
//     pages: 208
// };

// const { title, author: writtenBy } = book;

// console.log("Title:", title);
// console.log("Written By:", writtenBy);





























