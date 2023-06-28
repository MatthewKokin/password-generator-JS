const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];

const generateBtn = document.getElementById("generate-btn");
const firstPassword = document.getElementById("first");
const secondPassword = document.getElementById("second");
const inputLength = document.getElementById("input-field");

generateBtn.addEventListener("click", function () {
  const length = parseInt(inputLength.value);
  firstPassword.textContent = generatePassword(length);
  secondPassword.textContent = generatePassword(length);
});

function getRandomCharacter() {
  const randomIndex = Math.floor(Math.random() * characters.length);
  return characters[randomIndex];
}

function generatePassword(length) {
  const passwordCharacters = [];
  for (let i = 0; i < length; i++) {
    const character = getRandomCharacter();
    passwordCharacters.push(character);
  }
  const password = passwordCharacters.join("");
  return password;
}

// Generate an initial password on page load
inputLength.value = 8;
firstPassword.textContent = generatePassword(8);
secondPassword.textContent = generatePassword(8);
