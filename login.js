//function is activated when user clicks on login button
var users = JSON.parse(localStorage.getItem("existingUsers"));

function authUser() {
    let userName = document.getElementById("userName");
    let password = document.getElementById("password");
    //temporary index to check if my user exists or not
    // tempIndex muss eine Zahl sein, die der Index vom Array nicht annehmen kann -> könnte auch -5 sein
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
            //if username and password match set tempIndex to it's actual index
            // Loop ändert den TempIndex zur Indexzahl falls der User existiert( userName und Password stimmen überein)
            tempIndex = i;
             //open main filter page on same tab*/
            window.location = "geo.html";
        }
    }
    //this will only happen when the program checked all the users and tempIndex was never set to i but still set to initial -1
    if (tempIndex === -1) {
        alert("Your password or username is incorrect. Please try again!");
    }
}
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("loginbtn").addEventListener("click", function () {
        authUser();
    });
});

