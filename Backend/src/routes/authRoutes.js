const express = require("express");
const router = express.Router();
const { registerUser,loginUser,getProfile,logoutUser } = require("../controllers/authControllers.js");
const authMiddleware=require("../middleware/authMiddleware.js")
router.post("/register", registerUser);
router.post("/login",loginUser)
router.get("/profile", authMiddleware, getProfile)
router.post("/logout", logoutUser);
module.exports = router;