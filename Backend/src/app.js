const express = require("express");
const authRoutes = require("./routes/authRoutes");
const cookieParser = require("cookie-parser");
const cors=require("cors")
const app = express();

// Allows Express to read JSON request bodies
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
)
// Authentication routes
app.use("/api/auth", authRoutes);


module.exports = app;