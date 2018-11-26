
//GEOLOC

const distance3 = new DistanceVenue("Forum");

const venues = [
    new Venue("Vega", 55.668104, 12.544605),
    new Venue("Den Gra Hal", 55.674656, 12.600719),
    new Venue ("Forum", 55.681285, 12.553624)
]

function distanceResults() {
    distance1.km = distance(userLocation.lat, userLocation.lon, venues[0].lat, venues[0].lon);
    distance2.km = distance(userLocation.lat, userLocation.lon, venues[1].lat, venues[1].lon);
    distance3.km = distance(userLocation.lat, userLocation.lon, venues[2].lat, venues[2].lon);
    distanceUser = [distance1, distance2, distance3]
}


//CONCERT-FILTER

function nameFilter() {
    filteredVenueConcerts = concerts.filter(function(venueNameChoice){ => filteredVenues.includes(venueNameChoice.venueName);
    console.log(filteredVenueConcerts);
}

function nameFilter() {
    filteredVenueConcerts = concerts.filter(venueNameChoice => filteredVenues.indexOf(venueNameChoice.venueName)!==-1;
    console.log(filteredVenueConcerts);
}

if (startDate>endDate){
    alert("Your End Date must be after your Start Date")
}




