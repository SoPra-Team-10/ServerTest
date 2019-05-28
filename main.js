(function() {
    const connectionLeft = new WebSocket('ws://localhost:8081', ['http-only']);
    const connectionRight = new WebSocket('ws://localhost:8081', ['http-only']);

    function getTimestamp() {
        let now = new Date();
        console.log(now);

        return now.getFullYear() + "-" + (now.getMonth()+1) + "-" + now.getUTCDate() + " "
            + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds() + "."
            + now.getMilliseconds()
    }

    function send(payload, type, side) {
        let json = {
            timestamp: getTimestamp(),
            payloadType: type,
            payload: payload
        };

        if (side === "left") {
            connectionLeft.send(JSON.stringify(json));
        } else {
            connectionRight.send(JSON.stringify(json));
        }
        let text = "Sent: " + JSON.stringify(json, null, 4) + " \n\n";
        if (typeof window === "undefined") {
            console.log(text);
        } else {
            document.getElementById(side).innerText += text;
        }
    }

    function manageConnection(toSend, side) {
        for (let c = 0; c < toSend.length; c++) {
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
    };

    connectionLeft.onmessage = function (e) {
        document.getElementById("left").innerText += "Received: " + e.data + "\n\n";
    };

    connectionRight.onerror = function (error) {
        console.error(error);
    };

    connectionRight.onclose = function (event) {
        console.warn(event);
    };

    connectionRight.onmessage = function (e) {
        document.getElementById("right").innerText += "Received: " + e.data + "\n\n";
    };
})();
