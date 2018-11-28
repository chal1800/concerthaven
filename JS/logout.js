//Logout
function logout() {
    //redirect to login page
    window.location = "../HTML/index.html";
}

//Event Listener - calls the logout() function as soon as the Logout button is clicked
//makes sure to call the function when the whole page is loaded
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("logoutbtn").addEventListener("click", function () {
        logout();
    });
});
