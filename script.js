// Assignment Code
var generateBtn = document.querySelector("#generate");

// Gather user input and generate a password within the constraints of the user input
function generatePassword () {
  const passwordLength = prompt("How long do you want your new password to be? (8 to 128)");
  const lowerCase = prompt("Would you like your new password to contain lowercase letters? y/n");
  const upperCase = prompt("Would you like your new password to contain uppercase letters? y/n");
  const numeric = prompt("Would you like your new password to contain numbers? y/n");
  const specialChar = prompt("Would you like your new password to contain special characters, such as @, #, %, etc? y/n");

  const characters = {
    lower: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    upper: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    numbers: ["0", "1", "2", "3", "4", "5", "6","7", "8", "9"],
    special: ["\!", "\"", "\#", "\$", "\%", "\&", "\'", "\(", "\)", "\*", "\+", "\,", "\-", "\.", "\/", "\:", "\;", "\<", "\=", "\>", "\?", "\@", "\[", "\]", "\^", "\_", "\`", "\{", "\|", "\}", "\~"],
  }

  let passwordChar = [];

  for (x=0; x<passwordLength; x++) {
    const type = Math.floor(Math.random() * 3);
    if (lowerCase === 'y' && type === 0) {
      const random = Math.floor(Math.random() * 25);
      passwordChar.push(characters.lower[random]);
    } else if (upperCase === 'y' && type === 1) {
      const random = Math.floor(Math.random() * 25);
      passwordChar.push(characters.upper[random]);
    } else if (numeric === 'y' && type === 2) {
      const random = Math.floor(Math.random() * 9);
      passwordChar.push(characters.numbers[random]);
    } else if (specialChar === 'y' && type === 3) {
      const random = Math.floor(Math.random() * 30);
      passwordChar.push(characters.letters[random]);
    }
  }
  console.log(passwordChar);
  console.log(passwordChar.join(""));
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
