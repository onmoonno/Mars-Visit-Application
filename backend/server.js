import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import infos from "./data/infos.js";
import infosRoutes from "./routes/infosRoutes.js";
// import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config(); // Use .env variables
connectDB(); // Connect database

const port = process.env.PORT; // Use express to run backend
const app = express();

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/infos", infosRoutes); // everytime use the infosRoutes, first hit /api/infos

// app.use(notFound);
// app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));
