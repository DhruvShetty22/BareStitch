import mongoose from "mongoose";
import connectDB from "./database/index.js";
import dotenv from "dotenv";
import app from "./app.js";
dotenv.config({
    path: "./.env",
});
connectDB()
    .then(() => {
        console.log("Database connected successfully");
        app.listen(process.env.PORT || 8000, () => {
            console.log(
                `Server is running on port ${process.env.PORT || 8000}`
            );
        });
    })
    .catch((err) => {
        console.error("Failed to connect to the database", err);
        process.exit(1);
    });
