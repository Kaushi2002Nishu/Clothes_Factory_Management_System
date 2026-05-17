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
  enum: [
    "designing","fabric_cutting",
    "cutting","stitching","quality_check",
    "ironing","labeling","packing","shipping","completed"
  ],
  default: "designing"
},
  date: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Production", ProductionSchema);