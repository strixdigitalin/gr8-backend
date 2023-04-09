const mongoose = require("mongoose");

const userdata = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name (categoryName) is required"],
    },
    image: { type: String },
    images: [{ type: String }],
    description: String,
  },
  { timestamps: true }
);

module.exports = new mongoose.model("product_category", userdata);
