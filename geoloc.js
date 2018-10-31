//Get coordinates from user input and create an object for the user's location
userLocation = {};

//Objects for the distances between user location and the specific venues for all venues//
var distanceVega = {};
var distanceDenGraHal = {};
var distanceForum = {};

//Object with all properties for the specific venues//

venue = [{
    name: "vega",
    lat: 55.668104,
    lon: 12.544605
},
    {
        name: "Den Gra Hal",
        lat: 55.674656,
        lon: 12.600719
    },
    {
        name: "Forum",
        lat: 55.681285,
        lon: 12.553624
    }
]

//Array for the user distance to the venues for passing to filters//
distanceUser = []

//Match user location name with coordinates for the user location when the user clicks on button//
function getCoords() {
    var userL = document.getElementById("locSelect").value;
    if ((userL === "Frederiksberg")) {
        userLocation.uLong = 55.676936;
        userLocation.uLat = 12.506579;

    } else if ((userL === "Nørrebro")) {
        userLocation.uLong = 55.699031;
        userLocation.uLat = 12.556984;

    } else if ((userL === "Vesterbro")) {
        userLocation.uLong = 55.664409;
        userLocation.uLat = 12.541514;

    }
    document.getElementById("demo").innerHTML = userL;

//clear existing array values when new location is selected to have a unique array of distances per location//

//distance function applied on user location and all venues; result is object with name of location and distance of the user//

    var distanceVega = {
        name: "Vega",
        km: distance(userLocation.uLong, userLocation.uLat, venue[0].lat, venue[0].lon)
    };
    //result pushed into distanceUser array//
    distanceUser.push(distanceVega);
    console.log("Vega", distanceVega.km.toFixed(2));

    var distanceDenGraHal = {
        name: "Den Gra Hal",
        km: distance(userLocation.uLong, userLocation.uLat, venue[1].lat, venue[1].lon)
    };
    distanceUser.push(distanceDenGraHal);
    console.log("Den Gra Hal", distanceDenGraHal.km.toFixed(2));

    var distanceForum = {
        name: "Forum",
        km: distance(userLocation.uLong, userLocation.uLat, venue[2].lat, venue[2].lon)
    };
    distanceUser.push(distanceForum);
    console.log("Forum", distanceForum.km.toFixed(2));
}


function cleararray() {
    distanceUser.length = 0;
}

document.getElementById("buttonClick").addEventListener("click", function () {
    cleararray();
    console.log(distanceUser)
    ;
});


//Transform coordinate distances into distance in km//

function distance(lat1, lon1, lat2, lon2) {
    var radlat1 = Math.PI * lat1 / 180;
    var radlat2 = Math.PI * lat2 / 180;
    var radlon1 = Math.PI * lon1 / 180;
    var radlon2 = Math.PI * lon2 / 180;
    var theta = lon1 - lon2;
    var radtheta = Math.PI * theta / 180;
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    dist = Math.acos(dist);
    dist = dist * 180 / Math.PI;
    dist = dist * 60 * 1.1515 * 1.609344;

    return dist;
}

//Apply "getCoords" function on users dropdown selection //
document.getElementById("buttonClick").addEventListener("click", function () {
    getCoords();
});




