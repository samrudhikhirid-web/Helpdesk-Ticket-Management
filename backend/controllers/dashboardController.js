const Ticket = require("../models/Ticket");
const User = require("../models/User");

// Dashboard Cards
const getDashboardStats = async (req, res) => {

    try {

        const totalUsers = await User.countDocuments();

        const totalTickets = await Ticket.countDocuments();

        const openTickets = await Ticket.countDocuments({
            status: "Open"
        });

        const resolvedTickets = await Ticket.countDocuments({
            status: "Resolved"
        });

        const closedTickets = await Ticket.countDocuments({
            status: "Closed"
        });

        const inProgressTickets = await Ticket.countDocuments({
            status: "In Progress"
        });

        res.json({
            totalUsers,
            totalTickets,
            openTickets,
            resolvedTickets,
            closedTickets,
            inProgressTickets
        });

    }

    catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// Category Analysis
const getCategoryData = async (req, res) => {

    try {

        const categoryData = await Ticket.aggregate([

            {
                $group: {
                    _id: "$category",
                    count: {
                        $sum: 1
                    }
                }
            }

        ]);

        res.json(categoryData);

    }

    catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// Priority Analysis
const getPriorityData = async (req, res) => {

    try {

        const priorityData = await Ticket.aggregate([

            {
                $group: {
                    _id: "$priority",
                    count: {
                        $sum: 1
                    }
                }
            }

        ]);

        res.json(priorityData);

    }

    catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// Monthly Trend
const getMonthlyData = async (req, res) => {

    try {

        const monthlyData = await Ticket.aggregate([

            {
                $group: {

                    _id: {

                        year: {
                            $year: "$createdDate"
                        },

                        month: {
                            $month: "$createdDate"
                        }

                    },

                    count: {
                        $sum: 1
                    }

                }

            },

            {
                $sort: {
                    "_id.year": 1,
                    "_id.month": 1
                }
            }

        ]);

        res.json(monthlyData);

    }

    catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// Users
const getUsers = async (req, res) => {

    try {

        const users = await User.find()
            .select("name email");

        res.json(users);

    }

    catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// Status Analysis
const getStatusData = async (req, res) => {

    try {

        const statusData = await Ticket.aggregate([

            {
                $group: {
                    _id: "$status",
                    count: {
                        $sum: 1
                    }
                }
            }

        ]);

        res.json(statusData);

    }

    catch(error) {

        res.status(500).json({
            message: error.message
        });

    }

};
module.exports = {

    getDashboardStats,
    getCategoryData,
    getPriorityData,
    getMonthlyData,
    getUsers,
    getStatusData
};