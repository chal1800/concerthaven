//Sign up - Form validation
//validateSignUp - this function is triggered when the user is clicking on the submit button

function validateSignUp() {
//reference to fields; set the input of the variables
      var firstName = document.getElementById("firstName");
      var surName = document.getElementById("surName");
      var userName = document.getElementById("userName");
      var email = document.getElementById("email");
      var password = document.getElementById("password");
//store inputs of fields in an array in order to loop through it in the next step
    var inputFields = [firstName.value, surName.value, userName.value, email.value, password.value];

//check for empty fields - Loop through inputFields array
//if one field is empty, this function alerts a message, and returns false, to prevent the form from being submitted
//why did I put console.log? -> don't really need that?

    for (var i = 0; i < 4; i++) {
        if (inputFields[i] === "") {
            console.log(inputFields[i]);
            alert("Please fill in all the fields");
            console.log(inputFields[i]);
            return false;
        }
    }

//check each input field in the order that it appears in form
//each input field has different restrictions; the if function calls the corresponding function
//if function for first field is fulfilled -> triggers next if function for next field
//testing: different use cases
    if (inputAlphabetfirstName(firstName, "* For your first name please use alphabets only *") && lengthDefineFirstName(firstName, 3, 10)) {
        if (inputAlphabetSurName(surName, "* For your surname please use alphabets only *") && lengthDefineSurName(surName, 6, 10)) {
            if (textAlphanumericUserName(userName, "* For your username please use alphabets and numbers only *")) {
                if (emailValidation(email, "* Please enter a valid email address *")) {
                    if (textAlphanumericPassword(password, "* Please use alphabets and numbers only *") && lengthDefinePassword(password, 6, 10)) {
                        // calls function functionPushStorage()
                        functionPushStorage();
                        //redirects to html login page
                        window.location = "loginpage.html";
                        //exit function
                        return true;
                    }
                    }
                }
            }
        }
    return false;
}

//Sign up - storing new user data
//create an array called users
users = [];
//fill array with already existing users from storage?
var users = JSON.parse(localStorage.getItem("users"));

// pushing new user into existing array users and storing it using localStorage
function functionPushStorage() {
    firstName = document.getElementById("firstName").value;
    surName = document.getElementById("surName").value;
    userName = document.getElementById("userName").value;
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
//push new user data in array users
    users.push(new User(firstName, surName, userName, email, password));
    console.log(users);
//stringify array users then store array in local storage
    localStorage.setItem('users', JSON.stringify(users));
//why do I need the windwow.location? -> I don't want to redirect after I called this function -> I'm doing this in the singup function
    window.location = "index.html";
}

//functions for validating Sign up -> called by validateSignUp()
//function that checks whether input text is an alphabetic character or not
//needs the parameters inputtext and the alertMsg
function inputAlphabetfirstName(inputtext, alertMsg) {
    //Regex includes all letters a-z, upper and lower case, no restriction on length
    var alphaExp = /^[a-zA-Z]+$/;
    //if function checks value of inputtext against the regex alphaExp
    if (inputtext.value.match(alphaExp)) {
        return true;
        //inputtext doesn't match alphaExp -> .innerText
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
    var alphanumericExp = /^[0-9a-zA-Z]+$/;
    if (inputtext.value.match(alphanumericExp)) {
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
    var alphanumericExp = /^[0-9a-zA-Z]+$/;
    if (inputtext.value.match(alphanumericExp)) {
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
