//function to log out of the website
function logout() {
    //remove the currentUser from localStorage
    localStorage.removeItem("currentUser");
    //redirect to login page
    window.location = "loginpage.html";
}

//Event Listener - calls the logout() function as soon as the Logout button is clicked
//makes sure to call the function when the whole page is loaded
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("logoutbtn").addEventListener("click", function () {
        logout();
    });
});