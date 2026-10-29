const express=require("express")
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const upload=require("../middleware/upload")

const {
    createTicket,
    getMyTickets,
    getAllTickets,
    updateTicketStatus,
    getPendingTickets
} = require("../controllers/ticketController");

// Create ticket

router.post(
    "/create",
    authMiddleware,
    upload.single("attachment"),
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
router.get(
    "/pending",
    authMiddleware,
    getPendingTickets
);
module.exports = router;