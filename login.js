//the function shall be activated when user clicks on login button
var users = JSON.parse(localStorage.getItem("users"));

function authUser() {
    var userName = document.getElementById("userName");
    var password = document.getElementById("password");
    //temporary index to check if my user exists or not
    var tempIndex = -1;
    //first check if either one of the inputs is empty
    if (userName.value === "" || password.value === "") {
        alert("Please type in both username and password!");
        //return false to get out of the function and wait for a new action
        return false;
    }
    for (var i = 0; i < users.length; i++) {
        // users[i].username/.password to check that the same user is compared
        if (userName.value === users[i].userName && password.value === users[i].password) {
            //if username and password match set tempIndex to it's actual index
            tempIndex = i;
            //change the loggedIn status of respective user from false to true so that I can see which user is loggedIn
            users[i].loggedIn = true;
            //store users in localStorage with the changed status of loggedIn
            //since it is an object you need first stringify so that it actually shows everything in "value" what is inside of the object
            var userString = JSON.stringify(users[i]);
            //saves the user in local storage
            localStorage.setItem("currentUser", userString);
            //open main filter page on same tab
            window.location = "geoloctry.html";
        }
    }
    //this will only happen when the program checked all the users and tempIndex was never set to i but still set to initial -1
    if (tempIndex === -1) {
        alert("Your password or username is incorrect. Please try again!");
    }
};

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("loginbtn").addEventListener("click", function () {
        authUser();
    });
});


