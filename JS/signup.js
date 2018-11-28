//Sign up - Form validation
//fill array with already existing users from localStorage -> receive initial type
let users = getExistingUser();

//in case localStorage is empty - triggered when user clicks on sign up button
function noUser() {
    //checks if localStorage is empty
    if (users === null) {
        //if localStorage is empty it initializes users array
        let users = [];
        //creates two dummy users
        const sophia = new User("Sophia", "Nagler", "SoNa", "so@na.com", "hallo123");
        const chris = new User("Chris", "Algier", "ChAl", "cha@al.com", "hallo456");
        //pushes newly created users into users array
        users.push(sophia, chris);
        //pushes users array to localStorage
        localStorage.setItem("existingUsers", JSON.stringify(users));
    }
}

//validateSignUp - this function is triggered when the user is clicking on the submit button
function validateSignUp() {
//reference to fields to set the input of the variables
    let firstName = document.getElementById("firstName");
    let surName = document.getElementById("surName");
    let userName = document.getElementById("userName");
    let eMail = document.getElementById("email");
    let password = document.getElementById("password");
//store inputs of fields in an array in order to loop through it in the next step
    let inputFields = [firstName.value, surName.value, userName.value, eMail.value, password.value];

//check for empty fields - loop through inputFields array
//if one field is empty, this function alerts a message, and returns false, to prevent the form from being submitted
    for (let i = 0; i < inputFields.length; i++) {
        if (inputFields[i] === "") {
            alert("Please fill in all the fields");
            return false;
        }
    }
//get users from localStorage (key: existingUsers); in order to loop through
    let usersExist = getExistingUser();
    //loop through array usersExist
    for (let i = 0; i < usersExist.length; i++) {
        // users[i].username to check if the same userName exists in localStorage
        if (userName.value === usersExist[i].userName) {
            //if userName already exists, alert
            alert("Username already exists");
            return false;
        }
    }
    //loop through array usersExist
    for (let i = 0; i < usersExist.length; i++) {
        // usersExist[i].eMail to check if the email exists in localStorage
        if (eMail.value === usersExist[i].eMail) {
            //if email already exists, alert
            alert("Email already registered");
            return false;
        }
    }
//check each input field in the order that it appears in form
//each input field has different restrictions; the if function calls the corresponding function
//if function for first field is fulfilled -> triggers next if function for next field
    if (inputAlphabet(firstName, "* For your first name please use alphabets only *", "p1") && lengthRestriction(firstName, 3, 15, "p1")) {
        if (inputAlphabet(surName, "* For your surname please use alphabets only *", "p2") && lengthRestriction(surName, 6, 15, "p2")) {
            if (inputAlphanumeric(userName, "* For your username please use alphabets and numbers only *", "p3")) {
                if (emailValidation(eMail, "* Please enter a valid email address *", "p4")) {
                    if (inputAlphanumeric(password, "* Please use alphabets and numbers only *", "p5") && lengthRestriction(password, 6, 10, "p5")) {
                        // calls function functionPushStorage()
                        functionPushStorage();
                        //redirects to html login page
                        window.location = "../HTML/index.html";
                        //exit function
                        return true;
                    }
                }
            }
        }
    }
    //exit function
    return false;
}

// pushing new user into existing array users and storing it in localStorage
function functionPushStorage() {
    //get stored users from localStorage
    let users = getExistingUser();
    //get input data from DOM - create new instance of class User
    let pushUser = new User(document.getElementById("firstName").value, document.getElementById("surName").value, document.getElementById("userName").value, document.getElementById("email").value, document.getElementById("password").value);
//push new user data in array users
    users.push(pushUser);
//stringify array users then store array in localStorage (key: existingUsers)
    localStorage.setItem("existingUsers", JSON.stringify(users));
}

//functions for validating Sign up - called by validateSignUp()
//function that checks whether input text is an alphabetic character or not and displays alert message if requirement is not met
function inputAlphabet(inputtext, alertMsg, element) {
    // Regex includes all letters a-z, upper and lower case, no restriction on length
    const alphaExp = /^[a-zA-Z]+$/;
    //checks value of input against the regex variable (alphaExp)
    if (inputtext.value.match(alphaExp)) {
        //in case user changes input value which before didn't meet the requirement the following blanks the alert message shown in DOM
        document.getElementById(element).innerHTML = "";
        //exit function
        return true;
    } else {
        //inputtext doesn't match alphaExp
        //displays the validation rule
        document.getElementById(element).innerHTML = alertMsg;
        //exit function
        return false;
    }
}

//Function that checks whether input text includes alphabetic and numeric characters and displays alert message if requirement is not met
function inputAlphanumeric(inputtext, alertMsg, element) {
    // Regex includes all letters a-z, upper and lower case, all numbers 0-9, no restriction on length
    const alphanumericExp = /^[0-9a-zA-Z]+$/;
    //checks value of inputtext against the regex variable (alphanumericExp)
    if (inputtext.value.match(alphanumericExp)) {
        //in case user changes input value which before didn't meet the requirement the following blanks the alert message shown in DOM
        document.getElementById(element).innerHTML = "";
        //exit function
        return true;
    } else {
        //inputtext doesn't match inputAlphanumeric
        //displays the validation rule
        document.getElementById(element).innerHTML = alertMsg;
        //exit function
        return false;
    }
}

// Function that checks whether a user entered valid email address or not and displays alert if requirement is not met
function emailValidation(inputtext, alertMsg, element) {
    // Regex email: any letters possible characters: "-, ".", "+"; must include @ sign followed by possible letters a-z (upper and lower case) and numbers followed by ".", followed by possible letters a-z (upper and lower case), restricted length (min 2, max 4)
    const emailExp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
    if (inputtext.value.match(emailExp)) {
        //in case user changes input value which before didn't meet the requirement the following blanks the alert message shown in DOM
        document.getElementById(element).innerHTML = "";
        //exit function
        return true;
    } else {
        //inputtext doesn't match regex variable (emailExp)
        //displays the validation rule
        document.getElementById(element).innerHTML = alertMsg;
        //exit function
        return false;
    }
}

// Function that checks if the count of input characters meets the restriction and displays alert message if requirement is not met
function lengthRestriction(inputtext, min, max, element) {
    //variable takes value of input field
    let userInput = inputtext.value;
    //checks if the length of the input field matches the min and max restrictions
    if (userInput.length >= min && userInput.length <= max) {
        //in case user changes input value which before didn't meet the requirement the following blanks the alert message shown in DOM
        document.getElementById(element).innerHTML = "";
        //exit function
        return true;
    } else {
        //displays validation rule
        document.getElementById(element).innerHTML = "* Please enter between " + min + " and " + max + " characters *";
        //exit function
        return false;
    }
}

//function to get existingUsers from localStorage
function getExistingUser() {
    return JSON.parse(localStorage.getItem("existingUsers"));
}

//Event Listener - calls the noUser() and validateSignUp() function as soon as the Signup button is clicked
//makes sure to call the function when the whole page is loaded
/*document.addEventListener("DOMContentLoaded", function () {*/
document.getElementById("signupbtn").addEventListener("click", function () {
    noUser();
    validateSignUp();
});
/*});*/
