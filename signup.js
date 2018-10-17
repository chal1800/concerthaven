//Sign up - receive data from html put in
function getInfo() {
    var firstName = document.getElementById("firstName").value
    var surName = document.getElementbyId("surName").value
    var userName = document.getElementById("userName").value
    var email = document.getElementbyId("email").value
    var password = document.getElementById("password").value
}

//Sign up - Form validation
//If a form field (name) is empty, this function alerts a message, and returns false, to prevent the form from being submitted

function validateSignUp() {
    var firstName = document.forms["SignUpForm"]["firstName"];
    var surName = document.forms ["SignUpForm"]["lastName"];
    var userName = document.forms ["SignUpForm"]["userName"];
    var email = document.forms ["SignUpForm"]["email"];
    var password = document.forms ["SignUpForm"]["password"];

    if (firstName.value == "") {
        alert("Please fill in your first name);
        return false;
    }
    //regex to match only letters (case-insensitive)
    //var reg = /^[a-z]+$/i;
    //if(!reg.test(firstName.value))
    // {
    //   alert("Input contains invalid characters!");
    //  return false;
    // }
    if (surName.value == "") {
        alert("Please fill in your Surname");
        return false;
    }
    if (userName.value == "") {
        alert("Please fill in your Username");
        return false;
    }
    if (email.value == "") {
        alert("Please fill in your email");
        return false;
    }
    if (password.value == "") {
        alert("Please choose and fill in a password");
        return false;
    }
    return true;
}

// Sign up - User object creation
var myUser = new User("Sophia", "Nagler", "sophia21", "sophia@gmail.com", "alex");

// objects are created with user as prototype -> have its properties
var user1 = Object.create(user);
user1.init("Sophia", "Nagler", "Sophia1993", "so.nagler@icloud.com", "Sophia1993");

var user2 = Object.create(user);
user2.init("Chris", "Algaier", "Chris123", "chris@icloud.com", "7649chris");
// create array called "users" containing objects
var users = [];
users.push(myUser);
users.push(user1);
users.push(user2);
//test output
users.forEach(function (user) {
    console.log(user.describe());
});