const Connection = require("./Config/DBConnect");
const app = require("./Config/expressConfig");
const initializeSocketServer = require("./SocketServer/index");
const http = require("http");
const PORT = process.env.PORT || 7000;

// Establish database connection
Connection();

// Create HTTP server
const server = http.createServer(app);

initializeSocketServer(server);
// Start server
server.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
