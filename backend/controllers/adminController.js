const User = require("../models/User");
const Ticket = require("../models/Ticket");


const getAdminStats = async(req,res)=>{

    try{

        const totalUsers = await User.countDocuments();

        const totalTickets = await Ticket.countDocuments();

        const openTickets = await Ticket.countDocuments({
            status:"Open"
        });

        const resolvedTickets = await Ticket.countDocuments({
            status:"Resolved"
        });


        res.json({
            totalUsers,
            totalTickets,
            openTickets,
            resolvedTickets
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