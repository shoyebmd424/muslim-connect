const Connection = require("./Config/DBConnect");
const express = require("express");
const path = require("path");
const app = require("./Config/expressConfig");
app.use(express.static(path.join(__dirname, "./client/build")));
const initializeSocketServer = require("./SocketServer/index");
const http = require("http");
const PORT = process.env.PORT || 7000;

// Establish database connection
Connection();

// Create HTTP server
const server = http.createServer(app);

initializeSocketServer(server);
// Start server
app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
server.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
