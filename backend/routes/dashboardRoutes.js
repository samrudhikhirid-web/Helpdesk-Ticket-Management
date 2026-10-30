const express = require("express");

const router = express.Router();

const {

    getDashboardStats,
    getCategoryData,
    getPriorityData,
    getMonthlyData,
    getUsers,
    getStatusData

} = require("../controllers/dashboardController");

router.get("/stats", getDashboardStats);

router.get("/categories", getCategoryData);

router.get("/priorities", getPriorityData);

router.get("/monthly", getMonthlyData);

router.get("/users", getUsers);

router.get("/status", getStatusData);

module.exports = router;