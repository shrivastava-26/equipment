import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/connectDb.js";
import equipRoutes from "./routes/equipment.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api", equipRoutes);

app.get("/test", (req, res) => {
  res.status(200).json({ message: "test" });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Server side error" });
});

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
