# ServerTest
A tool used for integration testing the server.

## How to use
To use the tool, just open the `index.htm` in any browser. Maybe it is necessary to change the port of the websocket connection, this can easily be done in the `main.js`.

All messages should be defined in the `messages.js` file. It is only necessary to define the payload, not the complete message. The order and time of the messages can be defined in the `config.js`, it consists of two arrays `sendLeft` and `sendRight`. Each element of the array is an object with three fields: `message` which is the actual payload, `name` which is the name of the payload and `time` which is the time at which the message should be send (in milliseconds since start).
