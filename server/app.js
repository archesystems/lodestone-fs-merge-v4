require("dotenv").config();
const PORT = process.env.PORT || 3000;

const express = require("express");
const mongoose = require("mongoose");

// Create express app
const app = express();

// Middleware Configuration
var cors = require('cors')

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static(__dirname + "/public/"));
  // Handle Single Page Applications
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// Connect to MongoDB, use .env file
mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.mongoDbConnStr)
  .then(() => {
    // Run server and listen for requests
    app.listen(PORT, () => {
      console.log(`Server Running on PORT ${PORT}`);
      console.log("MongoDB Connected");
    });
  })
  .catch((err) => console.log(err));

// Use middleware
app.use(express.json());
app.use(cors());

// Routes (leave at bottom for CORS)
const userRoutes = require("./routes/api/users");
app.use("/", userRoutes);

// Log the methods and paths when users access the site (dev only)
app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});
