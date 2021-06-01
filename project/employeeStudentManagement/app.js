const express = require("express");
require("./db/conn");
require("./model/registerSchema");
require("./model/studentSchema");
require("./model/employeeSchema")
const registerRouter = require("./router/registerRouter");
const login = require("./router/loginRouter");
const studentDetails = require("./router/studentRouter");
const employee=require("./router/employeeRouter")

const app = express();
app.use(express.json());
app.use(registerRouter);
app.use(login);
app.use(studentDetails);
app.use(employee)

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Connection port is ${port}`));
