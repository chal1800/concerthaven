var concerts = [];
var filteredConcerts = [];

//Create concerts

concerts = [
    new concert{
        artistName: 'Adele',
        concertName: 'Rolling in the deep',
        ticketPrice: 450,
        venueName: 'Forum',
        concertGenre: 'Pop-Rock',
        concertTime: '19:00',
        concertDate: 2019 - 01 - 25,
    },

    new concert{
        artistName: 'Asap Rocky',
        concertName: 'Long Live Asap',
        ticketPrice: 420,
        venueName: 'Forum',
        concertGenre: 'Hip-Hop',
        concertTime: '20:00',
        concertDate: 2019 - 01 - 27,
    },
    new concert{
        artistName: 'Bocelli',
        concertName: 'Forever',
        ticketPrice: 450,
        venueName: 'Forum',
        concertGenre: 'Classic',
        concertTime: '19:00',
        concertDate: 2019 - 01 - 28,
    },
    new concert{
        artistName: 'Fever Ray',
        concertName: 'When I grow up',
        ticketPrice: 300,
        venueName: 'Den Grå Hal',
        concertGenre: 'Electro',
        concertTime: '19:00',
        concertDate: 2019 - 01 - 29,
    },
    new concert{
        artistName: 'Justice',
        concertName: 'Phantom',
        ticketPrice: 270,
        venueName: 'Den Grå Hal',
        concertGenre: 'Electro',
        concertTime: '20:00',
        concertDate: 2019 - 01 - 29,
    },

    new concert{
        artistName: 'Azealia Banks',
        concertName: 'Fantasea',
        ticketPrice: 290,
        venueName: 'Den Grå Hal',
        concertGenre: 'Hip-Hop',
        concertTime: '20:00',
        concertDate: 2019 - 01 - 30,
    },

    new concert{
        artistName: 'MGMT',
        concertName: 'Kids',
        ticketPrice: 310,
        venueName: 'Vega',
        concertGenre: 'Pop-Rock',
        concertTime: '21:00',
        concertDate: 2019 - 02 - 05,
    },

    new concert{
        artistName: 'Florence + The Machine',
        concertName: 'High as Hope',
        ticketPrice: 400,
        venueName: 'Vega',
        concertGenre: 'Pop-Rock',
        concertTime: '20:00',
        concertDate: 2019 - 02 - 07,
    },
    new concert{
        artistName'Placido Domingo',
        concertName'Fantasea',
        ticketPrice: 420,
        venueName: 'Vega',
        concertGenre: 'Classic',
        concertTime: '19:00',
        concertDate: 2019 - 02 - 09,
    }
]
;


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
    class
    distanceUser

    constructor(venueName, longitude, latitude) {
        this.venueName = venueName;
        this.longitude = longitude;
        this.latitude = latitude;
    } {

    constructor(venueName, distance) {
        this.venueName = venueName;
        this.distance = distance;
    }
}

//Get values from form
var genre = [];
//-> insert genres from form

var price = [];
//-> insert prices from form


//Filter

//Iterate through all concerts
for (var a = 0; a < concerts.length; a++) {
    //Check if concerts match genres

    //Check if concerts match prices

    //Check if concerts match date range

    //Check if concerts match distance

    //If they do, add this concert to filteredConcerts
    filteredConcerts.push(concerts[a]);
}

//Return to homepage and display concert names

