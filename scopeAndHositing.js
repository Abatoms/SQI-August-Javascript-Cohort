"use strict";
console.log("Welcome to Scopes in JS");
// 1. Var
// 2. Let
// 3. Const

// Types of scopes
// 1. Global Scope
// 2. Local Scope (Function Scope)
// 3. Block Scope

// Global Scope
var myName = "John Doe";
let myAge = 20;
// lolo = "Jsjj";
// console.log(lolo);
console.log(myName);

function printDetails() {
  console.log("Inside a function: ", myName);
  console.log("Inside a function: ", myAge);
}

printDetails();

// Local scope (cannot be used outside the function)
function printLocal() {
  var localName = "Jane Doe"; // local scope
  let localAge = 30; // local scope
  const localGender = "male"; // local scope
  hisName = "Jagagan"; // global scope
  console.log(localName);
  console.log(localAge);
  console.log(localGender);
  console.log("His name in function (local): ", hisName);
}

printLocal();
console.log("His name outside function (global): ", hisName);
// console.log("Outside the function: ", localName);
// console.log("Outside the function: ", localAge);
// console.log("Outside the function: ", localGender);

// Block Scope
// if, for, while, switch
if (10 > 5) {
  var blockName = "Block Doe"; // global scope
  let blockAge = 40; // block scope
  const blockGender = "female"; // block scope
  console.log(blockName);
  console.log(blockAge);
  console.log(blockGender);
}

console.log("Outside the block: ", blockName);
// console.log("Outside the block: ", blockAge);
// console.log("Outside the block: ", blockGender);

console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
console.log("Welcome to Hoisting in JS");
// Hoisting in JS
// 1. Variable Hoisting
// 2. Function Hoisting

// Variable Hoisting
myVar = "Hello world";
console.log(myVar);

var myVar = "Hi world";
