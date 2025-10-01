import express from "express";
import cookieParser from "cookie-parser";
import path from "path";

import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cartRoutes from "./routes/cartRoute.js";
import couponRoute from "./routes/couponRoute.js"
import paymentRoute from "./routes/paymentRoute.js"
import analyticsRoutes from "./routes/analyticsRoute.js"
import cors from "cors";
import helmet from "helmet";



const app = express();
const __dirname = path.resolve();
app.use(cors({ origin: "http://localhost:5175", credentials: true }));



app.use(express.json());
app.use(cookieParser());
app.use(
    helmet({
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https://api.stripe.com"],
          "img-src": ["'self'", "https://*.stripe.com"],
          "script-src": ["'self'", "https://js.stripe.com"],
        },
      },
    })
  );

  if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/frontend/dist")));
  
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    });
  }
  
app.use("/api/v2/auth", authRoutes);
app.use("/api/v2/products", productRoutes);
app.use("/api/v2/cart", cartRoutes);
app.use("/api/v2/coupons", couponRoute);
app.use("/api/v2/payments", paymentRoute);
app.use("/api/v2/analytics", analyticsRoutes);



export default app;