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
         const closedTickets = await Ticket.countDocuments({
            status:"Closed"
        });

        res.json({
            totalUsers,
            totalTickets,
            openTickets,
            resolvedTickets,
            inProgressTickets,
            closedTickets
        });

    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};
// Category Chart
const getCategoryData = async(req,res)=>{

    try{

        const categoryData = await Ticket.aggregate([

            {
                $group:{
                    _id:"$category",
                    count:{
                        $sum:1
                    }
                }
            }

        ]);


        res.json(categoryData);


    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};



// Priority Chart
const getPriorityData = async(req,res)=>{

    try{

        const priorityData = await Ticket.aggregate([

            {
                $group:{
                    _id:"$priority",
                    count:{
                        $sum:1
                    }
                }
            }

        ]);


        res.json(priorityData);


    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};



// Monthly Chart
const getMonthlyData = async(req,res)=>{

    try{

        const monthlyData = await Ticket.aggregate([

            {
                $group:{

                    _id:{

                        year:{
                            $year:"$createdDate"
                        },

                        month:{
                            $month:"$createdDate"
                        }

                    },

                    count:{
                        $sum:1
                    }

                }
            },

            {
                $sort:{
                    "_id.year":1,
                    "_id.month":1
                }
            }

        ]);


        res.json(monthlyData);


    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};



// Users Table
const getUsers = async(req,res)=>{

    try{

        const users = await User.find()
        .select("name email");


        res.json(users);


    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};
const getStatusData = async(req,res)=>{

    try{

        const statusData = await Ticket.aggregate([

            {
                $group:{
                    _id:"$status",
                    count:{
                        $sum:1
                    }
                }
            }

        ]);

        res.json(statusData);

    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};
module.exports={
    getAdminStats,
    getCategoryData,
    getPriorityData,
    getMonthlyData,
    getUsers,
    getStatusData
};