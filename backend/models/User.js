const mongoose=require ("mongoose")
const userschema=new mongoose.Schema({
    name:
    {
        type: String,
        required:true,
        trim:true
    },
    email:
    {
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true
    },
    mobile:
    {
        type:String,
        required:true
    },
    password:
    {
        type:String,
        required:true
    },
    role:
    {
        type:String,
        enum:["User","Admin"],
        default:"User"
    }
    },
    {
        timestamps:true
    
    });

    module.exports=mongoose.model("User",userSchema);