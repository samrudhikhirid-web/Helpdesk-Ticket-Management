const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const app = express(); //instanace of express
const userRoutes = require("./routes/userRoutes");
const ticketRoutes=require("./routes/ticketRoutes");
const adminRoutes=require("./routes/adminRoutes");
const categoryRoutes=require("./routes/categoryRoutes");
const dashboardRoutes=require("./routes/dashboardRoutes")
const path=require("path");
// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/uploads",express.static(path.join(__dirname,"uploads")));
app.use("/api/users", userRoutes);
app.use("/api/tickets", ticketRoutes);
app.use("/api/admin",adminRoutes);
app.use("/api/categories",categoryRoutes);
app.use("/api/dashboard",dashboardRoutes)

// Test API
app.get("/", (req, res) => {
    res.send("Help Desk Backend Server Running");
}); 

// Server Port
const PORT = process.env.PORT || 5000;  //Use process.env.PORT if it exists, otherwise use 5000.

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});