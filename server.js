import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

console.log("MONGO_URI =", process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

import workerRoutes from "./routes/workerRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import productionRoutes from "./routes/productionRoutes.js";

app.use("/api/workers", workerRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/productions", productionRoutes);

app.get("/", (req, res) => {
  res.send("Clothes Factory API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});