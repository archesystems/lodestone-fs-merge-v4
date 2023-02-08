const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema(
  {
    userUUID: {
      type: String,
      required: true,
    },
    userJWT: {
      type: String,
    },
    username: {
      type: String,
      required: true,
      default: null,
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
    sessionJWT: {
      type: String,
    },
    testJWT: {
      type: JSON,
    },
  },
  { timestamps: true }
);

UserSchema.statics.findUser = async function (email) {
  // Check if user is registered
  const user = await this.findOne({ email });
  if (!user) console.log("User not found");
  else console.log("User found");
  return user;
};

UserSchema.statics.authUser = async function (email, password) {
  // Check for email and password
  if (!email || !password) {
    throw Error("Email and password required");
  }
  // Check if user is registered
  const user = await this.findOne({ email });
  if (!user) throw Error("User not found");
  // Authenticate user
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw Error("Incorrect password");
  // User found and authenticated
  else console.log("User found and authenticated");
  return user;
};

const userModel = mongoose.model("User", UserSchema);

module.exports = userModel;
