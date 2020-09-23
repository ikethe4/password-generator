// Assignment Code
var generateBtn = document.querySelector("#generate");
//make array with symbols, one with numbersone with uppercase, one with lower case
var symb [" !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}"]
var num ["0123456789"]
var lc ["abcdefghijklmnopqrstuvwxyz"]
var uc ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]

//prompts for selection criteria
var passwordLength= prompt("How many characters would you like your password to be?");
var speChar= confirm("Would you like special characters in your password?");
var lwr= confirm("Would you like lower case letters in your password?");
var uppr= confirm("Would you like upper case letters in your password?");
var nmbr= confirm("Would you like numbers in your password?")



//create number generator that selects randomly from 4 arrays based on selection criteria ???


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword,);

