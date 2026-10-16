const mongoose=require("mongoose")

const ticketSchema = new mongoose.Schema({
    title:
    {
        type: String,
        required:true
    },
    description:
    {
        type:String,
        required:true
    },
    category:
    {
        type:String,
        required:true
    },
    priority:
    {
        type:String,
        required:true
    },
    status:
    {
        type:String,
        default:"Open"
    },
    createdBy:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    assignedTo:
    {
        type:String,
        default:"Admin"
    },
    createdDate:
    {
        type:Date,
        default:Date.now
    },
    updatedDate:
    {
        type:Date,
        default:Date.now
    }
})
module.exports=mongoose.model("Ticket",ticketSchema);