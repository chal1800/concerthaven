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

var concert1 = new Concert('Adele', 'Rolling in the deep', 450, 'Forum', 'Pop-Rock', '19:00', new Date(2019, 1, 25));
var concert2 = new Concert('Asap Rocky', 'Long Live Asap', 420, 'Forum', 'Hip-Hop', '20:00', new Date(2019, 1, 27));
var concert3 = new Concert('Bocelli', 'Forever', 450, 'Forum', 'Classic', '19:00', new Date(2019, 1, 28));
var concert4 = new Concert('Fever Ray', 'When I grow up', 300, 'Den Gra Hal', 'Electro', '19:00', "2019 - 01 - 29");
var concert5 = new Concert('Justice', 'Phantom', 270, 'Den Gra Hal', 'Electro', '20:00', "2019 - 01 - 29");
var concert6 = new Concert('Azealia Banks', 'Fantasea', 290, 'Den Gra Hal', 'Hip-Hop', '20:00', "2019 - 01 - 30");
var concert7 = new Concert('MGMT', 'Kids', 310, 'Vega', 'Pop-Rock', '21:00', "2019 - 02 - 05");
var concert8 = new Concert('Florence + The Machine', 'High as Hope', 400, 'Vega', 'Pop-Rock', '20:00', "2019 - 02 - 07");
var concert9 = new Concert('Placido Domingo', 'Fly', 420, 'Vega', 'Classic', '19:00', "2019 - 02 - 09");

concerts.push(concert1, concert2, concert3, concert4, concert5, concert6, concert7, concert8, concert9);

function concertFilter() {
    let filteredConcerts = concerts.filter(genreChoice => genreChoice.concertGenre === document.getElementById("genreSelect").value &&
        genreChoice.ticketPrice <= document.getElementById("priceSelect").value);
    console.log(filteredConcerts);
    document.getElementById("filter").innerHTML = JSON.stringify(filteredConcerts, null, 4);
    return (filteredConcerts);
}

document.getElementById("buttonClick").addEventListener("click", function () {
    concertFilter()
});