const {
  CreateCard,
  updateCard,
  deleteCard,
  getOneCard,
  getCardsByUserId,
  getAllCards,
  makePayment,
  attackPayment,
  getCardFromStrip,
  createPayment,
  confirmPayment,
} = require("../Controller/PaymentController");

const cardRoute = require("express").Router();

cardRoute.post("/", CreateCard);
cardRoute.put("/:id", updateCard);
cardRoute.delete("/:id", deleteCard);
cardRoute.get("/:id", getOneCard);
cardRoute.get("/user/:id", getCardsByUserId);
cardRoute.get("/", getAllCards);
cardRoute.get("/payment/create-payment-intent", makePayment);
cardRoute.post("/payment/method/attach", attackPayment);
cardRoute.get("/payment/methods", getCardFromStrip);
cardRoute.post("/payment/create", createPayment);
cardRoute.post("/payment/confirm", confirmPayment);

module.exports = cardRoute;
