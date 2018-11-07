

// Create class User
class User {
    constructor(firstName, surName, userName, eMail, password) {
        this.surName = firstName;
        this.lastName = surName;
        this.userName = userName;
        this.eMail = eMail;
        this.password = password;
    }
}

class Concert {
    constructor(artistName, concertName, ticketPrice, venueName, concertGenre, concertDate, ticketCount, concertTime) {
        this.artistName = artistName;
        this.concertName = concertName;
        this.ticketPrice = ticketPrice;
        this.venueName = venueName;
        this.concertGenre = concertGenre;
        this.ticketCount = ticketCount;
        this.concertTime = concertTime;
        this.concertDate = concertDate;
    }
}

class UserLocation {
    constructor(userName, longitude, latitude) {
        this.userName = userName;
        this.longtitude = longitude;
        this.latitude = latitude;
    }
}

class Venue {
    constructor(venueName, longitude, latitude) {
        this.venueName = venueName;
        this.longitude = longitude;
        this.latitude = latitude;
    }

    class
    distanceUser {
    constructor(venueName, distance) {
        this.venueName = venueName;
        this.distance = distance;
    }
}


function getCurrentUser() {
    return JSON.parse(localStorage.getItem("currentUser"));
}

/*
Global Arrays
*/
var coffees = [];
var stores = [];
var favorites = [];
var users = [];

/*
ADD FUNCTIONS
*/

function addCoffee(store, type, price) {
    var coffee = new Coffee(store, type, price);
    coffees.push(coffee);
}

function adduser(name, username, email, password, loggedIn) {
    var user = new User(name, username, email, password, loggedIn);
    users.push(user);
}

function addFavorite(user, coffee) {
    var favorite = new Favorite(user, coffee);
    favorites.push(favorite);
}

function addStore(name, homepage, picture) {
    var store = new Store(name, homepage, picture);
    stores.push(store);
}

/*
GET FUNCTIONS
*/

function getCoffees() {
    return coffees;
}

function getUsers() {
    return users;
}

function getFavorites() {
    return favorites;
}

function getStores() {
    return stores;
}
