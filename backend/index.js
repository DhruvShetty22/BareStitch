import mongoose from "mongoose";
import connectDB from "./database/index.js";
import express from "express";
import dotenv from "dotenv";
dotenv.config({
    path: "./.env",
});

connectDB();

const app = express();

app.get("/", (req, res) => {
    res.send("API is running");
});

app.listen(process.env.PORT || 8000, () => {
    console.log(`Server running on port ${process.env.PORT || 8000}`);
});
