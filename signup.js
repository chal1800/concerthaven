
//Sign up - Form validation

//If a form field (name) is empty, this function alerts a message, and returns false, to prevent the form from being submitted
function validateSignUp() {
  //reference to fields
      var firstName = document.getElementById("firstName");
      var surName = document.getElementById("surName");
      var userName = document.getElementById("userName");
      var email = document.getElementById("email");
      var password = document.getElementById("password");

    var inputFields = [firstName.value, surName.value, userName.value, email.value, password.value];
// check empty form fields

    for (var i = 0; i < 4; i++) {
        if (inputFields[i] === "") {
            console.log(inputFields[i]);
            alert("Please fill in all the fields");
            console.log(inputFields[i]);
            return false;
        }
    }

    //check each input in the order that it appears in form
    if (inputAlphabetfirstName(firstName, "* For your first name please use alphabets only *") && lengthDefineFirstName(firstName, 3, 10)) {
        if (inputAlphabetSurName(surName, "* For your surname please use alphabets only *") && lengthDefineSurName(surName, 6, 10)) {
            if (textAlphanumericUserName(userName, "* For your username please use alphabets and numbers only *")) {
                if (emailValidation(email, "* Please enter a valid email address *")) {
                    if (textAlphanumericPassword(password, "* Please use alphabets and numbers only *") && lengthDefinePassword(password, 6, 10)) {
                        functionPushStorage();
                        window.location = "loginpage.html";
                        return true;
                    }
                    }
                }
            }
        }
    return false;
}

// Create an array called users
users = [];
var users = JSON.parse(localStorage.getItem("users"));

// pushing new user into existing array users and storing it using localStorage
function functionPushStorage() {
    firstName = document.getElementById("firstName").value;
    surName = document.getElementById("surName").value;
    userName = document.getElementById("userName").value;
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    users.push(new User(firstName, surName, userName, email, password));
    console.log(users);
    localStorage.setItem('users', JSON.stringify(users));
    window.location = "index.html";
}

//redirect to login page as soon as user is registered
/*
function goToLogin () {
    if (validateSignUp() return true;)
    {
        window.location = "loginpage.html";
    }
}
*/
// function that checks whether input text is an alphabetic character or not
function inputAlphabetfirstName(inputtext, alertMsg) {
    var alphaExp = /^[a-zA-Z]+$/;
    if (inputtext.value.match(alphaExp)) {
        return true;
    } else {
        document.getElementById('p1').innerText = alertMsg;  //this segment displays the validation rule
        return false;
    }
}

function inputAlphabetSurName(inputtext, alertMsg) {
    var alphaExp = /^[a-zA-Z]+$/;
    if (inputtext.value.match(alphaExp)) {
        return true;
    } else {
        document.getElementById('p2').innerText = alertMsg;  //this segment displays the validation rule
        return false;
    }
}

//function that checks whether input text includes alphabetic and numeric characters.
function textAlphanumericUserName(inputtext, alertMsg) {
    var alphaExp = /^[0-9a-zA-Z]+$/;
    if (inputtext.value.match(alphaExp)) {
        return true;
    } else {
        document.getElementById('p3').innerText = alertMsg;  //this segment displays the validation rule
        return false;
    }
}

// Function that checks whether an user entered valid email address or not and displays alert message on wrong email address format.

function emailValidation(inputtext, alertMsg) {
    var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
    if (inputtext.value.match(emailExp)) {
        return true;
    } else {
        document.getElementById('p4').innerText = alertMsg;  //this segment displays the validation rule
        return false;
    }
}

//function that checks whether input text includes alphabetic and numeric characters.
function textAlphanumericPassword(inputtext, alertMsg) {
    var alphaExp = /^[0-9a-zA-Z]+$/;
    if (inputtext.value.match(alphaExp)) {
        return true;
    } else {
        document.getElementById('p3').innerText = alertMsg;  //this segment displays the validation rule
        return false;
    }
}
// Function that checks whether the input characters are restricted according to defined by user.
function lengthDefineFirstName(inputtext, min, max) {
    var uInput = inputtext.value;
    if (uInput.length >= min && uInput.length <= max) {
        return true;
    } else {
        document.getElementById('p1').innerText = "* Please enter between " + min + " and " + max + " characters *";  //this segment displays the validation rule
        return false;
    }
}

function lengthDefineSurName(inputtext, min, max) {
    var uInput = inputtext.value;
    if (uInput.length >= min && uInput.length <= max) {
        return true;
    } else {
        document.getElementById('p2').innerText = "* Please enter between " + min + " and " + max + " characters *";  //this segment displays the validation rule
        return false;
    }
}

function lengthDefinePassword(inputtext, min, max) {
    var uInput = inputtext.value;
    if (uInput.length >= min && uInput.length <= max) {
        return true;
    } else {
        document.getElementById('p5').innerText = "* Please enter between " + min + " and " + max + " characters *";  //this segment displays the validation rule
        return false;
    }
}

//Event Listener
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("signupbtn").addEventListener("click", function () {
        validateSignUp();
    });
});
