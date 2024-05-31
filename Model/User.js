const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const uppercaseRegex = /[A-Z]/;
const lowercaseRegex = /[a-z]/;
const numberRegex = /[0-9]/;
const specialCharacterRegex = /[\W_]/;

const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    middlename: String,
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
      enum: ["Male", "Female", "Other"],
    },
    phone: String,
    isEnable: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      required: true,
    },
    otp: { isotp: { type: Boolean, default: false }, otp: String },
    role: {
      type: String,
      required: true,
      enum: ["ADMIN", "CONSULTANT", "STUDENT"],
    },
    profile: String,
    certificate: String,
    idProof: String,
    rating: String,
    description: String,
    location: String,
    availableTime: Array,
    educations: Array,
    languages: Array,
    intrests: Array,
    skills: Array,
    socialMedia: Array,
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  const user = this;

  // Check if the password field is modified or new
  if (!user.isModified("password")) return next();

  // Check if the password meets the validation criteria
  if (
    user.password.length < 8 ||
    !uppercaseRegex.test(user.password) ||
    !lowercaseRegex.test(user.password) ||
    !numberRegex.test(user.password) ||
    !specialCharacterRegex.test(user.password)
  ) {
    const error = new Error(
      "Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, 1 special character, and be at least 8 characters long"
    );
    return next(error);
  }

  // Hash the password
  const hash = await bcrypt.hash(user.password, 10);
  user.password = hash;
  next();
});

userSchema.methods.comparedPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", userSchema);
module.exports = User;

// email: 'kecicif666@rencr.com', password: 'Kecicif666@'
// { email: 'xaruci@clip.lat', password: 'Shoyebmd424@' }
