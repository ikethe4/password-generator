// Assignment Code
var generateBtn = document.querySelector("#generate");
//make array with symbols, one with numbers, one with uppercase, one with lower case
var charBank = []
// var symb = [" ", "!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}"]
// var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
// var lc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
// var uc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

//prompts for selection criteria
function generatePassword() { //password length prompt

  isValid = false

  do { //run function repeatedly until a valid input is registered (a number between 8 and 128)
  var passwordLength = prompt("How many characters would you like your password to be?");
    if (passwordLength > 7 && passwordLength < 129) {
      isValid = true
    }
    else {
      alert ("please select a number from 8-125");
    }
  } 
    while (!isValid);


    var speChar= confirm("Would you like special characters in your password?");
      if (speChar == true) {//if click "ok," push speChar to array
        charBank.push(" ", "!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}");
        console.log(charBank);
      }
      else {
        alert ("Password will not contain special characters");
      }
    
    var lwr= confirm("Would you like lower case letters in your password?");
      if(lwr === true) {//if click "ok," push lwr to array
        charBank.push("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
        console.log(charBank);
      }
      else {
        alert("Password will not contail lower case letters");
      }
    var upr= confirm("Would you like upper case letters in your password?");
      if (upr === true) {   //if click "ok," push upr to array
        charBank.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
        console.log(charBank);
      }
      else {
        alert ("Password will not contain upper case letters");
      }
    var nmbr = confirm("Would you like numbers in your password?")
      if (nmbr === true) { //if click "ok," push nmbr to array
        charBank.push("0", "1", "2", "3", "4", "5", "6", "7", "8", "9")
      }
      else {
        alert("Password will not contain numbers");
      }
      //if no characters chosen, function is rerun after an alert is sent
      if (speChar === false && lwr === false && upr === false && nmbr === false) {
        alert ("Password must contain at least one type of character");
        generatePassword();}

      
 var pass = "";

    //create number generator that selects randomly from array based on selection criteria
    for (var i = 0; i < passwordLength; i++) {
      pass = pass + charBank[Math.floor(Math.random() * charBank.length)];
    }

    //password displayed on screen
    return pass;
}







// Write password to the #password input`s
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword,);

