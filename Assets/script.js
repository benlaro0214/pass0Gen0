// Assignment Code
var generateBtn = document.querySelector("#generate");

// from the idea file
//var userOptions = {
  //expectSpecialChars: false,
  //expectNumericChars: false,
  //expectUppercaseChars: false,
  //expectLowercaseChars: false,}

function generatePassword(){
  var password = "";
  var number = parseInt(prompt("Please Enter a number between 8-128 Characters:"));
  if (number == null || number == "") { 
  generatePassword()
  } else {
  var question1 = confirm ("Click Ok for lower Characters");
  var question2 = confirm ("Click Ok for Upper Case Characters");
  var question3 = confirm ("Click Ok for Numbers Characters");
  var question4 = confirm ("Click Ok for Special Characters");
  
  for( var i=0; i<number; i++ ){
    var charPick = Math.floor(Math.random()*charsLower.length)
    password += charsLower[charPick]
 
  }
  return password
    
 


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


// character sets
var charsLower = Array.from ("abcdefghijklmnopqrstuvwxyz") 
var chars = "abcdefghijklmnopqrstuvwxyz"
var charsUpper = Array.from (chars.toUpperCase())
var charsNumbers = Array.from ("012345679")
var charsSpecial = Array.from ("!@#$%^&*()_+")






