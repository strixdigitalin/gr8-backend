const mongoose = require("mongoose");

const userdata = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "Product is required"],
      ref: "product_category",
    },
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

module.exports = new mongoose.model("enquiry", userdata);
