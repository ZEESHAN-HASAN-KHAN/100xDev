import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

//Server listens for incoming connections
wss.on('connection', function (socket)
{
    console.log('Client connected');
    socket.on("message", (e) => {
        if (e.toString() === "ping")
        {
            socket.send("pong");
        }
    });
    // setInterval(() => {
    //     socket.send('Current time: ' + new Date().toLocaleTimeString());
    // }, 500);
    // socket.send('Hello, World!');
   
});
    
// console.log('Hello, World!');