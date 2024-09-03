console.log("Welcome to Loops");
const myName = "Bolarinwa Ahmed";
const sentence = "The best food for " + myName + " is eba";
const betterSentence = `The best food for ${myName} is eba`;
console.log(betterSentence);

// Loops
// Types of loops
// 1. For Loop
// 2. While Loop
// 3. Do While loop

// A for loop
// for(intialization; condition; increment/decrememt){}
for (let i = 0; i <= 1000; i++) {
  console.log(i);
}

// // A for loop with break
// for (let i = 0; i < 1000; i++) {
//   if (i > 50) {
//     break;
//   }
//   console.log("The value of i is ", i);
// }

// A for loop with continue
// for (let i = 0; i <= 100; i++) {
//   if (i % 5 === 0) {
//     // console.log("I don't do multiples of 5");
//     continue;
//   }
//   console.log("The recent value of i is", i);
// }

//While loop
// initialization
// while(condition){
// The code to run
//     increment or decrement
// }

// let i = 0;
// while (i <= 10) {
//   console.log(`This is box ${i}`);
//   i++;
// }

// The Do while loop
// initialization
// do {
//     // something
//     increment or decrement
// }
// while (conditio){
// }

// let j = 11;
// do {
//   console.log(`The value of j is ${j}`);
//   j++;
// } while (j <= 10);

// For loop with decrement
// for (let i = 10; i >= 0; i--) {
//   console.log(i);
// }

// for loop with decrement and break
// for (let i = 10; i >= 0; i--) {
//   if (i === 5) {
//     break;
//   }
//   console.log(i);
// }

// for loop with decrement and continue
// for (let i = 10; i >= 0; i--) {
//   if (i % 2 === 0) {
//     console.log("I don't do even numbers");
//     continue;
//   }
//   console.log(i);
// }

// While loop with decrement
// let k = 10;
// while (k >= 0) {
//   console.log(k);
//   k--;
// }

// Assignment
/*
    Write a code to display the numbers from 1 to 100

    For every number that is a multiple of 3 display "Fizz" instead of the number

     For every number that is a multiple of 5 display "Buzz" instead of the number

      For every number that is a multiple of both 3 and 5 display "FizzBuzz" instead of the number

*/

// Solution to the FizzBuzz assignment
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
    continue;
  } else if (i % 3 === 0) {
    console.log("Fizz");
    continue;
  } else if (i % 5 === 0) {
    console.log("Buzz");
    continue;
  }
  console.log(i);
}

let userContainer = document.getElementById("userContainer");
for (let i = 1; i <= 10; i++) {
  userContainer.innerHTML += `<div id="user_${i}">
        <h4>Name: User ${i}</h4>
        <p>Email: user${i}@gmail.com</p>
      </div>`;
}

const userTwo = document.getElementById("user_2");
// console.log(userTwo);
userTwo.style.backgroundColor = "red";
userTwo.style.color = "#FFF";

// Two dimensional loops
// for (let i = 0; i <= 10; i++) {
//   console.log("The value of i is " + i);
//   for (let j = 0; j <= 10; j++) {
//     console.log("Hmm, the value of j is " + j);
//   }
// }

// Build a multiplication table using nested for loop
for (let m = 2; m < 13; m++) {
  console.log(`Table ${m}`);
  for (let n = 1; n < 13; n++) {
    console.log(`${m} * ${n} = ${m * n}`);
  }
}
