console.log("Welcome to Dates in JavaScript");
const myDate = new Date();
console.log(myDate);

const myLastBirthday = new Date("2024-02-29");
console.log(myLastBirthday);

const sampleDate = new Date(2022, 11);
console.log(sampleDate);

const dateInMilliseconds = new Date(638734898890);
console.log(dateInMilliseconds);

// If just 2 digits is provider for the year, it takes it as 19(the 2 digits)
const myGrandfatherBirthday = new Date(23, 8);
console.log(myGrandfatherBirthday);
/*
There are 9 ways to create a new date object:=
new Date()
new Date(date string)

new Date(year,month)
new Date(year,month,day)
new Date(year,month,day,hours)
new Date(year,month,day,hours,minutes)
new Date(year,month,day,hours,minutes,seconds)
new Date(year,month,day,hours,minutes,seconds,ms)

new Date(milliseconds)
*/

// Date methods
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
const date = new Date();
console.log(date);

// toString method
console.log(date.toString());

// toDateString method
console.log("To Date Strings: ", date.toDateString());

// toUTCString method
console.log("To UTC String: ", date.toUTCString());

// toISOString method
console.log("To ISO String: ", date.toISOString());

// Date Get methods
// getFullYear
console.log("The year: ", date.getFullYear());

// getMonth
console.log("The month: ", date.getMonth());

// getDate
console.log("The date: ", date.getDate());

// getDay
console.log("The day: ", date.getDay());

// getTime
console.log("The time: ", date.getTime());
