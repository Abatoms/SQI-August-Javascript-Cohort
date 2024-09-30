console.log("WIndows Object");

// console.log(window);

// Introduction to sesssion and local storage
// 1. Session storage

// Set item to session storage
sessionStorage.setItem("name", "Bolarinwa");

// Get item from session storage
const myName = sessionStorage.getItem("name");
console.log(myName);

sessionStorage.setItem("cars", ["Bentely", "Toyota", "Audi"]);
const myCars = sessionStorage.getItem("cars");
console.log(myCars);

// Remove an item from session storage
sessionStorage.removeItem("name");
const nameAgain = sessionStorage.getItem("name");
console.log(nameAgain);

sessionStorage.setItem("age", 12);
const age = sessionStorage.getItem("age");
console.log(age);

// Getting the length of the session storage
console.log(sessionStorage.length);

// Getting the keys using index in session storage
console.log(sessionStorage.key(0));

// Clearing your session storage
// sessionStorage.clear();

//  2. Local storage

// Set item to local storage
localStorage.setItem("cars", JSON.stringify(["Civic", "Corrolla", "Lexus"]));

// Get item from local storage
const cars = JSON.parse(localStorage.getItem("cars"));
console.log(cars);
console.log(cars[0]);

// Remove an item from local storage
localStorage.removeItem("students");

// Get the length of the local storage
console.log(localStorage.length);

const b = ["a", "b", "c"];
console.log(b);
console.log(typeof b);
