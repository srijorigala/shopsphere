const Plan = require("../models/Plan")

const getPlans = async (req, res) => {
  try {
    const { type } = req.query

    const filter = {
      isActive: true,
    }

    if (type) {
      filter.type = type
    }

    const planDetails = await Plan.find(filter)

    return res.status(200).json({
      message: "Plan details fetched successfully",
      data: planDetails,
    })

  } catch (error) {
    return res.status(500).json({
      message: "Failed to fetch plan details",
      error: error.message,
    })
  }
}

module.exports = {
  getPlans,
}