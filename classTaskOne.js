console.log("Our Class Task");

/*
Question 1: Password Validator
Write a function called validatePassword that takes a string as input and checks if it is a valid password based on the following criteria:

Must be at least 8 characters long.
Must contain at least one uppercase letter, one lowercase letter, and one number.
Must not contain any spaces.
If the password is valid, the function should return "Password is valid.", otherwise return "Password is not valid.".


*/

// Solution
// test 1234
const validatePassword = (password) => {
  // Check if the length is greater than or equals to 8
  if (password.length < 8) {
    return "Password should be 8 charcters or more";
  }
  // Check for uppercase lowercase and number withour regex
  let upperCase = false;
  let lowerCase = false;
  let number = false;
  let space = false;
  // onverting the string password into an array of individual characters by splitting
  let passwordArray = password.split("");
  // Looping over each letter one by one
  passwordArray.forEach((char) => {
    if (char === " ") {
      space = true;
    }
    // Checking for upperase and lowercase in non number letters
    if (isNaN(char)) {
      // B === B
      if (char === char.toUpperCase()) {
        upperCase = true;
      }
      //  a === a
      if (char === char.toLowerCase()) {
        lowerCase = true;
      }
    }
    // To check if the char is a  number
    if (!isNaN(char)) {
      number = true;
    }
  });

  if (space) {
    return "Password should not contain spaces";
  }

  if (!upperCase || !lowerCase || !number) {
    return "Password should contain at least one uppercase, one lowercase and one number";
  }

  return "Password is valid";
};

let passwordOne = "bola1234";
let passwordTwo = "Bola 1234"; // pass
let passwordThree = "bola"; // pass
let passwordFour = "Bola1234"; //pass

console.log(passwordOne);
console.log(validatePassword(passwordOne));
console.log(passwordTwo);
console.log(validatePassword(passwordTwo));
console.log(passwordThree);
console.log(validatePassword(passwordThree));
console.log(passwordFour);
console.log(validatePassword(passwordFour));

// Question 2
/*
Question 2: Number Guessing Game
Write a function called numberGuessingGame that:

Generates a random number between 1 and 100 (inclusive).
Prompts the user to guess the number.
Checks if the guess is correct:
If the guess is too low, display "Too low! Try again."
If the guess is too high, display "Too high! Try again."
If the guess is correct, display "Congratulations! You guessed the number in X attempts!" where X is the number of attempts taken.
The function should continue to prompt the user until they guess the correct number.
*/

// Solution
function numberGuessingGame() {
  let randomNumber = Math.ceil(Math.random() * 100);
  console.log(randomNumber);
  let userInput = prompt("Enter a number: ");
  let numberOfAttempts = 1;
  let guessCorrect = false;
  while (guessCorrect !== true) {
    if (Number(userInput) < randomNumber) {
      alert("Too low! Try again.");
      numberOfAttempts += 1;
      userInput = prompt("Enter another number");
    } else if (Number(userInput) > randomNumber) {
      alert("Too high! Try again.");
      numberOfAttempts += 1;
      userInput = prompt("Enter another number");
    } else {
      alert(
        `Congratulations! You guessed the number in ${numberOfAttempts} attempts!`
      );
      guessCorrect = true;
    }
  }
}

// numberGuessingGame();

// Assignment
/*
    Question 4: Palindrome Checker
Write a function named findPalindromes that takes an array of strings and returns a new array containing only the palindromes from the original array. A palindrome is a word that reads the same backward as forward.

Example:
findPalindromes(["madam", "apple", "racecar", "hello", "civic"]);
// Output: ["madam", "racecar", "civic"]
*/

const findPalindromes = (words) => {
  console.log(words);
  let result = [];
  words.forEach((word) => {
    let reversedWord = "";
    reversedWord = word.split("").reverse().join("");
    if (reversedWord === word) {
      result.push(word);
    }
  });
  return result;
};

const findPalindromesTwo = (words) => {
  return words.filter((word) => word.split("").reverse().join("") === word);
};

console.log(findPalindromes(["madam", "apple", "racecar", "hello", "civic"]));
console.log(
  findPalindromesTwo(["madam", "apple", "racecar", "hello", "civic"])
);

// ["a", "p", "p", "l", "e"]; //split
// ["e", "l", "p", "p", "a"]; //reverse
// elppa; //join

// Assignments
// Anagram Finder

// Write a function named findAnagrams that takes an array of strings and returns a new array containing only the anagrams of a given word from the original array. An anagram is a word that can be formed by rearranging the letters of another word.

// Example:

// javascript
// Copy code
// findAnagrams(["listen", "enlist", "google", "inlets", "banana"], "silent");
// // Output: ["listen", "enlist", "inlets"]

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Word Guessing Game
// Question 8: Word Guessing Game

// Write a function named wordGuessingGame that:

// Selects a random word from an array of words.
// Prompts the user to guess the word by entering one letter at a time.
// Displays the current progress of the word with guessed letters revealed and unguessed letters represented by underscores.
// Keeps track of the number of attempts the user has made.
// Ends the game when the user correctly guesses the entire word or runs out of attempts (e.g., 10 attempts).
// The function should display appropriate messages such as "Correct guess!" or "Incorrect guess. Try again." and, upon completion, display "Congratulations! You guessed the word!" or "Sorry, you've run out of attempts."
