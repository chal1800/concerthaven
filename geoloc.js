/* function getLoc() {
    var userL = document.getElementById("locSelect").value;
    document.getElementById("demo").innerHTML = userL;
    console.log (userL);
}
*/

//Get coordinates from user input and create an object for the user's location
function getCoords() {
    var userL = document.getElementById("locSelect").value;
    if ((userL === "Frederiksberg")) {
        uLong = 55.676936;
        uLat = 12.506579;
        console.log(uLong, uLat)

    } else if ((userL === "Nørrebro")) {
        uLong = 55.699031;
        uLat = 12.556984;
        console.log(uLong, uLat)

    } else if ((userL === "Vesterbro")) {
        uLong = 55.664409;
        uLat = 12.541514;
        console.log(uLong, uLat);

    }
    document.getElementById("demo").innerHTML = userL;
    console.log(userL);
    userLocation = {
        lon: uLong,
        lat: uLat
    }
    console.log(userLocation);


}

//Calculate distance to the concert venues out of the difference between the coordinates of the user's pre-selected location in km

function distance() {
    var lat1;
    lat1 = userLocation.lon;
    var lon1;
    lon1 = userLocation.lat;
    var lat2 = 55.668104;
    var lon2 = 12.544605;
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
    console.log(dist.toFixed(2));
    userDistanceVega = {
        distanceVega: dist
    }
    console.log(userDistanceVega)
}




