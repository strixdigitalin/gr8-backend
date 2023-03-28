const mongoose = require("mongoose");

const userdata = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name (name) is required"],
    },
    email: String,
    contact: Number,
    description: String,
  },
  { timestamps: true }
);

module.exports = new mongoose.model("leads", userdata);
