import mongoose from "mongoose";

const workerSchema = new mongoose.Schema({
  name: String,
  position: String,
  salary: Number,
  shift: String
});

module.exports = mongoose.model("Worker", workerSchema);