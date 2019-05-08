(function() {
    var connectionLeft = new WebSocket('ws://localhost:8080', ['http-only']);
    var connectionRight = new WebSocket('ws://localhost:8080', ['http-only']);

    function send(payload, type, side) {
        let json = {
            timestamp: "yyyy-MM-dd HH:mm:ss.SSS)",
            payloadType: type,
            payload: payload
        }


        if (side == "left") {
            connectionLeft.send(JSON.stringify(json));
        } else {
            connectionRight.send(JSON.stringify(json));
        }
        document.getElementById(side).innnerText += "Sent: " + JSON.stringify(json, null, 4) + " \n\n";
    }


    connectionLeft.onopen = function () {
        for (var c = 0; c < sendLeft.length; c++) {
            setTimeout(send.bind(this, sendLeft[c].message, sendLeft[c].name, "left"), sendLeft[c].time);
        }
    };

    connectionRight.onopen = function () {
        for (var c = 0; c < sendRight.length; c++) {
            setTimeout(send.bind(this, sendRight[c].message, sendRight[c].name, "right"), sendRight[c].time);
        }
    };

    connectionLeft.onerror = function (error) {
        console.error(error);
    };

    connectionLeft.onclose = function (event) {
        console.warn(event);
    }

    connectionLeft.onmessage = function (e) {
        document.getElementById("left").innerText += "Received: " + e.data + "\n\n";
        console.log(e);
    };

    connectionRight.onerror = function (error) {
        console.error(error);
    };

    connectionRight.onclose = function (event) {
        console.warn(event);
    }

    connectionRight.onmessage = function (e) {
        document.getElementById("right").innerText += "Received: " + e.data + "\n\n";
        console.log(e);
    };
})();