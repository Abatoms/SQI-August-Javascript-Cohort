console.log("Welcome to conditionals");
// Conditionals
// Simple If Statements
// If Else Statements
// Compound If Statements
// Nested If Statements
// Switch Statements

// Simple If Statements
let age = 8;
if (age >= 10) {
  console.log("You age is greater than or equals to 10");
}

// If Else Statements
let votingAge = 18;
if (age >= votingAge) {
  console.log("You are eligible to votee");
} else {
  console.log("You are not eligible to votee");
}

// Compound If Statements
let score = prompt("Enter your score: ");
let grade = "";

if (score >= 80 && score <= 100) {
  grade = "A";
} else if (score >= 60 && score <= 79) {
  grade = "B";
} else if (score >= 50 && score <= 59) {
  grade = "C";
} else if (score >= 45 && score <= 49) {
  grade = "D";
} else if (score >= 40 && score <= 44) {
  grade = "E";
} else if (score >= 0 && score <= 39) {
  grade = "F";
} else {
  grade = "Invalid score";
}

// console.log("Your score is " + score + " and your grade is " + grade);

// Nested If Statements
let jambScore = 120;
let postJambScore = 86;

if (jambScore > 200) {
  // Nesting the if statement for federal or state Universities
  if (postJambScore > 50 && postJambScore < 100) {
    console.log("You are going to a federal university");
  } else if (postJambScore > 0 && postJambScore < 50) {
    console.log("You are going to a state university");
  } else {
    console.log("Invlid post jamb score");
  }
} else if (jambScore > 140 && jambScore <= 200) {
  // Nesting the if statement for federal or state Polytechnic
  if (postJambScore > 50 && postJambScore < 100) {
    console.log("You are going to a federal polytechnic");
  } else if (postJambScore > 0 && postJambScore < 50) {
    console.log("You are going to a state polytechnic");
  } else {
    console.log("Invlid post jamb score");
  }
} else if (jambScore > 100 && jambScore < 140) {
  // Nesting the if statement for federal or state College of education
  if (postJambScore > 50 && postJambScore < 100) {
    console.log("You are going to a federal college of education");
  } else if (postJambScore > 0 && postJambScore < 50) {
    console.log("You are going to a state college of education");
  } else {
    console.log("Invlid post jamb score");
  }
} else {
  console.log("Omoo, go back home and try next year!!!");
}

// You are building an hostel management system and you have been given the following information to work with

// A student is allowed to registerd for hostel if they have completed their admission regsistration. If they haven't they should be asked to go complete their admission registration.
// After the student has registered for hostel, we then check if they have paid for the hostel. If they haven't they should be asked to go pay for the hostel. If they have, we tell send them a congratulatory message
