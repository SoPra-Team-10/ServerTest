var connectionLeft = new WebSocket('ws://134.60.29.234:8080', ['http-only']);
var connectionRight = new WebSocket('ws://134.60.29.234:8080', ['http-only']);

function send(payload, type, side) {
    let json = {
        timestamp: "yyyy-MM-dd HH:mm:ss.SSS)",
        payloadType : type,
        payload: payload
    }

    if (side == "left") {
        connectionLeft.send(JSON.stringify(json));
    } else {
        connectionRight.send(JSON.stringify(json));
    }
    document.getElementById(side).innnerText += "Sent: " + JSON.stringify(json, null, 4) + " \n\n";
}

let joinRequest = {
    lobby: "Test12",
    userName: "abc",
    password: "dfdfdf",
    isArtificialIntelligence: false,
    mods: []
};

let teamConfig = {
    "name": "abcd",
    "motto": "(string/motto)",
    "colors": {
        "primary": "000000",
        "secondary": "FFFFFF"
    },
    "image": "(string/base64/png)",
    "fans": {
        "goblins": 1,
        "trolls": 2,
        "elves": 3,
        "nifflers": 1
    },
    "players": {
        "seeker": {
            "name": "stringname",
            "broom": "tinderblast",
            "sex": "m"
        },
        "keeper": {
            "name": "stringname",
            "broom": "tinderblast",
            "sex": "m"
        },
        "chaser1": {
            "name": "abcd",
            "broom": "tinderblast",
            "sex": "m"
        },
        "chaser2": {
            "name": "abcd",
            "broom": "tinderblast",
            "sex": "m"
        },
        "chaser3": {
            "name": "abcd",
            "broom": "tinderblast",
            "sex": "m"
        },
        "beater1": {
            "name": "abcd",
            "broom": "tinderblast",
            "sex": "m"
        },
        "beater2": {
            "name": "abcd",
            "broom": "tinderblast",
            "sex": "m"
        }
    }
}

let teamFormation = {
  "players": {
    "seeker": {
      "xPos": 4,
      "yPos": 4
    },
    "keeper": {
      "xPos": 4,
      "yPos": 4
    },
    "chaser1": {
      "xPos": 4,
      "yPos": 4
    },
    "chaser2": {
      "xPos": 4,
      "yPos": 4
    },
    "chaser3": {
      "xPos": 4,
      "yPos": 4
    },
    "beater1": {
      "xPos": 4,
      "yPos": 4
    },
    "beater2": {
      "xPos": 4,
      "yPos": 4
    }
  }
}


connectionLeft.onopen = function () {
    setTimeout(function() {
        send(joinRequest, "joinRequest", "left");
    }, 1000);
    setTimeout(function() {
        send(teamConfig, "teamConfig", "left");
    }, 2000);
    setTimeout(function() {
        send(teamFormation, "teamFormation", "left");
    }, 7000);
};

connectionRight.onopen = function () {
    setTimeout(function() {
        joinRequest.userName += "2";
        send(joinRequest, "joinRequest", "right");
    }, 1500);
    setTimeout(function() {
        send(teamConfig, "teamConfig", "right");
    }, 2500);
    setTimeout(function() {
        send(teamFormation, "teamFormation", "right");
    }, 7500);
};

connectionLeft.onerror = function (error) {
    console.error(error);
};

connectionLeft.onclose = function(event) {
    console.warn(event);
}

connectionLeft.onmessage = function (e) {
    document.getElementById("left").innerText += "Received: "+e.data+"\n\n";
    console.log(e);
};

connectionRight.onerror = function (error) {
    console.error(error);
};

connectionRight.onclose = function(event) {
    console.warn(event);
}

connectionRight.onmessage = function (e) {
    document.getElementById("right").innerText += "Received: "+e.data+"\n\n";
    console.log(e);
};
