const jwt = require("jsonwebtoken");
const User = require("../Model/User");
const crypto = require("crypto");
const { sendEmail } = require("../Middleware/EmailHandle");

const register = async (req, res) => {
  try {
    let { idProof, certificate } = req.body;
    console.log(req.body);
    if (req.files) {
      if (req.files.idProof) {
        idProof = "/idProof/" + req?.files?.idProof[0]?.originalname;
      }
      if (req?.files?.certificate) {
        certificate =
          "/certificate/" + req?.files?.certificate[0]?.originalname;
      }
    }
    req.body.idProof = idProof;
    req.body.certificate = certificate;
    const user = await User.findOne({ email: req.body.email });
    const { password, cnfPassword } = req.body;
    if (user) {
      return res
        .status(401)
        .json({ message: "This username already exist please login" });
    }
    if (password !== cnfPassword) {
      return res.status(401).json({ message: "password not matched" });
    }
    const verificationToken = crypto.randomBytes(32).toString("hex");
    req.body.verificationToken = verificationToken;
    const newUser = await new User(req.body).save();
    const verificationLink = `<a href=${req.protocol}://${req.get(
      "host"
    )}/api/auth/verify/${
      newUser.email
    }/${verificationToken} target="_blank" rel="noopener noreferrer">Click here and verify your account</a>`;
    // const verificationLink = `${req.protocol}://${req.get(
    //   "host"
    // )}/api/auth/verify/${newUser.email}/${verificationToken}`;
    await sendEmail(
      verificationLink,
      newUser.email,
      "noreply Verify your email"
    );
    res.status(201).json("your account successfully created");
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};
const resendToken = async (req, res) => {
  try {
    const verificationToken = crypto.randomBytes(32).toString("hex");
    const newUser = await User.findOne({ email: req.body.email });
    // const verificationLink = `${req.protocol}://${req.get(
    //   "host"
    // )}/api/auth/verify/${newUser.email}/${verificationToken}`;
    const verificationLink = `<a href=${req.protocol}://${req.get(
      "host"
    )}/api/auth/verify/${
      newUser.email
    }/${verificationToken} target="_blank" rel="noopener noreferrer">Click here and verify your account</a>`;
    newUser.verificationToken = verificationToken;
    await newUser.save();
    await sendEmail(
      verificationLink,
      newUser.email,
      "noreply Verify your email"
    );
    res.status(201).json(" link send successfully ");
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};
const verifyEmail = async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.params.email,
      verificationToken: req.params.token,
    });
    if (!user) {
      return res
        .status(404)
        .json({ message: "User not found or invalid token" });
    }
    // Enable the user
    user.isEnable = true;
    await user.save();
    // return res.status(200).json({ message: "User verified successfully" });
    //  res.redirect(`${process.env.clientUrl}/login`);
    res.redirect(`http://localhost:3000/login`);
  } catch (error) {
    console.error("Error verifying user:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
const login = async (req, res) => {
  try {
    console.log(req.body);
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res
        .status(401)
        .json({ message: "Your account not exist please sign up" });
    }
    if (user.isEnable == false) {
      return res
        .status(401)
        .json({ message: "your account is not verify please verify it" });
    }
    const isMatched = await user.comparedPassword(req.body.password);
    if (!isMatched) {
      return res.status(403).json({ message: "Invalid password" });
    }
    const token = jwt.sign({ id: user._id }, process.env.SECRET, {
      expiresIn: "3h",
    });
    res.status(201).json({ user, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
const getUserById = async (req, res) => {
  try {
    const users = await User.findById(req.params.id);
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const getUsersByRole = async (req, res) => {
  try {
    let { role } = req.params;
    role = role.toUpperCase();
    console.log("Requested role:", role);
    if (!["ADMIN", "CONSULTANT", "USER"].includes(role)) {
      console.log("Invalid role specified");
      return res.status(400).json({ message: "Invalid role specified" });
    }
    const users = await User.find({ role });
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const updateUserDetails = async (req, res) => {
  try {
    console.log(req.body);
    const arr = [
      "educations",
      "languages",
      "intrests",
      "skills",
      "socialMedia",
      "availableTime",
    ];
    const olduser = await User.findById(req.params.id);
    if (!olduser) {
      return res.status(404).json({ message: "User not found" });
    }
    for (const key in req.body) {
      if (arr.includes(key)) {
        req.body[key] = JSON.parse(req.body[key]);
      }
    }
    console.log(req.body);
    if (req.files) {
      req.body.profile = "/profile/pic/" + req?.files[0]?.originalname;
    }
    console.log(req.body);
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    console.log(user);
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
const forgetPassword = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res
        .status(404)
        .json({ message: "sorry your account not present" });
    }
    const otp = await generateOTP();
    const otpEmail = `<p>please do not share this one time password its your responsible OTP: <strong>${otp}</strong> </p> `;
    user.otp.otp = otp;
    user.save();

    await sendEmail(otpEmail, user.email, "noreply your OTP");
    res.status(200).json("OTP has been sent, check your email");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
const verifyOtp = async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
      "otp.otp": req.body.otp,
    });
    if (!user) {
      return res.status(404).json({ message: "wrong otp" });
    }
    user.otp.isotp = true;
    await user.save();
    res.status(200).json("otp verify successfully");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
const updatePassword = async (req, res) => {
  try {
    const { password, cnfPassword } = req.body;
    const user = await User.findOne({ email: req.body.email });
    console.log(user);
    if (user.otp.isotp !== true) {
      res.status(403).json({ message: "sorry you otp not varified" });
      return;
    }
    if (password !== cnfPassword) {
      res.status(401).json({ message: "password mismatch" });
      return;
    }
    user.password = password;
    user.otp.otp = "";
    user.otp.isotp = false;
    await user.save();
    res.status(200).json("password update successfully");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

function generateOTP() {
  // Generate a random 6-digit number
  const otp = Math.floor(100000 + Math.random() * 900000);
  return otp.toString();
}
module.exports = {
  register,
  login,
  getUsersByRole,
  getAllUsers,
  getUserById,
  updateUserDetails,
  verifyEmail,
  resendToken,
  forgetPassword,
  verifyOtp,
  updatePassword,
};
