const Plan = require("../models/Plan")

const createPlan = async (req, res) => {
  try {
    const {
      name,
      type,
      price,
      dataLimit,
      speed,
      features,
    } = req.body

    if (!name || !type || !price) {
      return res.status(400).json({
        message: "Name, type and price are required",
      })
    }

    const plan = await Plan.create({
      name,
      type,
      price,
      dataLimit,
      speed,
      features,
    })

    return res.status(201).json({
      message: "Plan created successfully",
      data: plan,
    })

  } catch (error) {
    return res.status(500).json({
      message: "Failed to create plan",
      error: error.message,
    })
  }
}

module.exports = {
  createPlan,
}