//Sign up - Form validation
//If a form field (fname) is empty, this function alerts a message, and returns false, to prevent the form from being submitted

function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
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