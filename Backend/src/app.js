const express = require("express");
const authRoutes = require("./routes/authRoutes");

const app = express();

// Allows Express to read JSON request bodies
app.use(express.json());

// Authentication routes
app.use("/api/auth", authRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("ShopSphere API is running");
});

module.exports = app;