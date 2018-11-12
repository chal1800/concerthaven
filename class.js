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

function hashPassword(password) {
    var a = 1, c = 0, h, o;
    if (password) {
        a = 0;
        /*jshint plusplus:false bitwise:false*/
        for (h = password.length - 1; h >= 0; h--) {
            o = password.charCodeAt(h);
            a = (a << 6 & 268435455) + o + (o << 14);
            c = a & 266338304;
            a = c !== 0 ? a ^ c >> 21 : a;
        }
    } else {
        // If the password is not valid, we'll throw and error we're able to catch
        throw new Error("The password supplied is not valid");
    }
    return String(a);
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
