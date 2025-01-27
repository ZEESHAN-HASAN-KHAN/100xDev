import WebSocket, { WebSocketServer } from "ws";

// Create a WebSocket server
const wss = new WebSocketServer({ port: 8080 });    

// let allSockets:WebSocket[] = [];
// wss.on("connection", (socket) => {
//     allSockets.push(socket);
//     console.log("User connected" );
    
//     socket.on("message", (message) => {
//         console.log("Message received: " + message.toString()  );
//         //send the message to all users
//         for (let i = 0; i < allSockets.length; i++){
//             const s = allSockets[i];
//             s.send("User  sent the server: " + message.toString());
//         }
//     });
//    socket.on("disconnect", () => {
//             allSockets = allSockets.filter(s => s !== socket);
//             console.log("User disconnected");
//    });
    
    

// })
interface User {
    socket: WebSocket;
    room: string;   
}
let allSockets: User[] = [];
wss.on("connection", (socket) => {

    socket.on("message", (message) => {
        
        const parsedMessage = JSON.parse(message.toString());
        if (parsedMessage.type === "join") {
            console.log("User joined room: " + parsedMessage.payload.roomId);
            const user: User = {
                socket,
                room: parsedMessage.payload.roomId
            }
            allSockets.push(user);
        }
        if (parsedMessage.type === 'chat') {
            console.log("User sent message: " + parsedMessage.payload.message);
            // current user room
            let currentUserRoom = null;
            for (let i = 0; i < allSockets.length; i++)
            {
                if (allSockets[i].socket==socket)
                {
                    currentUserRoom = allSockets[i].room;
                    break;
                }
            }

            // send the message to all users in the same room
            for (let i = 0; i < allSockets.length; i++)
            {
                if (allSockets[i].room == currentUserRoom)
                {
                    allSockets[i].socket.send(parsedMessage.payload.message);
                }
            }
        }
    })

})