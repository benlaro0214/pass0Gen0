// Assignment Code
var generateBtn = document.querySelector("#generate");
// Set our global vars - Set user choices to false first. That way the user's choice can be set to true as defined.
var userOptions = {
    ExSpeChars: false,
    ExNumChar: false,
    ExUpperChars: false,
    ExLowerChars: false,
  };
// Write password to the #password input
function start() {
   var password = generatePassword();
   var passwordText = document.querySelector("#password");
   passwordText.value = password;
}
//return a string
function generatePassword() {
 
  //Creating arrays from spreads.
   var specialCharacters = Array.from ("!@#$%^&*()_+")
   var numericCharacters = Array.from ("0123456789")
   var lowerCasedCharacters = Array.from ("abcdefghijklmnopqrstuvwxyz")
   var upperCasedCharacters = Array.from ("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
   var userOptionalChars = [];
   var passwordLength = parseInt(prompt("How many characters would you like your passsword to contain? It should be longer than 8 and shorter than 128!"));
   
   // ======= functions definition (user picks and chooses the lenght, the type of characters to use prior to the generation of the password.) ======
   
   // determine the lenght of the requested password
   function getUserOptions() {
      if (passwordLength < 8 || passwordLength > 128){
        alert("Please put in a length that is longer than 8 and shorter than 128!");
       getUserOptions();
      } else if (8 < passwordLength < 128){
  
  // The following are the user options that will me set to true (from an earlier section where the global vars were set as false) 
  
        var lowerConfirm = confirm("Do you want it to contain lower case characters?");
      if (lowerConfirm){
      userOptions.ExLowerChars = true;
      }
      var upperConfirm = confirm("Do you want it to contain upper case characters?");
      if (upperConfirm){
      userOptions.ExUpperChars = true;
      }
      var specialConfirm = confirm("Do you want it to contain special case characters?");
      if (specialConfirm){
      userOptions.ExSpeChars = true;
      }
      var numericConfirm = confirm("Do you want it to contain numbers?");
      if (numericConfirm){
      userOptions.ExNumChar = true;
      }

      if (lowerConfirm == true || upperConfirm == true || specialConfirm == true || numericConfirm == true){
          alert("Great! You have selected one or more of the prompts to create your password!");
      }
      else {
          alert("Select one of the choices to generate your password!");
          getUserOptions();
            }
        }
    }

    //This part is where the user arrays are being concated into a loop.
    function generatePassword(userOptions) {
      var password = [];
      var optionsArray = [];
      var solved = '';
      if (userOptions.ExLowerChars == true){
        userOptionalChars.push(lowerCasedCharacters);
      }
      if (userOptions.ExUpperChars == true){
        userOptionalChars.push(upperCasedCharacters);
      }
      if (userOptions.ExSpeChars == true){
        userOptionalChars.push(specialCharacters);
      }
      if (userOptions.ExNumChar == true){
        userOptionalChars.push(numericCharacters);
      }
     
      for (var h = 0; h < userOptionalChars.length; h++){
        optionsArray = optionsArray.concat(userOptionalChars[h]);
      }
// This, is where the results from the array get processed through some
      var length = optionsArray.length;
      for (var i = 0; i < passwordLength; i++){
          password.push(optionsArray[Math.floor(Math.random() * length) + 1 ]);
      }
      for (var x = 0; x < password.length; x++){
        solved += password[x];
      }
      password = solved;
      return password;
    }
   getUserOptions();
   return generatePassword(userOptions)
}
generateBtn.addEventListener("click", start);
