import mongoose from "mongoose";

const ProductionSchema = new mongoose.Schema({
  
  orderId: ObjectId,
  workerId: ObjectId,
  stage: "cutting" | "stitching" | "packing",
  date: Date

});

module.exports = mongoose.model("Production", ProductionSchema);
