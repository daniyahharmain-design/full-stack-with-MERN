// QUE1
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((total,num)=>{
    return total+num;


}, 0);
console.log(sum);


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

