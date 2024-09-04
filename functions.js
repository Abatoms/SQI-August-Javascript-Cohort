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

// Solution to the assignment
function calculateArea(shape, length, breadth = 0) {
  let area = 0;
  if (shape === "square") {
    area = length ** 2;
  } else if (shape === "rectangle") {
    area = length * breadth;
  } else if (shape === "triangle") {
    area = 0.5 * length * breadth;
  } else {
    return "Invalid Shape";
  }
  return area;
}

let squaredArea = calculateArea("square", 4);
let rectangledArea = calculateArea("rectangle", 5, 6);
let triangledArea = calculateArea("triangle", 8, 10);
let circledArea = calculateArea("circle", 4, 6);

console.log("The area of the square is: ", squaredArea);
console.log("The area of the rectangle is: ", rectangledArea);
console.log("The area of the triangle is: ", triangledArea);
console.log("The area of the circle is: ", circledArea);

// Arrow functions

// function functionName(){

// }
const functionName = () => {
  console.log("I am an arrow function");
  console.log("yayyyyy");
};

functionName();

const addTenToMyAge = (age) => {
  const newAge = age + 10;
  return newAge;
};

console.log(addTenToMyAge(16));

// Function expressions
const myFunction = function sayFuckYou() {
  console.log("Fuck our opps man");
};

myFunction();

console.log(this);

function checkThis() {
  console.log("Here", this);
}

checkThis();
