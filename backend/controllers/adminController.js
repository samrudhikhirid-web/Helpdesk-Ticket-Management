const User = require("../models/User");
const Ticket = require("../models/Ticket");

const getAdminStats = async(req,res)=>{

    try{

        const totalUsers = await User.countDocuments(); //await is used to pause execution until promise is resolved
        const totalTickets = await Ticket.countDocuments();
        const openTickets = await Ticket.countDocuments({
            status:"Open"
        });
        const resolvedTickets = await Ticket.countDocuments({
            status:"Resolved"
        });
        const inProgressTickets = await Ticket.countDocuments({
            status:"In Progress"
        });

        res.json({
            totalUsers,
            totalTickets,
            openTickets,
            resolvedTickets,
            inProgressTickets
        });

    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};

module.exports={
    getAdminStats
};