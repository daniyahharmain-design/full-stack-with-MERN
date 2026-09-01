// this is an object
const student = {
name: "Alex",
eng: 95,
math: 93,
phy: 97,
getAvg() {
let avg = (this.eng + this.math + this.phy) / 3;
console.log(`${this.name} got avg marks = ${avg}`);
}
};
student.getAvg(); // Output: Alex got avg marks = 95

// // QUE 2
// const account = {
// holder: "Sarah",
// balance: 5000,
// deposit(amount) {
// this.balance += amount;
//  console.log (${this.holder}this.deposit&{amount} "new balance")

// }
