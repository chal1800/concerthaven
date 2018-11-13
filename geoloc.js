//Create an object for the user's location which will be filled with the user's input through "getCoords"
let userLocation = new UserLoc();

//Objects for the distances between user location and the specific venues for all venues
let distance1 = new DistanceVenue();
Object.defineProperty(distance1, "name", {
    value: "Vega"
});
let distance2 = new DistanceVenue();
Object.defineProperty(distance2, "name", {
    value: "Den Gra Hal"
});
let distance3 = new DistanceVenue();
Object.defineProperty(distance3, "name", {
    value: "Forum"
});


//Initiate array "venues" to store variables for each concert hall
venues = [];

//Initiate an array for the distance from user's position to the venue's position in km
distanceUser = [];

//Create objects for the 3 specific venues, incl. their name,longitude, latitude
const venue1 = new Venue("Vega", 55.668104, 12.544605);
const venue2 = new Venue("Den Gra Hal", 55.674656, 12.600719);
const venue3 = new Venue("Forum", 55.681285, 12.553624);
venues.push(venue1, venue2, venue3);


//Define constants for the specific neighborhoods and assign them name, lon, lat
const bro1 = new Bro("Frederiksberg", 55.676936, 12.506579);
const bro2 = new Bro("Nørrebro", 55.699031, 12.556984);
const bro3 = new Bro("Vesterbro", 55.664409, 12.541514);

//Push them into array with all neighborhoods "bros"
bros = [];
bros.push(bro1, bro2, bro3);

//Match user location name with coordinates for the user location when the user picks location from the list and clicks on button
function getCoords() {
    userLocation.name = document.getElementById("locSelect").value;
    if (userLocation.name === bro1.name) {
        userLocation.lon = bro1.lat;
        userLocation.lat = bro1.lon;
    } else if (userLocation.name === bro2.name) {
        userLocation.lon = bro2.lat;
        userLocation.lat = bro2.lon;
    } else if (userLocation.name === bro3.name) {
        userLocation.lon = bro3.lat;
        userLocation.lat = bro3.lon;
    }

    /*if ((userL === "Frederiksberg")) {
        userLocation.uLong = 55.676936;
        userLocation.uLat = 12.506579;
    } else if ((userL === "Nørrebro")) {
        userLocation.uLong = 55.699031;
        userLocation.uLat = 12.556984;
    } else if ((userL === "Vesterbro")) {
        userLocation.uLong = 55.664409;
        userLocation.uLat = 12.541514;
    } */

//distance function applied on user location and all venues; result is object with name of location and distance of the user//

    distance1 = {
        name: distance1.name,
        km: distance(userLocation.lon, userLocation.lat, venues[0].lat, venues[0].lon)
    };
    //result pushed into distanceUser array//
    distanceUser.push(distance1);
    console.log("Vega", distance1.km.toFixed(2));

    distance2 = {
        name: distance2.name,
        km: distance(userLocation.lon, userLocation.lat, venues[1].lat, venues[1].lon)
    };
    distanceUser.push(distance2);
    console.log("Den Gra Hal", distance2.km.toFixed(2));

    distance3 = {
        name: distance3.name,
        km: distance(userLocation.lon, userLocation.lat, venues[2].lat, venues[2].lon)
    };
    distanceUser.push(distance3);
    console.log("Forum", distance3.km.toFixed(2));

}


//clear existing array values when new location is selected to have a unique array of distances per location when the user presses the button//
function clearArray() {
    distanceUser.length = 0;
}


//Transform coordinate distances into distance in km//

function distance(lat1, lon1, lat2, lon2) {
    let radLat1 = Math.PI * lat1 / 180;
    let radLat2 = Math.PI * lat2 / 180;
    /*var radlon1 = Math.PI * lon1 / 180;*/
    /* var radlon2 = Math.PI * lon2 / 180;*/
    let theta = lon1 - lon2;
    let radTheta = Math.PI * theta / 180;
    let dist = Math.sin(radLat1) * Math.sin(radLat2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.cos(radTheta);
    dist = Math.acos(dist);
    dist = dist * 180 / Math.PI;
    dist = dist * 60 * 1.1515 * 1.609344;

    return dist;
}


//Apply "getCoords", "filter" & "clearArray" functions on users button click after dropdown choice //
document.getElementById("buttonClick").addEventListener("click", function () {
    getCoords();
    filter();
    clearArray();
});

document.getElementById("nextClick").addEventListener("click", function () {
    window.location = "concert-filters.html"
});

//Initializing array for distances which contains all names and distances (distance1,2 & 3 objects
let distances = [];

//Initializing array for the names of the filtered venues
let filteredVenues = [];

//filtering distanceUser for the users input of his max. willingness to travel and return new, filtered array "distances"
function filter() {
    distances = distanceUser.filter(choice => choice.km < document.getElementById("distSelect").value);
    console.log(distances);
    //Print filtered Venues to the Screen
    document.getElementById("demo").innerHTML = JSON.stringify(distances, null, 4);
    //Create array with only the names of the filtered Venues
    filteredVenues = distances.map(names => names.name);
    console.log(filteredVenues);
    //push filtered Venue names into the Local Storage
    localStorage.setItem("Venues", JSON.stringify(filteredVenues));
    return distances
}






