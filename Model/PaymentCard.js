const mongoose = require("mongoose");
const CardSchema = new mongoose.Schema({
  userId: { type: mongoose.Types.ObjectId, ref: "user" },
  cardNumber: String,
  cardHolderName: String,
  expireMonth: Number,
  expireYear: Number,
  cvv: Number,
});

const Card = mongoose.model("card", CardSchema);
module.exports = Card;
