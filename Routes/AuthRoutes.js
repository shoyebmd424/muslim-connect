const {
  updateUserDetails,
  register,
  login,
  getAllUsers,
  getUserById,
  getUsersByRole,
  verifyEmail,
  resendToken,
  forgetPassword,
  verifyOtp,
  updatePassword,
} = require("../Controller/AuthController");
const uploadFile = require("../Middleware/uploadFile");
const uploadMuiltiFieldFiles = require("../Middleware/uploadMultifieldFiles");

const AuthRoutes = require("express").Router();
AuthRoutes.post("/register", uploadMuiltiFieldFiles("./Public/User"), register);
AuthRoutes.post("/resend/token", resendToken);
AuthRoutes.get("/verify/:email/:token", verifyEmail);
AuthRoutes.post("/login", login);
AuthRoutes.put("/update/:id", uploadFile("./Public/User"), updateUserDetails);
AuthRoutes.put(
  "/update/img/:id",
  uploadFile("./Public/User"),
  updateUserDetails
);
AuthRoutes.get("/users", getAllUsers);
AuthRoutes.get("/users/:id", getUserById);
AuthRoutes.get("/users/by/:role", getUsersByRole);
//  forget passsword
AuthRoutes.post("/users/forget", forgetPassword);
AuthRoutes.post("/users/verify", verifyOtp);
AuthRoutes.post("/users/update/password", updatePassword);

module.exports = AuthRoutes;
