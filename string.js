let myName = "Bolarinwa";
console.log(`The length of "${myName}" is ${myName.length}`);

// CharAt
console.log(myName.charAt(0));
console.log(myName.charAt(3));
console.log(myName.charAt(5));
console.log(myName.charAt(8));

// CharCodeAt
// console.log(myName.charCodeAt(0));
let myString = "AaBbCc";
console.log(myString.charCodeAt(0));
console.log(myString.charCodeAt(1));
console.log(myString.charCodeAt(2));
console.log(myString.charCodeAt(3));
console.log(myString.charCodeAt(4));
console.log(myString.charCodeAt(5));

// []
console.log(myName[0]);
console.log(myName[8]);

// Slice
console.log(myName.slice(0, 4)); // Bola

// Substring
console.log(myName.substring(0, 4)); // Bola

// Substr
console.log(myName.substr(0, 4)); // Bola // deprecated

// Lower case
console.log(myName.toLowerCase());

// Upper case
console.log(myName.toUpperCase());

// concat
let firstname = "Agba";
let lastname = "Dev";
// let fullname = firstname + " " + lastname;
let fullname = firstname.concat(" ", lastname, " Forever");
console.log(fullname);

// Trim
let mySentence = "    Hello I am a software developer";
console.log(mySentence);
console.log(mySentence.trim());

// Replace
let sentence =
  "Bola is a bad man that likes good girls , And he is a baddass programmer";
let newSentence = sentence.replace("bad", "good");
console.log(sentence);
console.log(newSentence);

// Split
let sentenceArray = sentence.split(" ");
console.log(sentenceArray);
