const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
    getAdminStats,
    getCategoryData,
    getPriorityData,
    getMonthlyData,
    getUsers,
    getStatusData
} = require("../controllers/adminController");

router.get(
    "/stats",
    authMiddleware,
    getAdminStats
);

router.get(
"/category",
authMiddleware,
getCategoryData
);


router.get(
"/priority",
authMiddleware,
getPriorityData
);


router.get(
"/monthly",
authMiddleware,
getMonthlyData
);


router.get(
"/users",
authMiddleware,
getUsers
);

router.get(
"/status",
authMiddleware,
getStatusData
);
module.exports = router;