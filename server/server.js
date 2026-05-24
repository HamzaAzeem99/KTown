const express = require("express");
const http = require("http");
const path = require("path");
const { Server } = require("socket.io");

const app = express();

const server = http.createServer(app);

const io = new Server(server);

app.use(express.static(path.join(__dirname, "../client")));

io.on("connection", (socket) => {

    console.log("Player connected:", socket.id);

});

server.listen(3000, () => {

    console.log("Server running on port 3000");

});