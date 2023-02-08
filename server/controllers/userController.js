const { default: mongoose } = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const uuid = require("uuid");
// const { forwardAuthenticated } = require("../services/auth");

// Load User Model
const User = require("../models/userModel");

// Find all users
const getUsers = async (req, res) => {
  const users = await User.find({}).sort({ createdAt: -1 });
  res.status(200).json(users);
};

// @desc    Find a single user by ID
// @route   GET /api/users/me
// @access  Private
const getUser = async (req, res) => {
  const { id } = req.params;
  // Check if id is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Internal Error" });
  }
  // Find user by id
  const user = await User.findById(id);
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  res.status(200).json(user);
};

// @desc    Login a user
// @route   POST /api/users/login
// @access  Public
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userAuth = await User.authUser(email, password);
    if (!userAuth) {
      throw Error("User authentication failed");
    } else {
      // Generate a JWT for the login session
      const newSessionJWT = generateSessionJWT(userAuth.userUUID);
      // Update user to store the new session JWT
      const status = await User.updateOne(
        { email: email },
        { sessionJWT: newSessionJWT }
      );
      res.status(200).json({
        _id: userAuth._id,
        username: userAuth.username,
        email: userAuth.email,
        sessionJWT: newSessionJWT,
      });
      console.log("Login Successful");
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log("Login Failed");
  }
};

// @desc    Logout a user
// @route   POST /api/users/logout
// @access  Private
const logoutUser = async (req, res) => {
  const { email } = req.body;
  try {
    // Check if user exists
    const userFound = await User.findUser(email);
    if (!userFound) {
      throw Error("User not found");
    } else {
      // Update user to revoke session JWT
      const status = await User.updateOne(
        { email: email },
        { sessionJWT: "" }
      );
      res.status(200).json({
        _id: userFound._id,
        email: userFound.email,
        sessionJWT: "",
      });
      console.log("Logout Successful");
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
    console.log("Logout Failed");
  }
};

// @desc    Register a new user
// @route   POST /api/users/register
// @access  Public
const createUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    // Check if user exists
    const userAuth = await User.findUser(email);
    if (userAuth) {
      throw Error("User already exists");
    } else {
      // Hash password
      const salt = await bcrypt.genSalt(12);
      const hashedPassword = await bcrypt.hash(password, salt);
      // Create user
      const userUUID = uuid.v4(); // Assign a UUID to the new user
      const userJWT = generateUserJWT(userUUID); // Generate a non-expiring user JWT
      const newUser = await User.create({
        userUUID: userUUID,
        userJWT: userJWT,
        username: username,
        email: email,
        password: hashedPassword,
        sessionJWT: "",
      });
      res.status(201).json(newUser);
      console.log("Registration Successful");
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log("Registration Failed");
  }
};

// Delete a single user
const deleteUser = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Internal Error!" });
  }
  const user = await User.findOneAndDelete({ _id: id });
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  res.status(200).json(user);
};

// Update a single user
const updateUser = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Internal Error!" });
  }
  const user = await User.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  res.status(200).json(user);
};

// Generate User JWT
const generateUserJWT = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET_KEY || "SuperSecretKey", {
    expiresIn: "120y", // Maximum human lifespan
  });
};

// Generate Session JWT
const generateSessionJWT = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET_KEY || "SuperSecretKey", {
    expiresIn: "7d", // Expires in 1 week
  });
};

module.exports = {
  getUsers,
  getUser,
  loginUser,
  logoutUser,
  createUser,
  deleteUser,
  updateUser,
};
