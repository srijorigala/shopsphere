const express = require("express");
const authRoutes = require("./routes/authRoutes");
const planRoutes = require("./routes/planRoutes")
const cookieParser = require("cookie-parser");
const adminPlanRoutes = require("./routes/adminPlanRoutes")
const cors=require("cors")
const app = express();

// Allows Express to read JSON request bodies
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  },{
    origin: "http://localhost:4173",
    credentials: true,
  })
)
// Authentication routes
app.use("/api/auth", authRoutes);
app.use("/api/admin/plans", adminPlanRoutes)
app.use("/api/plans", planRoutes)

module.exports = app;