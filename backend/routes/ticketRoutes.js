const express=require("express")
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
    createTicket,
    getMyTickets
} = require("../controllers/ticketController");


// Create ticket

router.post(
    "/create",
    authMiddleware,
    createTicket
);

// Get user's tickets

router.get(
    "/my",
    authMiddleware,
    getMyTickets
);
module.exports = router;