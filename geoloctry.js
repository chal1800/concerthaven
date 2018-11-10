//Get coordinates from user input and create an object for the user's location
userLocation = {};

//Objects for the distances between user location and the specific venues for all venues//
var distanceVega = {};
var distanceDenGraHal = {};
var distanceForum = {};

//Initiate array "venues" to store variables for each concert hall
venues = [];

//Initiate an array for the distance from user's position to the venue's position in km
distanceUser = [];

//Initiate class "Venue" to assign variables for specific concert venues incl. name, latitude, longitude
class Venue {
    constructor(name, lat, lon) {
        this.name = name;
        this.lat = lat;
        this.lon = lon
    }
}

//Create variables for the specific venues
var venue1 = new Venue("Vega", 55.668104, 12.544605);

var venue2 = new Venue("Den Gra Hal", 55.674656, 12.600719);

var venue3 = new Venue("Forum", 55.681285, 12.553624);
venues.push(venue1, venue2, venue3);

//Initiate class for neighborhood
class Bro {
    constructor(name, lat, lon) {
        this.name = name;
        this.lat = lat;
        this.lon = lon;
    }
}

//Define variables for the specific neighborhoods
bros = []
var bro1 = new Bro("Frederiksberg", 55.676936, 12.506579);
var bro2 = new Bro("Nørrebro", 55.699031, 12.556984);
var bro3 = new Bro("Vesterbro", 55.664409, 12.541514);

//Push them into array with all neighborhoods
bros.push(bro1, bro2, bro3);
//Match user location name with coordinates for the user location when the user picks location from the list and clicks on button//
function getCoords() {
    var userL = document.getElementById("locSelect").value;
    if (userL === bro1.name) {
        userLocation.uLong = bro1.lat;
        userLocation.uLat = bro1.lon;
    } else if (userL === bro2.name) {
        userLocation.uLong = bro2.lat;
        userLocation.uLat = bro2.lon;
    } else if (userL === bro3.name) {
        userLocation.uLong = bro3.lat;
        userLocation.uLat = bro3.lon;
    }
    ;
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
    document.getElementById("demo").innerHTML = userL;


//distance function applied on user location and all venues; result is object with name of location and distance of the user//

    var distanceVega = {
        name: "Vega",
        km: distance(userLocation.uLong, userLocation.uLat, venues[0].lat, venues[0].lon)
    };
    //result pushed into distanceUser array//
    distanceUser.push(distanceVega);
    console.log("Vega", distanceVega.km.toFixed(2));

    var distanceDenGraHal = {
        name: "Den Gra Hal",
        km: distance(userLocation.uLong, userLocation.uLat, venues[1].lat, venues[1].lon)
    };
    distanceUser.push(distanceDenGraHal);
    console.log("Den Gra Hal", distanceDenGraHal.km.toFixed(2));

    var distanceForum = {
        name: "Forum",
        km: distance(userLocation.uLong, userLocation.uLat, venues[2].lat, venues[2].lon)
    };
    distanceUser.push(distanceForum);
    console.log("Forum", distanceForum.km.toFixed(2));

}


//clear existing array values when new location is selected to have a unique array of distances per location when the user presses the button//
function clearArray() {
    distanceUser.length = 0;
}




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

var distances = [];
var filteredVenues = [];
//filtering distanceUser for the users input of his max. willingness to travel and return new, filtered array "distances"
function filter() {
    distances = distanceUser.filter(choice => choice.km < document.getElementById("distSelect").value);
    console.log(distances);
    document.getElementById("demo").innerHTML = JSON.stringify(distances, null, 4);
    filteredVenues = distances.map(names => names.name);
    console.log(filteredVenues);
    return distances
}

/*var filteredVenues = getVenueName (distances, name);
console.log (filteredVenues);
*/
/*
function getVenueName(distances, name) {
    var Venues = [];
    for (var i=0; i < distances.length ; ++i)
        Venues.push(distances[i][name]);
    return Venues;
}
*/


var concerts = [];
var filteredConcerts = [];

//Create concerts
class Concert {
    constructor(artistName, concertName, ticketPrice, venueName, concertGenre, ticketCount, concertTime, concertDate,) {
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

var concert1 = new Concert('Adele', 'Rolling in the deep', 450, 'Forum', 'Pop-Rock', 5, '19:00', ("2019-1-25"));
var concert2 = new Concert('Asap Rocky', 'Long Live Asap', 420, 'Forum', 'Hip-Hop', 5, '20:00', ("2019-1-27"));
var concert3 = new Concert('Bocelli', 'Forever', 450, 'Forum', 'Classic', 5, '19:00', ("2019-01-28"));
var concert4 = new Concert('Fever Ray', 'When I grow up', 300, 'Den Gra Hal', 'Electro', 5, '19:00', "2019-01-29");
var concert5 = new Concert('Justice', 'Phantom', 270, 'Den Gra Hal', 'Electro', 5, '20:00', "2019-01-29");
var concert6 = new Concert('Azealia Banks', 'Fantasea', 290, 'Den Gra Hal', 'Hip-Hop', 5, '20:00', "2019-01-30");
var concert7 = new Concert('MGMT', 'Kids', 310, 'Vega', 'Pop-Rock', 5, '21:00', "2019-02-05");
var concert8 = new Concert('Florence + The Machine', 'High as Hope', 400, 'Vega', 'Pop-Rock', 5, '20:00', "2019-02-07");
var concert9 = new Concert('Placido Domingo', 'Fly', 420, 'Vega', 'Classic', 5, '19:00', "2019-02-09");

concerts.push(concert1, concert2, concert3, concert4, concert5, concert6, concert7, concert8, concert9);
/*
function locationFilter() {
    let locationFilteredConcerts = concerts.filter(locationChoice => locationChoice.venueName === distances.value);
    console.log(locationFilteredConcerts);
    document.getElementById("filter").innerHTML = JSON.stringify(locationFilteredConcerts, null, 4);
    return (locationFilteredConcerts);
}
*/
var filteredVenueConcerts = [];

function nameFilter() {
    filteredVenueConcerts = concerts.filter(venueNameChoice => venueNameChoice.venueName === filteredVenues[0] || venueNameChoice.venueName === filteredVenues[1] || venueNameChoice.venueName === filteredVenues[2]);
    console.log(filteredVenueConcerts);
}

function concertFilter() {
    let filteredConcerts = filteredVenueConcerts.filter(genreChoice => genreChoice.concertGenre === document.getElementById("genreSelect").value &&
        genreChoice.ticketPrice <= document.getElementById("priceSelect").value && genreChoice.concertDate >= document.getElementById("start").value && genreChoice.concertDate <= document.getElementById("end").value);
    console.log(filteredConcerts);
    document.getElementById("filter").innerHTML = JSON.stringify(filteredConcerts, null, 4);
    return (filteredConcerts);
}

//Apply "getCoords", "filter" & "clearArray" functions on users button click after dropdown choice //
document.getElementById("buttonClick").addEventListener("click", function () {
    getCoords();
    filter();
    clearArray();
    nameFilter();
    concertFilter();
});