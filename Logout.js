function logout() {
    localStorage.removeItem("currentUser");
    window.location = "signup.html";
}

//Event Listener - calls the validateSignUp() function as soon as the SIgnup button is clicked
//makes sure to call the function when the whole page is loaded
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("logoutbtn").addEventListener("click", function () {
        logout();
    });
});