const express = require("express");
const router = express.Router();

const { registerUser } = require("../controllers/authControllers.js");
console.log("registerUser type:", typeof registerUser);

router.post("/register", registerUser);

module.exports = router;