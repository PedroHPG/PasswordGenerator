const prompt = require('prompt-sync')();

//Asks user for desired length
let length = prompt("How many characters should your password be? Recommended: 8 or more. Enter number here: ");

//Ask user if they want lowercase, uppercase, numbers and/or special characters
let lowercase = prompt("Would you like to use lowercase letters? Enter 'n' for no, anything else for yes. Enter here: ")
let uppercase = prompt("Would you like to use uppercase letters? Enter 'n' for no, anything else for yes. Enter here: ")
let numbers = prompt("Would you like to use numbers? Enter 'n' for no, anything else for yes. Enter here: ")
let special = prompt("Would you like to use special characters? Enter 'n' for no, anything else for yes. Enter here: ")

//Prepare character sets and create password variable

//Loop for desired length

//Generate secure random value and add to password

//return generated password
