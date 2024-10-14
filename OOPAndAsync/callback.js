console.log("Welcome to Callbacks");

const first = () => {
  console.log("First Function");
};

const second = () => {
  console.log("Second Function");
};

second();
first();

// First Method
// const calculateSum = (numOne, numTwo) => {
//   return numOne + numTwo;
// };

// const displayResult = (result) => {
//   document.getElementById("result").innerText = result;
// };

// let sumResult;
// sumResult = calculateSum(910, 20);
// displayResult(sumResult);

// Second Method
// const displayResult = (result) => {
//   document.getElementById("result").innerText = result;
// };

// const calculateSum = (numOne, numTwo) => {
//   let sum = numOne + numTwo;
//   displayResult(sum);
// };

// calculateSum(16, 18);

// Third Method - Callback
const displayResult = (result) => {
  document.getElementById("result").innerText = result;
};

const displayBoldResult = (result) => {
  document.getElementById(
    "resultBold"
  ).innerHTML = `<strong>${result}</strong>`;
};

const calculateSum = (numOne, numTwo, callback) => {
  let sum = numOne + numTwo;
  callback(sum);
};

calculateSum(16, 98, displayResult);
calculateSum(16, 98, displayBoldResult);
calculateSum(16, 98, (result) => {
  document.getElementById("resultItalic").innerHTML = `<em>${result}</em>`;
});
