import mongoose from "mongoose";

const workerSchema = new mongoose.Schema({
  name: String,
  position: String,
  salary: Number,
  shift: String
});

export default mongoose.model("Worker", workerSchema);