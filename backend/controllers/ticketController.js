const Ticket=require("../models/Ticket")

//Create Ticket

const createTicket=async(req,res)=>
{
    if(req.user.role === "Admin"){
    return res.status(403).json({
        message:"Admin cannot create tickets"
    });
}
    try{
        const{
            title,
            description,
            category,
            priority
        }=req.body;
    
        // Get the latest ticket
        const lastTicket = await Ticket.findOne().sort({ createdDate: -1 });
        let ticketId = "TKT-1001";
        if (lastTicket && lastTicket.ticketId) {
            const lastNumber = parseInt(lastTicket.ticketId.split("-")[1]);
            ticketId = `TKT-${lastNumber + 1}`;
        }

        const ticket=new Ticket({
            ticketId,
            title,
            description,
            category,
            priority,
            createdBy:req.user.id
        });
        await ticket.save();
        res.status(201).json({
            message:"Ticket created successfully",ticket
        })
    }
    catch(error)
    {
        res.status(500).json({
            message:error.message      
        });
    }  
}

async (req,res)=>{

    try{
        const tickets = await Ticket.find({
            createdBy:req.user.id
        }).populate("createdBy","name email")
        res.json(tickets);

    }
     catch(error){
        res.status(500).json({
            message:error.message

        });
    }
}
// Get My Tickets

const getMyTickets = async (req, res) => {

    try {
        console.log("Logged user:", req.user);

        const tickets = await Ticket.find({
            createdBy: req.user.id

        }).populate("createdBy", "name email");
        res.json(tickets);

    }

    catch(error) {

       res.status(500).json({
            message: error.message

        });

    }
};
// Get All Tickets (Admin)

const getAllTickets = async(req,res)=>{

    try{

        const tickets = await Ticket.find()
        .populate("createdBy","name email");

        res.json(tickets);

    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};
const updateTicketStatus = async(req,res)=>{

    try{

        const ticket = await Ticket.findByIdAndUpdate(

            req.params.id,

            {
                status:req.body.status
            },

            {
                new:true
            }

        );


        res.json({

            message:"Ticket status updated",
            ticket

        });


    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};
const getPendingTickets = async(req,res)=>{

    try{

        const tickets = await Ticket.find({
            status:{
                $nin:["Resolved","Closed"]
            }
        })
        .sort({
            createdDate:-1
        })
        .limit(5)
        .populate("createdBy","name email");


        res.json(tickets);

    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};
module.exports = {
    createTicket,
    getMyTickets,
    getAllTickets,
    updateTicketStatus,
    getPendingTickets
};