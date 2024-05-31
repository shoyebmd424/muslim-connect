const {
  createChat,
  userChats,
  findChat,
} = require("../../Controller/Chat/ChatController");
const MessageRoute = require("./MessageRoute");

const ChatRoute = require("express").Router();
ChatRoute.use("/message", MessageRoute);
ChatRoute.post("/", createChat);
ChatRoute.get("/:userId", userChats);
ChatRoute.get("/find/:firstId/:secondId", findChat);

module.exports = ChatRoute;
