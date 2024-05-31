const socketIo = require("socket.io");

module.exports = function initializeSocketServer(server) {
  const io = socketIo(server, {
    cors: {
      origin: ["http://localhost:3001", "http://localhost:3000"],
    },
  });

  let activeUsers = [];

  io.on("connection", (socket) => {
    socket.on("new-user-add", (newUserId) => {
      if (!activeUsers.some((user) => user.userId === newUserId)) {
        activeUsers.push({
          userId: newUserId,
          socketId: socket.id,
        });
      }
      io.emit("get-users", activeUsers);
    });

    socket.on("send-message", (data) => {
      const { receiverId } = data;
      const user = activeUsers.find((user) => user.userId === receiverId);
      console.log("sending from socket to :", receiverId);
      console.log("data", data);
      if (user) {
        io.to(user.socketId).emit("receive-message", data);
      }
    });

    socket.on("disconnect", () => {
      activeUsers = activeUsers.filter((user) => user.socketId !== socket.id);
      console.log("user disconnected", activeUsers);
      io.emit("get-users", activeUsers);
    });
  });
};
