const { Mongoose } = require("mongoose");

const customerSchema=Mongoose.Schema({
    ID:{
        type:Number,
        required:true,
        trim:true,
        unique:true,
    },
    name:{
        type:String,
        required:true,
        trim:true
    },
    Address:{
        type:String,
        required:true,
        trim:true,
    },
    mobileNo:{
        type:Number,
        required:true,
        trim:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
    },
})