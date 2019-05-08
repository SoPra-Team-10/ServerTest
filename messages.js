let joinRequestLeft = {
    lobby: "Test",
    userName: "user1",
    password: "dfdfdf",
    isArtificialIntelligence: false,
    mods: []
};

let joinRequestRight = {
    lobby: "Test",
    userName: "user2",
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

let deltaRequest = {
    deltaType: "move",
    success: true,
    xPosOld: 0,
    yPosOld: 0,
    xPosNew: 0,
    yPosNew: 0,
    activeEntity: "rightChaser1",
    passiveEntity: null,
    phaseType: "playerPhase",
    leftPoints: 0,
    rightPoints: 0,
    round: 0,
    banReason: null
}

