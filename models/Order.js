import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  customerName: String,
  product: {
    type: String,
    enum: ["shirt", "frocks", "trouser","bloues","shorts","denim shirts"],
    default: "shirt",

  },
  quantity: Number,
  status: {
    type: String,
    default: "pending"
  }
});

export default mongoose.model("Order", orderSchema);

 