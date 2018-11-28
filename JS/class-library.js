//1. & 2. SIGN-UP & LOG-IN

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

class UserLocation {
    constructor(name, lat, lon) {
        this.name = name;
        this.lat = lat;
        this.lon = lon
    }
}

class Neighborhood {
    constructor(name, lat, lon) {
        this.name = name;
        this.lat = lat;
        this.lon = lon;
    }
}

class Venue {
    constructor(name, lat, lon) {
        this.name = name;
        this.lat = lat;
        this.lon = lon
    }
}

class DistanceVenue {
    constructor(name, km) {
        this.name = "name";
        this.km = km
    }
}

//4. CONCERT FILTER

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
