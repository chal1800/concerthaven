//function to log out of the website
function signoff() {
    //Get current userName from localStorage
    var currentUser = JSON.parse(localStorage.getItem("currentUser"));
    //go through localStorage users to find currentUser
    var signOffUserName = currentUser.userName;
    //remove userName and data
    localStorage.removeItem("users.userName = signOffUserName");
    //redirect to login page
    window.location = "signup.html";
}

//Event Listener - calls the logout() function as soon as the Logout button is clicked
//makes sure to call the function when the whole page is loaded
document.getElementById("signoffbtn").addEventListener("click", function () {
    signoff();
});
