//Sign up - receive data from html put in
/*
function getInfo() {
    var firstName = document.getElementsByName("firstName").value;
    var surName = document.getElementsByName("surName").value;
    var userName = document.getElementsByName("userName").value;
    var email = document.getElementsByName("email").value;
    var password = document.getElementsByName("password").value;
}
*/
//Sign up - Form validation
//If a form field (name) is empty, this function alerts a message, and returns false, to prevent the form from being submitted


function validateSignUp() {
    /*
  //reference to fields
      var firstName = document.getElementById("firstName");
      var surName = document.getElementById("surName");
      var userName = document.getElementById("userName");
      var email = document.getElementById("email");
      var password = document.getElementById("password");
  //check empty form fields
      if (firstName.value === "") {
          alert("Please fill in your first name");
          return false;
      }
      if (surName.value === "") {
          alert("Please fill in your Surname");
          return false;
      }
      if (userName.value === "") {
          alert("Please fill in your Username");
          return false;
      }
      if (email.value === "") {
          alert("Please fill in your email");
          return false;
      }
      if (password.value === "") {
          alert("Please choose and fill in a password");
          return false;
      }
  */
    //check each input in the order that it appears in form
    if (inputAlphabet(firstName) && lengthDefine(firstName, 6, 10)) {
        if (inputAlphabet(surName) && lengthDefine(surName, 6, 10)) {
            if (textAlphanumeric(userName)) {
                if (emailValidation(email)) {
                    if (inputAlphabet(password) && lengthDefine(password, 6, 10)) {
                        return true;
                    }
                }
            }
        }
    }
    return false;
*/
}

//function that checks whether input text is an alphabetic or not

// function that checks whether input text is an alphabetic character or not
function inputAlphabet(inputtext) {
    var alphaExp = /^[a-zA-Z]+$/;
    if (inputtext.value.match(alphaExp)) {
        return true;
    } else {
        alert("Please use alphabets only");
        return false;
    }
}

//function that checks whether input text includes alphabetic and numeric characters.
function textAlphanumeric(inputtext) {
    var alphaExp = /^[0-9a-zA-Z]+$/;
    if (inputtext.value.match(alphaExp)) {
        return true;
    } else {
        alert("Minimum 6 and maximum 10 characters");
        return false;
    }
}

// Function that checks whether the input characters are restricted according to defined by user.

function lengthDefine(inputtext, min, max) {
    var uInput = inputtext.value;
    if (uInput.length >= min && uInput.length <= max) {
        return true;
    } else {
        alert("Minimum 6 and maximum 10 characters");
        return false;
    }
}

// Function that checks whether an user entered valid email address or not and displays alert message on wrong email address format.

function emailValidation(inputtext) {
    var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
    if (inputtext.value.match(emailExp)) {
        return true;
    } else {
        alert("Please enter a valid email address");
        return false;
    }
}