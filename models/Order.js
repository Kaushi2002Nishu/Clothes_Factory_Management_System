import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  customerName: String,
  product: String,
  quantity: Number,
  status: {
    type: String,
    default: "pending"
  }
});

export default mongoose.model("Order", orderSchema);