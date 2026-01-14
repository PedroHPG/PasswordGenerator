const prompt = require('prompt-sync')();
const lowerCharSet = "abcdefghijklmnopqrstuvwxyz";
const upperCharSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numCharSet = "1234567890";
const specialCharSet = "!@#$%^&*()_+=-";

//Asks user for desired length
let length = prompt("How many characters should your password be? Recommended: 8 or more. Enter number here: ");

//Ask user if they want lowercase, uppercase, numbers and/or special characters
let lowercase = prompt("Would you like to use lowercase letters? Enter 'n' for no, anything else for yes. Enter here: ")
let uppercase = prompt("Would you like to use uppercase letters? Enter 'n' for no, anything else for yes. Enter here: ")
let numbers = prompt("Would you like to use numbers? Enter 'n' for no, anything else for yes. Enter here: ")
let special = prompt("Would you like to use special characters? Enter 'n' for no, anything else for yes. Enter here: ")

//Prepare character sets and create password variable
let passwordCharSet = "";
if (lowercase != 'n'){
    passwordCharSet = passwordCharSet.concat(lowerCharSet);
}
if (uppercase != 'n'){
    passwordCharSet = passwordCharSet.concat(upperCharSet);
}
if (numbers != 'n'){
    passwordCharSet = passwordCharSet.concat(numCharSet);
}
if (special != 'n'){
    passwordCharSet = passwordCharSet.concat(specialCharSet);
}
console.log(`Possible characters for your password were: ${passwordCharSet}`);

let password = "";
let nextChar = "";
let randNum = 0;
//Loop for desired length
for(let i = 0; i < length; i++){
    //Generate secure random value and add to password
    randNum = Math.floor(Math.random() * (passwordCharSet.length - 0));
    nextChar = passwordCharSet.charAt(randNum);
    console.log(nextChar);
    password = password.concat(nextChar);
}

//return generated password
console.log(`Your new password is: ${password}. Keep it somewhere safe!`);

//TODO USE MORE SECURE RANDOMNESS