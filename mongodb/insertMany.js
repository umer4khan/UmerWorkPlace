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
  Name: String,
  Class: String,
});
var Personal_Record = new mongoose.model("Personal_Record", recordScema);
var createDocuments = async () => {
  try {
    var FirstStudent = Personal_Record({
      ID: 0001,
      Name: "Umer Khan",
      Class: "tycs",
    });

    var SecondStudent = Personal_Record({
      ID: 0002,
      Name: "hannan kazi",
      Class: "MCA",
    });
    var ThirdStudent = Personal_Record({
      ID: 0003,
      Name: "Aniket Birwadkar",
      Class: "MCS",
    });
    var FourthStudent = Personal_Record({
      ID: 0004,
      Name: "prathamesh warekar",
      Class: "deploma in IT",
    });
    const result = await Personal_Record.insertMany([
      FirstStudent,
      SecondStudent,
      ThirdStudent,
      FourthStudent,
    ]);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
createDocuments();

