const {
  addMessage,
  getMessage,
  getUnreadMessage,
  readAllMessage,
} = require("../../Controller/Chat/MessageController");

const MessageRoute = require("express").Router();

MessageRoute.post("/", addMessage);
MessageRoute.get("/:chatId", getMessage);
MessageRoute.get("/:chatId/unread-count/:userId", getUnreadMessage);
MessageRoute.put("/:chatId/mark-as-read/:userId", readAllMessage);
module.exports = MessageRoute;
