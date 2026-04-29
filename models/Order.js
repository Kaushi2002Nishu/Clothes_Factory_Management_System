import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  custmerName: String,
  productType: String,
  quantity: Number,
  status: "pending" | "in production" | "completed"
});

module.exports = mongoose.model("Order", OrderSchema);
