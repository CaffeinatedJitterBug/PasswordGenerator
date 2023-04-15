// Assignment Code
var generateBtn = document.querySelector("#generate");
let passwordChar = ['6', '7'];

// Gather user input and generate a password within the constraints of the user input
function generatePassword () {
  const passwordLength = prompt("How long do you want your new password to be? (8 to 128)");
  const lowerCase = prompt("Would you like your new password to contain lowercase letters? y/n");
  const upperCase = prompt("Would you like your new password to contain uppercase letters? y/n");
  const numeric = prompt("Would you like your new password to contain numbers? y/n");
  const specialChar = prompt("Would you like your new password to contain special characters, such as @, #, %, etc? y/n");

  const characters = {
    letters: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    numbers: Math.floor(Math.random() * 9),
    special: ["!", "\"", "#", "$", "%", "&", "\'", "()", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"],
  }
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
