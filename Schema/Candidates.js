const mongoose = require("mongoose");

const userdata = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name (name) is required"],
    },
    resume: String,
    job: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "job",
    },
  },
  { timestamps: true }
);

module.exports = new mongoose.model("candidates", userdata);
