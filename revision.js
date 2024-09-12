console.log("Welcome to the first revision");

function sayGreetings() {
  console.log("Welcome sirrrrrr!!!!");
  console.log(2 * 2 + 3 - 10 / 5);
}

// Invoking a function
sayGreetings();

// Functions with parameters
//name is a parameter here
function greetSomebody(name) {
  console.log(`Welcome ${name}`);
}

greetSomebody("Bolarinwa"); //Bolarinwa is an argument
greetSomebody("Tolulope"); //Tolulope is an argument

function calculateSum(numbOne, numbTwo) {
  console.log(`The sum of ${numbOne} and ${numbTwo} is ${numbOne + numbTwo}`);
}

calculateSum(3, 5);
calculateSum(30, 15);

function calculateSumAgain(numbOne, numbTwo) {
  return numbOne + numbTwo;
}

console.log("Sum is ", calculateSumAgain(10, 12));
console.log("The hehe Sum is ", calculateSumAgain(17, 12));

// default value
function calculateWeight(mass, g = 9.8) {
  return mass * g;
}

console.log("My weight is: ", calculateWeight(20)); // uses the default value for g (9.8)
console.log("My weight is: ", calculateWeight(20, 10)); // uses 10 as the value for g

// Rest parameter
function myStudents(personOne, personTwo, ...rest) {
  console.log(personOne);
  console.log(personTwo);
  console.log(rest);
}

myStudents("Class Captain", "Dara", "Ibramhim", "Mayode Sleeping");

// Arrow functions
const sayTheBestClubInTheWorld = (clubName) => {
  return clubName + " is the best club in the world";
};

console.log(sayTheBestClubInTheWorld("Barca"));
console.log(sayTheBestClubInTheWorld("Barcelona"));
console.log(sayTheBestClubInTheWorld("Forca Barca"));
console.log(sayTheBestClubInTheWorld("FCB Barca"));

// Function expression
const bestClub = function bestClubFunction() {
  console.log("yuauyyyy");
};

bestClub();

// Arrays
let persons = [
  "Bolarinwa",
  "Tolulope",
  "Ayomide",
  "Olufunsho",
  "Ayangbade",
  "Agbabiaka",
];

personsContainer = document.getElementById("userContainer");
// for (let i = 0; i < persons.length; i++) {
//   console.log(persons[i]);
//   personsContainer.innerHTML += `<p>${persons[i]}</p>`;
// }

for (person of persons) {
  personsContainer.innerHTML += `<p style="color: red;">${person}</p>`;
}

// Multidiemnsional

const numberStuffs = [
  [1, 2, 3, 4, 5], // 0
  [2, 4, 6, 8, 10], // 1
  [1, 3, 5, 7, 9],
  [2, 3, 5, 7, 11],
];

console.log(numberStuffs[0][2]);

for (let i = 0; i < numberStuffs.length; i++) {
  console.log(numberStuffs[i]);
  for (let j = 0; j < numberStuffs[i].length; j++) {
    console.log(numberStuffs[i][j]);
  }
}
