const mongoose = require("mongoose");
const jwt=require("jsonwebtoken");
const employeeSchema = new mongoose.Schema({
  employeeId: {
    type: Number,
    required: true,
    unique: true,
    trim: true,
  },
  fullName: {
    type: String,
    required: true,
    trim: true,
  },
  Address: {
    type: String,
    required: true,
    trim: true,
  },
  UID: {
    type: Number,
    required: true,
    trim: true,
  },
  position: {
    type: String,
    required: true,
    trim: true,
  },
  salary: {
    type: Number,
    unique: true,
    required: true,
    trim: true,
  },
  joiningDate: {
    type: Number,
    unique: true,
    required: true,
    trim: true,
  },
  mobileNumber: {
    type: Number,
    unique: true,
    required: true,
    trim: true,
  },
  PFNo: {
    type: Number,
    unique: true,
    required: true,
    trim: true,
  },
  qualification: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  tokens:[
    {
      token:{
        type:String,
        required:true,
      }
    }
  ]
});
employeeSchema.methods.generateToken=async function(){
try{
  const token=jwt.sign({_id:this._id.toString()},'oiuyjjlddmkmskmkecnedjjnjdnhvhbhshv')
  this.tokens=this.tokens.concat({token})
  await this .save();
  console.log(token)
  return token
}
catch(err){
  console.log(err)
}
}
const EmployeeDetails=new mongoose.model("EmployeeDetails",employeeSchema)
module.exports = EmployeeDetails;
