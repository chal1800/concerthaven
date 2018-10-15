var objUser = [
    {
        username: "Chris",
        password: "123"
    },
    {
        username: "Soph",
        password: "456"
    },
    {
        username: "Filippo",
        password: "789"
    }
]

function getInfo() {
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value

    for (var i = 0; i < objUser.length; i++) {
        if (username == objUser[i].username && password == objUser[i].password) {
            console.log(username + " is logged in")
        } else {
            console.log("Incorrect username or password")
        }
        return
    }
}
