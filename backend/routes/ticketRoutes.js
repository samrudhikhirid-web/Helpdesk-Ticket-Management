const express=require("express")
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
    createTicket,
    getMyTickets,
    getAllTickets,
    updateTicketStatus
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
router.get(
    "/all",
    authMiddleware,
    getAllTickets
);
router.put(
    "/update-status/:id",
    authMiddleware,
    updateTicketStatus
);
module.exports = router;