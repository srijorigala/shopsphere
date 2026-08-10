const express = require("express");
const authRoutes = require("./routes/authRoutes");
const cookieParser = require("cookie-parser");
const app = express();

// Allows Express to read JSON request bodies
app.use(express.json());
app.use(cookieParser());
// Authentication routes
app.use("/api/auth", authRoutes);


module.exports = app;