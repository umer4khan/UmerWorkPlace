const mongoose=require("mongoose")
const jwt=require("jsonwebtoken")
const studentSchema=mongoose.Schema({
    studentId: {
        type: Number,
       // required: true,
        unique: true,
        trim: true,
      },
      fullName: {
        type: String,
       // required: true,
        trim: true,
      },
      Address: {
        type: String,
      //  required: true,
        trim: true,
      },
      UID: {
        type: Number,
        //required: true,
        trim: true,
      },
      course: {
        type: String,
       // required: true,
        trim: true,
      },
      totalFees: {
        type: Number,
        unique: true,
       // required: true,
        trim: true,
      },
      paidFess: {
        type: Number,
        unique: true,
       // required: true,
        trim: true,
      },
      remainingFees: {
        type: Number,
        unique: true,
       // required: true,
        trim: true,
      },
      courseDuration: {
        type: Number,
        unique: true,
       // required: true,
        trim: true,
      },
      joiningDate: {
        type: Number,
        unique: true,
       // required: true,
        trim: true,
      },
      certificate: {
        type: String,
        unique: true,
      //  required: true,
        trim: true,
      },
      tokens:[
          {
              token:{
                  type:String,
                 // required:true,
              }
          }
      ]
})
studentSchema.methods.generateToken=async function(req,res){
    console.log(this._id)
    const token=jwt.sign({_id:this._id.toString()},"qwertyuioplkjhgfdsazxcvbnmlokj")
    this.tokens=this.tokens.concat({token:token})
    await this.save()
    console.log(token)
    return token
}
const StudentDetails=mongoose.model("StudentDetails",studentSchema)
module.exports=StudentDetails;