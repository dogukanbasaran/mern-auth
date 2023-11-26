import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
dotenv.config();

//CONNECTED TO DB
mongoose.connect(process.env.MONGO).then(() => {
    console.log("Connected to MongoDB");
})
.catch((err) => {
    console.log(err);
});

const app = express();

app.listen(3001, () => {
    console.log("Server initialized on port 3001")
});

app.use("/api/user", userRoutes);


