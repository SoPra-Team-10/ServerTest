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
            "broom": "cleansweep11",
            "sex": "m"
        },
        "chaser1": {
            "name": "abcd",
            "broom": "comet260",
            "sex": "m"
        },
        "chaser2": {
            "name": "abcd",
            "broom": "nimbus2001",
            "sex": "f"
        },
        "chaser3": {
            "name": "abcd",
            "broom": "firebolt",
            "sex": "f"
        },
        "beater1": {
            "name": "abcd",
            "broom": "tinderblast",
            "sex": "f"
        },
        "beater2": {
            "name": "abcd",
            "broom": "tinderblast",
            "sex": "f"
        }
    }
};

let teamFormationLeft = {
    "players": {
        "seeker": {
            "xPos": 3,
            "yPos": 0
        },
        "keeper": {
            "xPos": 4,
            "yPos": 0
        },
        "chaser1": {
            "xPos": 5,
            "yPos": 0
        },
        "chaser2": {
            "xPos": 6,
            "yPos": 0
        },
        "chaser3": {
            "xPos": 7,
            "yPos": 0
        },
        "beater1": {
            "xPos": 3,
            "yPos": 1
        },
        "beater2": {
            "xPos": 4,
            "yPos": 1
        }
    }
}

let teamFormationRight = {
    "players": {
        "seeker": {
            "xPos": 13,
            "yPos": 0
        },
        "keeper": {
            "xPos": 12,
            "yPos": 0
        },
        "chaser1": {
            "xPos": 11,
            "yPos": 0
        },
        "chaser2": {
            "xPos": 10,
            "yPos": 0
        },
        "chaser3": {
            "xPos": 9,
            "yPos": 0
        },
        "beater1": {
            "xPos": 13,
            "yPos": 1
        },
        "beater2": {
            "xPos": 12,
            "yPos": 1
        }
    }
};

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
};

