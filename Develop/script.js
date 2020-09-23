// Assignment Code
var generateBtn = document.querySelector("#generate");
//make array with symbols, one with numbers, one with uppercase, one with lower case
var charBank = []
var symb = [" ", "!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}"]
var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var lc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

//prompts for selection criteria
function generatePassword() {
  var passwordLength= prompt("How many ch aracters would you like your password to be?");
    if (passwordLength > 7 && passwordLength < 126) {
      alert ("test")
    }
    else {
      alert ("please select a number from 8-125");
    }
  var speChar= confirm("Would you like special characters in your password?");
    if (speChar === true) {
      alert("test yes")
    }
    else {
      alert ("test no");
    }
  var lwr= confirm("Would you like lower case letters in your password?");
    if(lwr === true) {
      alert("test yes")
    }
    else {
      alert("test no)");
    }
  var upr= confirm("Would you like upper case letters in your password?");
    if (upr === true) {
      alert ("test yes");
    }
    else {
      alert ("test no");
    }
  var nmbr= confirm("Would you like numbers in your password?")
    if (nmbr === true) {
      alert ("test yes");
    }
    else {
      alert("test no");
    }

}




//create number generator that selects randomly from 4 arrays based on selection criteria ???


// Write password to the #password input`s
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword,);

