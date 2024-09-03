console.log("Welcome to Functions");
// Types of functions
// Non parameterized function
// Parameterized functions
// Function with return value
// function without return value
function sayHello() {
  console.log("Hello, and welcome to my abode");
  console.log("Gbese jhoor");
}

function greetPerson(name) {
  console.log(`Welcome ${name}`);
}

function greetPersonWithDefaultValue(name = "Lagbaja") {
  console.log("Ekaabo saagbo osupa " + name);
}

function addNumbers(numbOne, numbTwo) {
  let result = numbOne + numbTwo;
  return result;
}

function arithemeticSolver(operator, numbOne, numbTwo) {
  let result = null;
  if (operator === "add") {
    result = numbOne + numbTwo;
  } else if (operator === "minus") {
    result = numbOne - numbTwo;
  } else if (operator === "multiply") {
    result = numbOne * numbTwo;
  } else if (operator === "divide") {
    result = numbOne / numbTwo;
  } else {
    result = "Invalid operator";
  }

  return result;
  // console.log("The result is: ", result);
}

sayHello();
greetPerson("Jinadu");
greetPerson("Elesho");

const myName = "Bolarinwa";
greetPersonWithDefaultValue(myName);
greetPersonWithDefaultValue();

const sum = addNumbers(4, 5);
console.log(addNumbers(4, 5));
// console.log(greetPersonWithDefaultValue());

// arithemeticSolver("add", 20, 4);
let myOperator = "add";
let arithemeticResult = arithemeticSolver(myOperator, 10, 5);
console.log("The result is: ", arithemeticResult);

console.log("Ogbeni gba result ee", arithemeticResult);
