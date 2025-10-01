import express from "express";
import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cartRoutes from "./routes/cartRoute.js";
import couponRoute from "./routes/couponRoute.js"
import cookieParser from "cookie-parser";
const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/v2/auth", authRoutes);
app.use("/api/v2/products", productRoutes);
app.use("/api/v2/cart", cartRoutes);
app.use("/api/v2/coupon", couponRoute);



export default app;