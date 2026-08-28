/* problem 1 number sign */

// let num = -1;

// if (num > 0) {
//     console.log("Positive number");
// } else if (num < 0) {
//     console.log("Negative number");
// } else {
//     console.log("Zero");
// }

// problem 2 

// let age = 15;

// if (age>= 18) {
//     console.log("you ara eligible");
// }

// else (age >=17) 

//     { console.log ("you are not eligible");
// }


// problem 3
// let marks = 85;

// if (marks >= 90) {
//     console.log("Grade: A");
// } else if (marks >= 80) {
//     console.log("Grade: B");
// } else if (marks >= 70) {
//     console.log("Grade: C");
// } else if (marks >= 60) {
//     console.log("Grade: D");
// } else {
//     console.log("Grade: F");
// }


// problem 4
// let username = "admin";
// let password = "12345";

// if (username === "admin" && password === "12345") {
//     console.log ("Login successful");
    
// } else {
//     console.log("invalid user");
    
// }

// problem 5

// let day = "Monday";


// if (day = "Monday") {
//     console.log ("week day");
    
// } 
// else 

// if (day = "sunday") {
//     console.log("weekend");
    
// }

// problem 6
// let age = 25;
// if (age < 12) {
//     console.log ("ticket $5");
// }else


// if (age>=12 && age<60)
//      {

// console.log ("ticket $8");
    
// }else

// if (age >=60) {
//     console.log("ticket $6");

// }


// problem 7
// let orderTotal = 40;
// let isPremium = true;

// if (orderTotal >= 50 && isPremium) {
//     console.log("free shipping");
// }


// else {
//     console.log("NO FREE SHIPPING");
//  }


// PROBLEM 8 If marks >= 33: Check if marks >= 80, print "Pass with distinction", else print "Pass"
// If marks < 33: Print "Fail"

// let marks = 33;
// if (marks >=33) {

//     if (marks >=80) {
//         console.log("pass with distinction");
                
//     }
//     else{
//         console.log("just pass")
//     }
    
// } else if (marks < 33){
//      console.log("fail");

// }


// problem 9 
// let temperature = 38;
// let isRaining = false;

// if (temperature >30) {
//     console.log("hot day");
// }

// if ( temperature <20>30) {

//     if (temperature <20 && temperature >30)  {
//         if (isRaining) {
//             console.log("Pleasant but rainy");
//         }
//         else { 

//             console.log("Perfect weather");

//     }
// }
    
// } else {
//     if(temperature < 20){
//         console.log("cold day");
//     }
    
// }

// problem 10

// let day = 3;

// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid day");
// }



// problem 11
// Problem 11: Traffic Signals
// let signal = "yellow";

// switch (signal) {
//     case "red":
//         console.log("Stop");
//         break;

//     case "yellow":
//         console.log("Slow down");
//         break;

//     case "green":
//         console.log("Go");
//         break;

//     default:
//         console.log("Invalid signal");
// }


// // Problem 12: Month to Season
// let dayNum = 7;

// switch (dayNum) {
//     case 12:
//     case 1:
//     case 2:
//         console.log("Winter");
//         break;

//     case 3:
//     case 4:
//     case 5:
//         console.log("Spring");
//         break;

//     case 6:
//     case 7:
//     case 8:
//         console.log("Summer");
//         break;

//     case 9:
//     case 10:
//     case 11:
//         console.log("Fall");
//         break;

//     default:
//         console.log("Invalid month");
// }


// problem 13
// let username = "daniya";

// if (username) {
//     console.log("Welcome " + username);
// } else {
//     console.log("Please enter a username");
// }


// problem 14 Check Score
let score = 0;

if (score) {
    console.log(score);
} else {
    console.log("No score yet");
}


// Problem 15: Voting Eligibility
let age = 20;
let isCitizen = true;
let hasVoted = false;

if (age >= 18 && isCitizen && !hasVoted) {
    console.log("You can vote");
} else {
    console.log("You cannot vote");
}


// Problem 16: Discount Calculator
let total = 120;
let isPremium = false;
let discount;

if (isPremium) {
    discount = 20;
} else if (total > 100) {
    discount = 15;
} else if (total > 50) {
    discount = 10;
} else {
    discount = 0;
}

let finalAmount = total - (total * discount / 100);

console.log("Final amount: " + finalAmount);


// Problem 17: Number Checker
let num = 15;

if (num % 3 === 0 && num % 5 === 0) {
    console.log("FizzBuzz");
} else if (num % 3 === 0) {
    console.log("Fizz");
} else if (num % 5 === 0) {
    console.log("Buzz");
} else {
    console.log(num);
}


// Problem 18: Age Input
let userAge = Number(prompt("Enter your age:"));

if (userAge >= 18) {
    alert("You can vote");
} else {
    alert("You cannot vote");
}


// Problem 19: Simple Calculator
let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));
let operator = prompt("Enter operator (+, -, *, /):");

let result;

switch (operator) {
    case "+":
        result = num1 + num2;
        break;

    case "-":
        result = num1 - num2;
        break;

    case "*":
        result = num1 * num2;
        break;

    case "/":
        result = num1 / num2;
        break;

    default:
        result = "Invalid operator";
}

alert("Result: " + result);


// Problem 20: Number Guessing
let secretNumber = 7;
let guess = Number(prompt("Guess the number:"));

if (guess === secretNumber) {
    alert("Congratulations!");
} else if (guess > secretNumber) {
    alert("Too high!");
} else {
    alert("Too low!");
}


// Problem 21: Golden String
let str = "Amazing";

if ((str[0] === "A" || str[0] === "a") && str.length > 5) {
    console.log("Golden string");
} else {
    console.log("Not a golden string");
}


// Problem 22: Largest of Three
let number1 = 45;
let number2 = 67;
let number3 = 52;

let largest;

if (number1 >= number2 && number1 >= number3) {
    largest = number1;
} else if (number2 >= number1 && number2 >= number3) {
    largest = number2;
} else {
    largest = number3;
}

console.log("Largest: " + largest);


// Problem 23: Quarterly Months
let quarter = 2;

switch (quarter) {
    case 1:
        console.log("January, February, March");
        break;

    case 2:
        console.log("April, May, June");
        break;

    case 3:
        console.log("July, August, September");
        break;

    case 4:
        console.log("October, November, December");
        break;

    default:
        console.log("Invalid quarter");
}


// Problem 24: Divisibility by 10
let number = Number(prompt("Enter a number:"));

if (number % 10 === 0) {
    console.log("Good");
} else {
    console.log("Bad");
}


// Problem 25: Multiple of 7
let numberToCheck = 14;

if (numberToCheck % 7 === 0 && numberToCheck % 2 === 0) {
    console.log("Special number");
} else if (numberToCheck % 7 === 0 && numberToCheck % 2 !== 0) {
    console.log("Lucky number");
} else {
    console.log("Regular number");
}







    


    