// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
       passwordText.value = password;

}


//make values for the prompts and then assign those values to an Object. Use every proprety of it to let the fucntion whioch one of the character you want to use.
// Use true of false since they are prompt boxes. https://www.w3schools.com/js/js_if_else.asp

function generatePassword(){
  var txt;
  var number = prompt("Please Enter a number between 8-128 Characters:", "8");
  if (number == null || number == "") {
    txt = "User cancelled the prompt.";
  } else {
    (confirm("Click Ok for lower Characters"));
    
  }
    
  }


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// character sets
var charsLower = "abcdefghijklmnopqrstuvwxyz"
var charsUpper = charsLower.toUpperCase()
var charsNumbers = "012345679"
var charsSpecial = "!@#$%^&*()_+"
// TODO from user prompt
var userLength = 8
// TODO userLower/userUpper/userNums/userSpecial from confirm boxes.
var userLower = userUpper = userNums = userSpecial = true
// build the random picker string based on user prompts
var charSet =( userLower ? charsLower : '' )
            +( userUpper ? charsUpper : '' )
            +( userNums  ? charsNumbers : '' )
            +( userSpecial ? charsSpecial : '' )
// generate the string
var password = ""
for( var i=0; i<userLength; i++ ){
    var charPick = Math.floor(Math.random()*charSet.length)
    password += charSet[charPick]
}
// now plug this into the DOM
document.querySelector(".answer").value = password