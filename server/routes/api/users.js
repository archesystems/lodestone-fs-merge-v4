require("dotenv").config();

const express = require("express");
const router = express.Router();

const {
  getUsers,
  getUser,
  loginUser,
  logoutUser,
  createUser,
  deleteUser,
  updateUser,
} = require("../../controllers/userController");

// GET all users
router.get("/", getUsers);

// GET single user
router.get("/:id", getUser);

// POST login user
router.post("/login", loginUser);

// GET logout user
router.post("/logout", logoutUser);

// POST register new user
router.post("/register", createUser);

// DELETE single user
router.delete("/:id", deleteUser);

// UPDATE single user
router.patch("/:id", updateUser);

module.exports = router;
