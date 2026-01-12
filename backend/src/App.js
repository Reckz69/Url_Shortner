import express from "express";
import cors from "cors";
import urlRoutes from "./routes/url.routes.js";
import { ApiError } from "./utils/apiError.js";

const app = express();

// Global middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", urlRoutes);

// Health check
app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

// Error handler
app.use(ApiError);

export default app;
