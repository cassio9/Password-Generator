const characters = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const Number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const Symbols = [ "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];

let passOneEl = document.getElementById("generate-el-one");
let passTwoEl = document.getElementById("generate-el-two");
let hasPassword = false;
let includeNumbers = true;
let includeSymbols = true;

function generatePass() {
  //Reset values
  hasPassword = true;
  passOneEl.textContent = "";
  passTwoEl.textContent = "";
  let firstPass = "";
  let secondPass = "";
  //Let user choose password length between 0 and 15 characters.
  let passLength = document.getElementById("pass-length").value;
  if (passLength === "" || passLength > 15) {
    passLength = 15;
  }

  //generating password
  for (let i = 0; i < passLength; i++) {
      const random1 = Math.floor(Math.random() * changingPass().length);
      const random2 = Math.floor(Math.random() * changingPass().length);
      firstPass += changingPass()[random1];
      secondPass += changingPass()[random2];
  }
  passOneEl.textContent = firstPass;
  passTwoEl.textContent = secondPass;
}

function copy(item) {
  let tooltip = item.parentNode.children[0];
  if (hasPassword) {
    navigator.clipboard.writeText(item.innerText);
    tooltip.style.visibility = "visible";
    tooltip.innerText = "Copied!";
    setTimeout(() => {
      tooltip.style.visibility = "hidden";
      tooltip.innerText = "Copy to clipboard";
    }, 1000); 
  } else {
    item.textContent = "Click Generate Password!";
    tooltip.style.visibility = "hidden";
  }
}


function changingPass() {
  let PasswordSort;

  //changing password according to user`s selection.
  if(includeNumbers && !includeSymbols){
    PasswordSort = characters.concat(Number);
  } else if(!includeNumbers && includeSymbols){
    PasswordSort = characters.concat(Symbols);
  } else if (includeNumbers && includeSymbols){
    PasswordSort = characters.concat(Number, Symbols);
  } else {
    PasswordSort = characters;
  }
    return PasswordSort
} 


function removingNumberOrSymbols(value) {
  let numberEl = document.querySelector("#numbers");
  let symbolEl = document.querySelector("#symbols");

  if(value === 1 && includeNumbers){
    includeNumbers = false;
    numberEl.style.backgroundColor = "#273549"
    numberEl.style.color = "#4adf86"
    numberEl.textContent = "Numbers removed"
  } else if (value === 1 && !includeNumbers){
    includeNumbers = true;
    numberEl.style.backgroundColor = "#4adf86"
    numberEl.style.color = "#273549"
    numberEl.textContent = "Numbers Added"
  }
  if(value === 2 && includeSymbols){
    includeSymbols = false;
    symbolEl.style.backgroundColor = "#273549"
    symbolEl.style.color = "#4adf86"
    symbolEl.textContent = "Symbols removed"
  } else if (value === 2 && !includeSymbols){
    includeSymbols = true;
    symbolEl.style.backgroundColor = "#4adf86"
    symbolEl.style.color = "#273549"
    symbolEl.textContent = "Symbols Added"
  }
}