import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

const app = express();

const cors = require("cors");
app.use(cors());

app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGOURL = process.env.MONGO_URL;

mongoose
.connect(MONGOURL)
.then(() => {
    console.log("MongoDB connected succesfully");

    app.listen(PORT,() => {
      console.log(`Server is running on Port : ${PORT}`);
    });
})
.catch((error) => console.log(error));

app.use("/api/workers",workerRoutes);
app.use("/api/orders",orderRoutes);
app.use("/api/productions", productionRoutes);