const mongoose = require("mongoose");

const userdata = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Name (name) is required"],
    },
    description: String,
    contact: Number,
    position: String,
    location: String,
    salary: String,
  },

  { timestamps: true }
);

module.exports = new mongoose.model("job", userdata);
