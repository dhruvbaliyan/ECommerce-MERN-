import express from "express";
import cookieParser from "cookie-parser";
import path from "path";

import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cartRoutes from "./routes/cartRoute.js";
import couponRoute from "./routes/couponRoute.js";
import paymentRoute from "./routes/paymentRoute.js";
import analyticsRoutes from "./routes/analyticsRoute.js";

import cors from "cors";
import helmet from "helmet";

const app = express();
const __dirname = path.resolve();

// CORS configuration
const allowedOrigins = [
  "http://localhost:5175", // development
  "https://ecommerce-mern-pkl1.onrender.com", // production
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (!allowedOrigins.includes(origin)) {
        return callback(
          new Error("CORS policy does not allow access from this origin."),
          false
        );
      }
      return callback(null, true);
    },
    credentials: true,
  })
);

// Middleware
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

// API routes
app.use("/api/v2/auth", authRoutes);
app.use("/api/v2/products", productRoutes);
app.use("/api/v2/cart", cartRoutes);
app.use("/api/v2/coupons", couponRoute);
app.use("/api/v2/payments", paymentRoute);
app.use("/api/v2/analytics", analyticsRoutes);

// Serve frontend in production
if (process.env.NODE_ENV === "production") {
  const frontendPath = path.join(__dirname, "frontend", "dist");
  app.use(express.static(frontendPath));

  // // React SPA catch-all
  // app.get("*", (req, res) => {
  //   res.sendFile(path.join(frontendPath, "index.html"));
  // });
}

export default app;
