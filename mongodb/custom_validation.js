var mongoose = require("mongoose");
var validator=require("validator");
mongoose
  .connect("mongodb://localhost:27017/Student_Record", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true,
  })
  .then(() => {
    console.log("Connection successful");
  })
  .catch((err) => {
    console.log("err");
  });
var recordScema = new mongoose.Schema({
  ID: {
    type: Number,
    validate(value) {
      if (value < 0) {
        throw new Error("Enter valid number");
      }
    },
  },

  Name: {
    type: String,
    required: true,
    lowercase: true,
    minlength: 7,
    maxlength: 80,
    trim: true,
    enum: ["prathamesh warekar"],
  },
  Email:{
    type:String,
    validate(value){
      if(!validator.isEmail(value)){
        throw new Error("invalid email id");
      }
    }
   }, Class: String,
});
var Personal_Record = new mongoose.model("Personal_Record", recordScema);
var createDocuments = async () => {
  try {
    var FourthStudent = Personal_Record({
      ID:0004,
      Name: "               prathamesh WarekAr            ",
      Email:"umer8khan089@gmail.com",
      Class: "deploma in IT",
    });
    const result = await Personal_Record.insertMany([FourthStudent]);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
createDocuments();
