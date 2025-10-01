import express from "express";
import cookieParser from "cookie-parser";
import path from "path";

import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cartRoutes from "./routes/cartRoute.js";
import couponRoute from "./routes/couponRoute.js"
import paymentRoute from "./routes/paymentRoute.js"

const app = express();
const __dirname = path.resolve();



app.use(express.json());
app.use(cookieParser());

app.use("/api/v2/auth", authRoutes);
app.use("/api/v2/products", productRoutes);
app.use("/api/v2/cart", cartRoutes);
app.use("/api/v2/coupon", couponRoute);
app.use("/api/v2/payment", paymentRoute);




export default app;