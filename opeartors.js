// console.log("Welcome to learning about Javascript operators");
// // Opearators
// // Types of Operators
// // 1. Arithmetic Operators
// // 2. Assignment Operators
// // 3. Comparison Operators
// // 4. Logical Operators
// // 5. Bitwise Operators

// // 1. Arithmetic Operators
// // 1. Addition
// let firstNumber = 14;
// let secondNumber = 6;

// let sum = firstNumber + secondNumber;
// console.log(
//   "The sum of " + firstNumber + " and " + secondNumber + " is: " + sum
// );

// // 2. Subtraction
// let difference = firstNumber - secondNumber;
// console.log(
//   "The difference of " +
//     firstNumber +
//     " and " +
//     secondNumber +
//     " is: " +
//     difference
// );

// // 3. Multiplication
// let product = firstNumber * secondNumber;

// console.log(
//   "The product of " + firstNumber + " and " + secondNumber + " is: " + product
// );

// // 4. Division
// let division = firstNumber / secondNumber;

// console.log(
//   "The division of " + firstNumber + " and " + secondNumber + " is: " + division
// );

// // 5. Modulus
// let remainder = firstNumber % secondNumber;
// console.log(
//   "The modulus of " + firstNumber + " and " + secondNumber + " is: " + remainder
// );

// // Exponents
// let exponent = firstNumber ** secondNumber;
// console.log(
//   "The exponent of " + firstNumber + " and " + secondNumber + " is: " + exponent
// );

// // Increment and Decrement
// //  Types of Increment and Decrement
// // 1. Pre Increment
// // 2. Post Increment
// // 3. Pre Decrement
// // 4. Post Decrement

// // Post Increment and pre increment
// let count = 0;
// let postIncrement = count++;
// console.log("Post Increment: " + postIncrement);
// console.log("Count is: " + count);

// count = 0;
// let preIncrement = ++count;
// console.log("Pre Increment: " + preIncrement);
// console.log("Count is: " + count);

// // post decremenr and pre decrement
// count = 10;
// let postDecrement = count--;
// console.log("Post Decrement: " + postDecrement);
// console.log("Count is: " + count);

// count = 10;
// let preDecrement = --count;
// console.log("Pre Decrement: " + preDecrement);
// console.log("Count is: " + count);

// Quick mental classwork
var x = 10;
var y = x++;
var z = x--;

console.log(x); // 10
console.log(y); //10
console.log(z); //11

p = z++;
q = ++x;
r = --y;
console.log("second x", p); // 11
console.log(q); // 11
console.log(r); // 9

// Unary Operators
// 1. Unary plus
let unaryPlus = +10;

console.log("Unary Plus: " + unaryPlus);

// 2. Assignment Operators
//  Equals to
let equalsTo = 10;
console.log("Equals to: " + equalsTo);

// Addition assignment
let myAge = 16;
myAge += 2; // myAge = myAge + 2;
console.log("Addition Assignment: " + myAge);

// Subtraction assignment
let myHeight = 6.3;
myHeight -= 0.3; // myHeight = myHeight - 0.3;
console.log("Subtraction Assignment: " + myHeight);

// Multiplication assignment
let myWeight = 70;
myWeight *= 2; // myWeight = myWeight * 2;
console.log("Multiplication Assignment: " + myWeight);

// Division assignment
let myScore = 100;
myScore /= 2; // myScore = myScore / 2;
console.log("Division Assignment: " + myScore);

// Comparison Operators
// Equal to
let age = "18";
let legalAge = 18;
let isAgeEqual = age == legalAge;
console.log(isAgeEqual);

// Strict equal to
let isAgeStrictEqual = age === legalAge;
console.log(isAgeStrictEqual);

// Not equal to
let isAgeNotEqual = age != legalAge;
console.log(isAgeNotEqual);

// Strict not equal to
let isAgeNotStrictEqual = age !== legalAge;
console.log(isAgeNotStrictEqual);

// Greater than
let isAgeGreaterThanLegalAge = age > legalAge;
console.log(isAgeGreaterThanLegalAge);

// Less than
let isAgeLessThanLegalAge = age < legalAge;
console.log(isAgeLessThanLegalAge);

// Assignment
// Modulus assignment
// Exponential assignment
// Greater than or equals to
// Less than or equals to

// Logical Operatirs
// Logical and
// Logical or
// Logical not

// Or
// true || false => true
// false || true => true
// true || true => true
// false || false => false
const isAllowedToMarry = false;
const isAllowedToVote = true;

console.log("OR", isAllowedToMarry || isAllowedToVote);

// And
// true && false => false
// false && true => false
// false and false => false
// true and true => true
console.log("AND", isAllowedToMarry && isAllowedToVote);

// Mot
// Return the inverse of the boolean value

console.log(!isAllowedToMarry);
