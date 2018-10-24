//Get coordinates from user input and create an object for the user's location
var userLocation = {};

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

    var distanceVega = distance(userLocation.uLong, userLocation.uLat, 55.668104, 12.544605);
    console.log(distanceVega.toFixed(2));
}

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


document.getElementById("buttonClick").addEventListener("onchange", function () {
    getCoords();
});