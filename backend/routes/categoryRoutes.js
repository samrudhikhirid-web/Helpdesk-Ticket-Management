const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
    addCategory,
    getCategories,
    deleteCategory,
    updateCategory
} = require("../controllers/categoryController");


router.post(
    "/add",
    authMiddleware,
    addCategory
);


router.get(
    "/all",
    authMiddleware,
    getCategories
);


router.delete(
    "/delete/:id",
    authMiddleware,
    deleteCategory
);

router.put(
    "/update/:id",
    authMiddleware,
    updateCategory
);
module.exports = router;