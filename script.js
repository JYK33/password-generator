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

// Alphabet, Numbers, Special Characters
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowercase = uppercase.map((letter) => letter.toLowerCase());
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", "|", ";", ":", "'", ",", ".", "<", ">", "/", "?", "~", "`"] 

// Generates a random number within the variables to choose which value will be picked

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// Funtions to generate password

function generatePassword() {
  // 1) Length of the password
  var passwordLength = prompt(
    "How many characters would you like to use? (between 8-128)","12"
    )
    // return to first question if user dosnt pick a number between 8-128
    if (passwordLength <= 7 || passwordLength >= 129) {
      alert ("Please choose from 8-12 characters!")
      return generatePassword()
    }
    // 2) Use of uppercase letters
    var useUppercase = confirm(
      "Would you like to use uppercase letters?"
      )
      
      //3) Use of lowercase letters
      var useLowercase = confirm(
        "Would you like to use lowercase letters?"
        )
        
        //4) Use of numbers
        var useNumbers = confirm(
    "Would you like to use numbers?"
    )
    
  // 5) Use of special characters
  var useSpecialChars = confirm(
    "would you like to use special characters?"
    )
    
    // If all confrims are false, this function wil restart the process
  if (useLowercase === false && useUppercase === false && useNumbers === false && useSpecialChars === false){
    alert( "Please choose at lease 1 character type!" )
    return generatePassword()
  }

  // This section will generate the potential password using the variables 
  
  var potentialChars = []
  
//adds the uppercase letters to the potential password
if (useUppercase) {
  potentialChars = potentialChars.concat(uppercase);
}

if (useLowercase) {
  potentialChars = potentialChars.concat(lowercase);
}

if (useNumbers) {
  potentialChars = potentialChars.concat(numbers);
}

if (useSpecialChars) {
  potentialChars = potentialChars.concat(special);
}

// creates the lenght of the password 

var password = ""
for (var i = 0; i <passwordLength; i++) {
  password = password + potentialChars[getRandomInt(potentialChars.length)]
}

return password 
}
