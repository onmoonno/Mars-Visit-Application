import path from "path";
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import infosRoutes from "./routes/infosRoutes.js";
import { notFound, errorHandler } from "./middlerware/errorMiddleware.js";

dotenv.config(); // Use .env variables
connectDB(); // Connect database

const port = process.env.PORT; // Use express to run backend
const app = express();

app.use(express.json()); // enable json data parsing
app.use("/api/infos", infosRoutes); // everytime use the infosRoutes, first hit /api/infos

// Resovle file path, prepare for deploy, in development use get '/', in production use static path
if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));
