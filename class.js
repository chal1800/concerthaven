//1. & 2. SIGN-UP & LOG-IN

// Create class User
class User {
    constructor(firstName, surName, userName, eMail, password) {
        this.firstName = firstName;
        this.surName = surName;
        this.userName = userName;
        this.eMail = eMail;
        this.password = password;
    }
}


//3. GEO-LOCATION

//Class UserLoc to match user's location input with user location properties
class UserLoc {
    constructor(name, lat, lon) {
        this.name = name;
        this.lat = lat;
        this.lon = lon
    }
}

//Class for neighborhood to match with user's location
class Bro {
    constructor(name, lat, lon) {
        this.name = name;
        this.lat = lat;
        this.lon = lon;
    }
}

//Class Venue to define multiple venues and their location properties
class Venue {
    constructor(name, lat, lon) {
        this.name = name;
        this.lat = lat;
        this.lon = lon
    }
}

//Class DistanceVenue to create objects for each venue and their distance to user's location in km
class DistanceVenue {
    constructor(name, km) {
        this.name = "name";
        this.km = km
    }
}

//4. CONCERT FILTER

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
