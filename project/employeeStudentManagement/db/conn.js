const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/employeeStudentManagement", {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection successfully.");
  })
  .catch((err) => {
    console.log("connection error!");
  });
