const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

// Load environment variables
dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Serve uploaded PDFs
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Test Route
app.get("/", (req, res) => {
  res.send("Health Portal Backend Running 🚀");
});

// Import Routes (we will create later)
const authRoutes = require("./routes/authRoutes");
const reportRoutes = require("./routes/reportRoutes");

// Use Routes
app.use("/api/auth", authRoutes);
app.use("/api/reports", reportRoutes);

// PORT
const PORT = process.env.PORT || 5000;

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});