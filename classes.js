alert("hello from classes");

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
    constructor(venueName, longitude, latitude) {
        this.venueName = venueName;
        this.longitude = longitude;
        this.latitude = latitude;
    }
}