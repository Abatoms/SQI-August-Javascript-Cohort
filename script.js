console.log("Hello World");
console.log(10 * 5);
console.log(true);
console.log(false);

// Variables, Constants and Data Types
//  1. var
// 2. let
// 3. const

var myAge = 17;
var myName = "Bolarinwa Ahmed";
var _single = true;
var $has_money = false;
const myHeight = 6.3;

console.log(myAge);
console.log(myName);
console.log(_single);
console.log($has_money);

// Let
// The difference between var and let is scoping

let student = "Jinadu Elesho";

student = "Ajanaku Lagbaja";
console.log(student);

// Const
const college = "SQI college of ICT";
console.log(college);

//
let price = null; //variable declaration
console.log(price);
price = 1000; // variable intiailization / definition
console.log(price);

const PIE = 3.142;
console.log(PIE);

// Datatyppes
// 1. Number
// 2. String
// 3. Boolean
// 4. Array*
// 5. Object
// 6 undefined
// 7. null

console.log("The type of the variable " + myAge + " is: " + typeof myAge);
console.log("The type of the variable " + myName + " is: " + typeof myName);
console.log("The type of the variable " + _single + " is: " + typeof _single);
let testVariable = null;
console.log(
  "The type of the variable " + testVariable + " is: " + typeof testVariable
);

let firstNumber = "5";
let secondNumber = "6";
let sum = Number(firstNumber) + parseInt(secondNumber, 10);
let difference = secondNumber - firstNumber;
const product = firstNumber * secondNumber;
const division = firstNumber / secondNumber;
console.log(sum);
console.log(difference);
console.log(product);
console.log(division);

// alert("Welcome to my homepage");

const input = prompt("Please enter your age");

alert("You entered: " + input);
