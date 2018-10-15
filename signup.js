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
var user = {
    // Initialise user
    // init gives the User obkect the properties
    init: function (surName, lastName, userName, eMail, password) {
        this.surName = surName;
        this.lastName = lastName;
        this.userName = userName;
        this.eMail = eMail;
        this.password = password;
    },
    //describe function to test the output
    describe: function () {
        var description = this.surName + ", " + this.lastName;
        return description;
    }
};
// objects are created with user as prototype -> have its properties
var user1 = Object.create(user);
user1.init("Sophia", "Nagler", "Sophia1993", "so.nagler@icloud.com", "Sophia1993");

var user2 = Object.create(user);
user2.init("Chris", "Algaier", "Chris123", "chris@icloud.com", "7649chris");
// create array called "users" containing objects
var users = [];
users.push(user1);
users.push(user2);
//test output
users.forEach(function (user) {
    console.log(user.describe());
});