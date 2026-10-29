const mongoose=require("mongoose")

const ticketSchema = new mongoose.Schema({
    ticketId:{
        type:String,
        unique:true
    },
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
    },
    attachment:
    {
        type:String,
        default:""
    }
    
})
module.exports=mongoose.model("Ticket",ticketSchema);