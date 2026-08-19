const mongoose = require("mongoose")

const planSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    type: {
      type: String,
      enum: ["mobility", "internet"],
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    dataLimit: {
      type: String,
      default: null,
    },

    speed: {
      type: String,
      default: null,
    },

    features: {
      type: [String],
      default: [],
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model("Plan", planSchema)