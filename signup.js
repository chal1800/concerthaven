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
    if (inputAlphabet(firstName)) {
        if (inputAlphabet(surName))
            return true;
    }
    return true;
}

//function that checks whether input text is an alphabetic or not


function inputAlphabet(inputtext) {
    var alphaExp = /^[a-zA-Z]+$/;
    if (inputtext.value.match(alphaExp)) {
        return true;
    } else {
        alert("Please use alphabets only");
        return false;
    }

}