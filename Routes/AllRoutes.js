const AuthRoutes = require("./AuthRoutes");
const ChatRoute = require("./Chat/ChatRoute");
const CourseRoute = require("./CourseRoute");
const GigsRoutes = require("./GigsRoutes");
const cardRoute = require("./PaymentCardRoutes");
const sessionRoute = require("./SessionRoute");

const Routes = require("express").Router();

Routes.use("/auth", AuthRoutes);
Routes.use("/courses", CourseRoute);
Routes.use("/sessions", sessionRoute);
Routes.use("/gigs", GigsRoutes);
Routes.use("/card", cardRoute);
Routes.use("/chat", ChatRoute);

module.exports = Routes;
