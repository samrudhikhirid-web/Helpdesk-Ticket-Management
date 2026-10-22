const express = require("express");
const cors = require("cors");
require("dotenv").config();


const connectDB = require("./config/db");
const app = express();
const userRoutes = require("./routes/userRoutes");
const ticketRoutes=require("./routes/ticketRoutes");
// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/tickets", ticketRoutes);
// Test API
app.get("/", (req, res) => {
    res.send("Help Desk Backend Server Running");
}); 

// Server Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});