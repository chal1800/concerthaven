//Initiate array to store all concert objects
let concerts = [];

//Define the concert objects
const concert1 = new Concert('Adele', 'Rolling in the deep', 450, 'Forum', 'Pop-Rock', 5, '19:00', ("2019-1-25"));
const concert2 = new Concert('Asap Rocky', 'Long Live Asap', 420, 'Forum', 'Hip-Hop', 5, '20:00', ("2019-1-27"));
const concert3 = new Concert('Bocelli', 'Forever', 450, 'Forum', 'Classic', 5, '19:00', ("2019-01-28"));
const concert4 = new Concert('Fever Ray', 'When I grow up', 300, 'Den Gra Hal', 'Electro', 5, '19:00', "2019-01-29");
const concert5 = new Concert('Justice', 'Phantom', 270, 'Den Gra Hal', 'Electro', 5, '20:00', "2019-01-29");
const concert6 = new Concert('Azealia Banks', 'Fantasea', 290, 'Den Gra Hal', 'Hip-Hop', 5, '20:00', "2019-01-30");
const concert7 = new Concert('MGMT', 'Kids', 310, 'Vega', 'Pop-Rock', 5, '21:00', "2019-02-05");
const concert8 = new Concert('Florence + The Machine', 'High as Hope', 400, 'Vega', 'Pop-Rock', 5, '20:00', "2019-02-07");
const concert9 = new Concert('Placido Domingo', 'Fly', 420, 'Vega', 'Classic', 5, '19:00', "2019-02-09");

//Push them into the concerts array
concerts.push(concert1, concert2, concert3, concert4, concert5, concert6, concert7, concert8, concert9);
/*
function locationFilter() {
    let locationFilteredConcerts = concerts.filter(locationChoice => locationChoice.venueName === distances.value);
    console.log(locationFilteredConcerts);
    document.getElementById("filter").innerHTML = JSON.stringify(locationFilteredConcerts, null, 4);
    return (locationFilteredConcerts);
}
*/

//get the result from the distance filter (geoloc.js) as venue names from the local storage to narrow down the concert array
let filteredVenues = JSON.parse(localStorage.getItem("Venues"));

//initiate array for the venue-filtered concerts
let filteredVenueConcerts = [];

//Filter all concerts by the distance-filtered venues
function nameFilter() {
    filteredVenueConcerts = concerts.filter(venueNameChoice => venueNameChoice.venueName === filteredVenues[0] || venueNameChoice.venueName === filteredVenues[1] || venueNameChoice.venueName === filteredVenues[2]);
    console.log(filteredVenueConcerts);
}

//Define requirement for a start- and end-date user input with a RegEx, show alert if not matching
function dateRequirement() {
    let startDate = document.getElementById("start").value;
    let endDate = document.getElementById("end").value;
    const valiDate = /^\d{4}-\d{2}-\d{2}$/;
    if (startDate.match(valiDate) && endDate.match(valiDate)) {
        concertFilter()
    } else {
        alert("Type in your dates")
    }
}

//Initiate array to store all filtered concert objects (end-result)
let filteredConcerts = [];

//Filter the name-filtered concerts for user inputs of genre, price and dates
function concertFilter() {
    filteredConcerts = filteredVenueConcerts.filter(genreChoice => genreChoice.concertGenre === document.getElementById("genreSelect").value &&
        genreChoice.ticketPrice <= document.getElementById("priceSelect").value && genreChoice.concertDate >= document.getElementById("start").value && genreChoice.concertDate <= document.getElementById("end").value);
    console.log(filteredConcerts);
    document.getElementById("filter").innerHTML = JSON.stringify(filteredConcerts, null, 4);
    return (filteredConcerts);
}

//Alert if no concerts matching the users inputs were found
function noConcert() {
    if (filteredConcerts.length === 0) {
        alert("Sorry, we found no concerts for you");
    }
}

//Apply "nameFilter", "dateRequirement" & "noConcert" functions on users button click after dropdown choice
document.getElementById("concertClick").addEventListener("click", function () {
    nameFilter();
    dateRequirement();
    noConcert();
});