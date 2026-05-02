import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();

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