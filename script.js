// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




// Declaration of alphabet, numbers, and special characters 
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var numbers = [0,1,2,3,4,5,6,7,8,9]
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", "|", ";", ":", "'", ",", ".", "<", ">", "/", "?", "~", "`"]

function getRandomInt(max) {
  return Math.cell(Math.random() * max)
}

// funtions to generate password 
    // use 'confrim' for boolean (t or f) options 
    // use 'prompt' becuase user needs to write in how long they want the password to be  
function generatePassword() {
// 1) How man characters should the password be? Must be between 8-128
var passwordLength = prompt('How many characters would you like your password to be? (8-128)','12')
// 2) Use uppercase?
var useUppercase = confirm('Would you like to include uppercase letters?')
// 3) Use lowercase?
var useLowercase = confirm('Would you like to include lowercase letters?')
// 4) Use numbers?
var useNumber = confirm('Would you like to include numbers?')
// 5) Use special chars?
var useSpecialChars = confirm('would you like to use special characters?')


// Creating the structure of potential characters

var potentialChars = []

if (useUpperCase) {
  potentialChars = potentialChars.concat(uppercase)
}

if (useLowercase) {
  potentialChars = potentialChars.concat(lowercase)
}

if (useNumbers) {
  potentialChars = potentialChars.concat(numbers)
}
if (useSpecialChars) {
  potentialChars = potentialChars.concat(special)
}








}