const {
  CreateSession,
  getOneSession,
  updateSession,
  deleteSession,
  getAllSessions,
  makePayment,
  getSessionByUserId,
  completeSession,
  cancellSession,
} = require("../Controller/SessionController");

const sessionRoute = require("express").Router();

sessionRoute.post("/", CreateSession);
sessionRoute.put("/:id", updateSession);
sessionRoute.delete("/:id", deleteSession);
sessionRoute.get("/:id", getOneSession);
sessionRoute.get("/", getAllSessions);
sessionRoute.get("/user/:id", getSessionByUserId);
sessionRoute.post("/complete/:id", completeSession);
sessionRoute.post("/cancel/:id", cancellSession);
sessionRoute.post("/gig/session/", makePayment);

module.exports = sessionRoute;
