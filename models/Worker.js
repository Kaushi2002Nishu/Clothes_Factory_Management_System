import mongoose from "mongoose";

const workerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },

  position: {
    type: String,
    required: true,
    trim: true
  },

  salary: {
    type: Number,
    required: true,
    min: 0
  },

  shift: {
    type: String,
    enum: ["morning", "evening", "night"],
    default: "morning"
  }
});

export default mongoose.model("Worker", workerSchema);