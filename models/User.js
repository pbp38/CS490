const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
    username:{
        type:String,
        require: true,
        unique:true
    },
    password:{
        type:String,
        require: true
    },
    profilePicture:{
        type:String,
        default:""
    },
    isAdmin:{
        type:Boolean,
        deault: false
    },
    breed:{
        type:String,
        max:50,
    },
    gender:{
        type:String,
        max:10
    },
    isNeuturedOrSpayed:{
        type:Boolean
    }    
},
{ timestamps: true }

);



module.exports = mongoose.model("User", UserSchema)