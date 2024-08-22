import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
// import productRoutes from "./routes/productRoutes.js";
// import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config(); // Use .env variables
connectDB(); // Connect database

const port = process.env.PORT; // Use express to run backend
const app = express();

app.get("/", (req, res) => {
  res.send("API is running...");
});

// app.use("/api/products", productRoutes); // everytime use the productRoutes, first hit /api/products

// app.use(notFound);
// app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));
