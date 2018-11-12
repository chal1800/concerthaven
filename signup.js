//Sign up - Form validation
//validateSignUp - this function is triggered when the user is clicking on the submit but

function validateSignUp() {
//reference to fields; set the input of the variables
      var firstName = document.getElementById("firstName");
      var surName = document.getElementById("surName");
      var userName = document.getElementById("userName");
    var eMail = document.getElementById("email");
      var password = document.getElementById("password");
//store inputs of fields in an array in order to loop through it in the next step
    var inputFields = [firstName.value, surName.value, userName.value, eMail.value, password.value];

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

    var usersExist = JSON.parse(localStorage.getItem("users"));
    for (var i = 0; i < usersExist.length; i++) {
        // users[i].username to check that the same userName does exist in local storage
        if (userName.value === usersExist[i].userName) {
            //if userName already exists, alert
            alert("Username already exists");
            return false;
        }
    }

    for (var i = 0; i < usersExist.length; i++) {
        // usersExist[i].eMail to check that the same email doesn't exist in local storage
        if (eMail.value === usersExist[i].eMail) {
            //if email already exists, alert
            alert("Email already registered");
            return false;
        }
    }
//check each input field in the order that it appears in form
//each input field has different restrictions; the if function calls the corresponding function
//if function for first field is fulfilled -> triggers next if function for next field
//testing: different use cases

    if (inputAlphabet(firstName, "* For your first name please use alphabets only *", "p1") && lengthRestriction(firstName, 3, 10, "p1")) {
        if (inputAlphabet(surName, "* For your surname please use alphabets only *", "p2") && lengthRestriction(surName, 6, 10, "p2")) {
            if (inputAlphanumeric(userName, "* For your username please use alphabets and numbers only *", "p3")) {
                if (emailValidation(eMail, "* Please enter a valid email address *", "p4")) {
                    if (inputAlphanumeric(password, "* Please use alphabets and numbers only *", "p5") && lengthRestriction(password, 6, 10, "p5")) {
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
    eMail = document.getElementById("email").value;
    password = document.getElementById("password").value;
//push new user data in array users
    users.push(new User(firstName, surName, userName, eMail, password));
    console.log(users);
//stringify array users then store array in local storage
    localStorage.setItem('users', JSON.stringify(users));
//why do I need the windwow.location? -> I don't want to redirect after I called this function -> I'm doing this in the singup function
    window.location = "index.html";
}


//functions for validating Sign up -> called by validateSignUp()
//function that checks whether input text is an alphabetic character or not
//needs the parameters inputtext and the alertMsg
//define restrictions as variables
// Regex includes all letters a-z, upper and lower case, no restriction on length
var alphaExp = /^[a-zA-Z]+$/;
// Regex includes all letters a-z, upper and lower case, all numbers 0-9, no restriction on length
var alphanumericExp = /^[0-9a-zA-Z]+$/;
// Regex email: any letters possible characters: "-, ".", "+"; must include @ sign followed by possible letters a-z (upper and lower case) and numbers followed by ".", followed by possible letters a-z (upper and lower case), restricted length (min 2, max 4)
var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;

//function that checks whether input text is an alphabetic character or not and displays alert message on wrong format
function inputAlphabet(inputtext, alertMsg, element) {
    //checks value of inputtext against the variable regex alphaExp
    if (inputtext.value.match(alphaExp)) {
        document.getElementById(element).innerHTML = "";
        return true;
    } else {
        //inputtext doesn't match alphaExp
        //displays the validation rule
        document.getElementById(element).innerHTML = alertMsg;
        return false;
    }
}

/*
//function that checks whether input text is an alphabetic character or not and displays alert message on wrong format
function inputAlphabetSurName(inputtext, alertMsg) {
    //checks value of inputtext against the variable regex alphaExp
    if (inputtext.value.match(alphaExp)) {
        return true;
    } else {
        //inputtext doesn't match alphaExp
        //displays the validation rule
        document.getElementById('p2').innerText = alertMsg;
        return false;
    }
}
*/

//function that checks whether input text includes alphabetic and numeric characters and displays alert message on wrong format
function inputAlphanumeric(inputtext, alertMsg, element) {
    //checks value of inputtext against the variable regex alphanumericExp
    if (inputtext.value.match(alphanumericExp)) {
        document.getElementById(element).innerHTML = "";
        return true;
    } else {
        //inputtext doesn't match alphanumericExp
        //displays the validation rule
        document.getElementById(element).innerHTML = alertMsg;
        return false;
    }
}

// Function that checks whether an user entered valid email address or not and displays alert message on wrong email address format
function emailValidation(inputtext, alertMsg, element) {
    if (inputtext.value.match(emailExp)) {
        document.getElementById(element).innerHTML = "";
        return true;
    } else {
        //inputtext doesn't match alphanumericExp
        //displays the validation rule
        document.getElementById(element).innerHTML = alertMsg;
        return false;
    }
}

/*
//function that checks whether input text includes alphabetic and numeric characters and displays alert message on wrong format
function textAlphanumericPassword(inputtext, alertMsg) {
    if (inputtext.value.match(alphanumericExp)) {
        return true;
    } else {
        //inputtext doesn't match alphanumericExp
        //displays the validation rule
        document.getElementById('p5').innerText = alertMsg;  //this segment displays the validation rule
        return false;
    }
}
*/

// Function that checks whether the input characters are restricted and displays alert message on wrong format
function lengthRestriction(inputtext, min, max, element) {
    //variable takes value of input field
    var userInput = inputtext.value;
    //checks if the length of the input field matches the min and max restrictions
    if (userInput.length >= min && userInput.length <= max) {
        document.getElementById(element).innerHTML = "";
        return true;
    } else {
        document.getElementById(element).innerHTML = "* Please enter between " + min + " and " + max + " characters *";
        return false;
    }
}

/*
function lengthDefineSurName(inputtext, min, max) {
//variable takes value of input field
    var userInput = inputtext.value;
    //checks if the length of the input field matches the min and max restrictions
    if (userInput.length >= min && userInput.length <= max) {
        return true;
    } else {
        //inputtext doesn't match the length restrictions
        //displays the validation rule
        document.getElementById('p2').innerText = "* Please enter between " + min + " and " + max + " characters *";
        return false;
    }
}

function lengthDefinePassword(inputtext, min, max) {
    var uInput = inputtext.value;
    if (uInput.length >= min && uInput.length <= max) {
        return true;
    } else {
        //inputtext doesn't match the length restrictions
        //displays the validation rule
        document.getElementById('p5').innerText = "* Please enter between " + min + " and " + max + " characters *";  //this segment displays the validation rule
        return false;
    }
}
*/
//Event Listener - calls the validateSignUp() function as soon as the SIgnup button is clicked
//makes sure to call the function when the whole page is loaded
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("signupbtn").addEventListener("click", function () {
        validateSignUp();
    });
});
