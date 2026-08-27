// creating a fuction include 2 steps
// step1
// design a structure 

function sayHello() {
console.log("Hello, World!");
}

// step 2
// calling a function
sayHello(); // Output: Hello, World!


// QUE 1
function greet() {
console.log("Welcome to JavaScript!");
}
greet(); // Output: Welcome to JavaScript!
greet(); // Output: Welcome to JavaScript!



// que 2
function showMsg(){
    console.log("learning is fun")
}
showMsg();


// que 3
function intoduction(username,age){
    console.log(`my name is "${username}"`)
    console.log(`im ${age} year old`)
}
intoduction("daniya",20)


// QUE 4
function greetUser(name) {
console.log("Hello, " + name + "!");
}
greetUser("DANIYAH HARMAIN");
greetUser("HADIYA FATIMA");
greetUser("HANIA FATIMA");


// QUE 5
function addNumbers(a, b) {
let sum = a + b;
console.log("Sum is: " + sum);
}
addNumbers(5, 3); // Output: Sum is: 8
addNumbers(10, 20); // Output: Sum is: 30



// Que 6

function calcAverage(a, b, c) {
let avg = (a + b + c) / 3;
console.log(avg);
}
calcAverage(10, 20, 30); // Output: 20
calcAverage(85, 90, 95); // Output: 90

// que 7
function createMessage(name, age) {
console.log(name + " is " + age + " years old");
}
createMessage("Sarah", 25); // Output: Sarah is 25 years old
createMessage("Tom", 30); // Output: Tom is 30 years old

// QUE 8
function calculateArea(length, width) {
let area = length * width;
console.log("Area is: " + area);
}
calculateArea(5, 10); // Output: Area is: 50
calculateArea(7, 3); // Output: Area is: 21


// que 9
// topic namr : return function
function sum(a, b) {
return a + b;
}
let result = sum(10, 5);
console.log(result); // Output: 15
let total = sum(100, 200);
console.log(total); // Output: 300



// QUE 10


function multiply(x, y) {
return x * y;
}
let answer = multiply(4, 5);
console.log(answer); // Output: 20
console.log(multiply(3, 7)); // Output: 21


// QUE 11
function test() {
return 10;
console.log("This will never print");
return 20; // This is also ignored
}
let value = test();
console.log(value); // Output: 10


// que 12
function getprice(){
    return 50;

}
let price = getPrice();
let tax = price * 0.1;
let Total = price + tax;
console.log(total); // Output: 55

// QUE 13
function getGreeting(name) {
return "Hello, " + name;
}
let message = getGreeting("Alice");
console.log(message); // Output: Hello, Alice
console.log(getGreeting("Bob")); // Output: Hello, Bob


