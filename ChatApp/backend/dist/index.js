"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
// Create a WebSocket server
const wss = new ws_1.WebSocketServer({ port: 8080 });
let allSockets = [];
wss.on("connection", (socket) => {
    socket.on("message", (message) => {
        const parsedMessage = JSON.parse(message.toString());
        if (parsedMessage.type === "join") {
            console.log("User joined room: " + parsedMessage.payload.roomId);
            const user = {
                socket,
                room: parsedMessage.payload.roomId
            };
            allSockets.push(user);
        }
        if (parsedMessage.type === 'chat') {
            console.log("User sent message: " + parsedMessage.payload.message);
            // current user room
            let currentUserRoom = null;
            for (let i = 0; i < allSockets.length; i++) {
                if (allSockets[i].socket == socket) {
                    currentUserRoom = allSockets[i].room;
                    break;
                }
            }
            // send the message to all users in the same room
            for (let i = 0; i < allSockets.length; i++) {
                if (allSockets[i].room == currentUserRoom) {
                    allSockets[i].socket.send(parsedMessage.payload.message);
                }
            }
        }
    });
});
