// Select Element
const passwordBox = document.querySelector("#password");
const generatePasswordBtn = document.querySelector("#generate-password");
const copyButton = document.querySelector("#copy-icon");
const copyText = document.querySelector(".copy-text");

const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~|{}[]<>/-=";
const allChars = upperCase + lowerCase + number + symbol;

// Generate Random Password
const generatePassword = () => {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = password;
};

//Copy Password to click copy button
const copyPassword = () => {
  //   passwordBox.select();
  //   document.execCommand("copy");
  navigator.clipboard.writeText(passwordBox.value);
  alert("Password Copied!");
};

//Generate Password
generatePasswordBtn.addEventListener("click", generatePassword);

//Copy Password
copyButton.addEventListener("click", copyPassword);
