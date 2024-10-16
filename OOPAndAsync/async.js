console.log("Welcome to Asynchronous Javascript");

// // setTimeout(function, milliseconds) - syntax

// function sayMyName() {
//   console.log("My name is Jogunomi");
// }

// // // Set timeout
// setTimeout(sayMyName, 3000);

// (function sayCheese() {
//   console.log("Cheese");
// })();

// setTimeout(() => {
//   console.log("Anon Arrow function timeout");
// }, 2000);

// setTimeout(function () {
//   console.log("Anon Normal function timeout");
// }, 4000);

// //  Set interval
// let count = 0;
// const increaseCount = () => {
//   count++;
//   console.log(count);
// };

// // const interval = setInterval(increaseCount, 1000);

// // Promises
// // Pending, Resolved, Rejected
// // Creating the promise
// let myPromise = new Promise((resolve, reject) => {
//   let request = false;

//   if (request) {
//     resolve({ message: "Promise resolved successfully", status: 200 });
//   } else {
//     reject(new Error("Promise rejected hehehehehehehe"));
//   }
// });

// console.log(myPromise);

// // Using the promise
// myPromise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log("An Error occured", error);
//   });

// Async Await

// Creating async functions
async function myAsyncFunction() {
  console.log("This is an async function");
}

// myAsyncFunction();

async function myTimeOut() {
  setTimeout(() => {
    console.log("30BG");
  }, 3000);
}

myTimeOut();
myAsyncFunction();

async function myDisplay() {
  let myPromise = new Promise(function (resolve) {
    resolve("I love You !!");
  });
  console.log(myPromise);
  document.getElementById("demo").innerHTML = await myPromise;
}

myDisplay();
