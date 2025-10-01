import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "./app.js";

dotenv.config();

import Redis from "ioredis"

// await client.set('foo', 'bar');

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("Connected to MongoDB✅");
}).catch((err) => {
    console.log(err);
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});


export const redis = new Redis(process.env.REDIS_URL);



