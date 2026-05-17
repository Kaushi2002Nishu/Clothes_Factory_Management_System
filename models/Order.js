import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  customerName: {
    type: String,
    required: true
  },

  product: {
    type: String,
    enum: ["shirt", "frocks", "trouser", "blouse", "shorts", "denim_shirt"],
    required: true
  },

  quantity: {
    type: Number,
    required: true
  },

  status: {
    type: String,
    default: "pending"
  }
});

export default mongoose.model("Order", orderSchema);