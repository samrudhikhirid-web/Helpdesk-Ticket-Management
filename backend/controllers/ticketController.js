const Ticket=require("../models/Ticket")

//Create Ticket

const createTicket=async(req,res)=>
{
    try{
        const{
            title,
            description,
            category,
            priority
        }=req.body;

        const ticket=new Ticket({
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

module.exports = {
    createTicket,
    getMyTickets
};