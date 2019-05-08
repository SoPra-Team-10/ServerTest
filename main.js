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
        let text = "Sent: " + JSON.stringify(json, null, 4) + " \n\n";
        document.getElementById(side).innerText += text;
    }

    function manageConnection(toSend, side) {
        for (var c = 0; c < toSend.length; c++) {
            setTimeout(send.bind(this, toSend[c].message, toSend[c].name, side), toSend[c].time);
        }
    }

    connectionLeft.onopen = manageConnection.bind(this, sendLeft, "left");
    connectionRight.onopen = manageConnection.bind(this, sendRight, "right");

    connectionLeft.onerror = function (error) {
        console.error(error);
    };

    connectionLeft.onclose = function (event) {
        console.warn(event);
    }

    connectionLeft.onmessage = function (e) {
        document.getElementById("left").innerText += "Received: " + e.data + "\n\n";
    };

    connectionRight.onerror = function (error) {
        console.error(error);
    };

    connectionRight.onclose = function (event) {
        console.warn(event);
    }

    connectionRight.onmessage = function (e) {
        document.getElementById("right").innerText += "Received: " + e.data + "\n\n";
    };
})();