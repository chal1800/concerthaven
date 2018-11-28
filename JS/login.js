//Login
//get users from localStorage (key:existingUsers)
var users = JSON.parse(localStorage.getItem("existingUsers"));

//function to check if input data matches stored data
function authUser() {
    //get user input
    let userName = document.getElementById("userName");
    let password = document.getElementById("password");
    //temporary index to check if user exists or not
    let tempIndex = -1;
    //first check if either one of the inputs is empty
    if (userName.value === "" || password.value === "") {
        alert("Please type in both username and password!");
        //return false to get out of the function and wait for a new action
        return false;
    }
    for (var i = 0; i < users.length; i++) {
        // users[i].username/.password to check that the same user is compared
        if (userName.value === users[i].userName && password.value === users[i].password) {
            //if username and password match set tempIndex to its actual index
            tempIndex = i;
            //open geolocation page on same tab
            window.location = "../HTML/geo.html";
        }
    }
    //this will only happen when the program checked all the users and tempIndex was never set to i but still set to initial -1
    if (tempIndex === -1) {
        alert("Your password or username is incorrect. Please try again!");
    }
}

//Event Listener - calls the authUser() function as soon as the Login button is clicked
//makes sure to call the function when the whole page is loaded
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("loginbtn").addEventListener("click", function () {
        authUser();
    });
});



