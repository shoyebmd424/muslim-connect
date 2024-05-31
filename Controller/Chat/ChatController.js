const ChatModel = require("../../Model/Chat/Chats");

const createChat = async (req, res) => {
  try {
    console.log(req.body);
    const chat = await ChatModel.findOne({
      members: { $all: [req.body.senderId, req.body.receiverId] },
    });
    console.log(chat);
    if (chat) {
      return res.status(201).json("chat already found");
    }
    const newChat = await new ChatModel({
      members: [req.body.senderId, req.body.receiverId],
    }).save();
    res.status(201).json("chat created successfully");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
const userChats = async (req, res) => {
  try {
    const chat = await ChatModel.find({
      members: { $in: [req.params.userId] },
    });
    res.status(200).json(chat);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
const findChat = async (req, res) => {
  try {
    const chat = await ChatModel.findOne({
      members: { $all: [req.params.firstId, req.params.secondId] },
    });
    res.status(200).json(chat);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createChat, userChats, findChat };
