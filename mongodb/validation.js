var mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/Student_Record", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection successful");
  })
  .catch((err) => {
    console.log("err");
  });
var recordScema = new mongoose.Schema({
  ID: Number,
  Name: {
    type: String,
    required: true,
    lowercase: true,
    minlength:7,
    maxlength:80,
    trim:true,
    enum:["prathamesh warekar"],
  },
  Class: String,
});
var Personal_Record = new mongoose.model("Personal_Record", recordScema);
var createDocuments = async () => {
  try {
    var FourthStudent = Personal_Record({
      ID: 0004,
      Name: "               prathamesh WarekAr            ",
      Class: "deploma in IT",
    });
    const result = await Personal_Record.insertMany([FourthStudent]);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
createDocuments();