import mongoose from "mongoose";

const ProductionSchema = new mongoose.Schema({
  orderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Order",
    required: true
  },

  workerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Worker",
    required: true
  },

  stage: {
    type: String,
    enum: ["cutting", "stitching", "packing"],
    default: "cutting"
  },

  date: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Production", ProductionSchema);