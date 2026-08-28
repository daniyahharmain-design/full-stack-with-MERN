// QUE 1


// let i = 1 - Start at 1
// i <= 5 - Continue while i is 5 or less
// i++ - Add 1 to i after each loop


for (let i = 1; i <= 5; i++) {
console.log(i);
}



// QUE 2
for (let i = 1; i<=15 ; i+=2) {
    console.log(i);
}

// QUE 3
for (let i = 1; i<=10; i++){
    console.log(`5 × ${i} = ${5 * i}`);
}


// que 4
for (let i=10; i>=1; i--){
    console.log(i);
}
console.log("Blast off!");

// ✓ CORRECT
for (let i = 1; i <= 5; i++) {
console.log(i);
}


// // ❌ INFINITE LOOP
// for (let i = 1; ; i++) {
// console.log(i);
// // No condition means "always true"
// }

// ❌ INFINITE LOOP
// for (let i = 1; ; i++) {
// console.log(i);
// No condition means "always true"
// }


// QUE 5

for (let i = 1; i <= outerLimit; i++) {
for (let j = 1; j <= innerLimit; j++) {
// Inner loop code
}
}


// QUE 6
for (let i = 1; i <= 3; i++) {
console.log(`Outer loop: ${i}`);
for (let j = 1; j <= 3; j++) {
console.log(` Inner loop: ${j}`);
}
}
// Output:
// Outer loop: 1
// Inner loop: 1
// Inner loop: 2
// Inner loop: 3
// Outer loop: 2
// Inner loop: 1
// Inner loop: 2
// Inner loop: 3
// Outer loop: 3
// Inner loop: 1
// Inner loop: 2
// Inner loop: 3


for (let i = 1; i <= 5; i++) {
let row = "";
for (let j = 1; j <= 5; j++) {
row += (i * j) + "\t";
}
console.log(row);
}
// Output (formatted as a table):
// 1 2 3 4 5
// 2 4 6 8 10
// 3 6 9 12 15
// 4 8 12 16 20
// 5 10 15 20 25


for (let i = 1; i <= 5; i++) {
let pattern = "";
for (let j = 1; j <= i; j++) {
pattern += "* ";
}
console.log(pattern);
}
// Output:
// *
// * *
// * * *
// * * * *
// * * * * *


for (let row = 1; row <= 4; row++) {
let line = "";
for (let col = 1; col <= 4; col++) {
line += `(${row},${col}) `;
}
console.log(line);
}
// Output:
// (1,1) (1,2) (1,3) (1,4)
// (2,1) (2,2) (2,3) (2,4)
// (3,1) (3,2) (3,3) (3,4)
// (4,1) (4,2) (4,3) (4,4)



for (let i = 5; i >= 1; i----) {
let pattern = "";
for (let j = 1; j <= i; j++) {
pattern += "* ";
}
console.log(pattern);
}

// Initialization (outside the loop)
let i = 1;
while (condition) {
// Code to execute
// Updation (inside the loop)
i++;
}


let i = 1;
while (i <= 5) {
console.log(i);
i++;
}
// Output: 1, 2, 3, 4, 5


let sum = 0;
let num = 1;
while (sum < 50) {
sum += num;
console.log(`Added ${num}, sum is now ${sum}`);
num++;
}
console.log(`Final sum: ${sum}`);
// Output:
// Added 1, sum is now 1
// Added 2, sum is now 3
// Added 3, sum is now 6
// ...
// Added 10, sum is now 55
// Final sum: 55

