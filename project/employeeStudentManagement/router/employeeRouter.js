const express = require("express");
const router = express.Router();
const employeeSchema = require("../model/employeeSchema");
router.get("/employee", async (req, res) => {
    try{
  res.status(200).send("This is EmployeeManagement");
}catch(err){
    res.status(200).send(err);
}
});
router.post("/employee/addEmployee", async (req, res) => {
  try {
    const employee = new employeeSchema(req.body);
    const token=await employee.generateToken();
    console.log(token)
    const addEmployee = await employee.save();
    res.status(201).send(addEmployee);
  } catch (err) {
    res.status(500).send(err);
    console.log(err);
  }
});
router.get("/employee/readAll", async (req, res) => {
  try {
    const readEmployee = await employeeSchema.find();
    res.status(200).send(readEmployee);
  } catch (err) {
    res.status(400).send(err);
    console.log(err);
  }
});
router.get("/employee/:fullName", async (req, res) => {
  try {
    const fullName = req.params.fullName;
    const specific = await employeeSchema.findOne({ fullName });
    res.status(200).send(specific);
  } catch (err) {
    res.status(400).send(err);
    console.log(err);
  }
});
router.patch("/employee/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const update = await employeeSchema.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).send(update);
  } catch (err) {
    res.status(400).send(err);
    console.log(err);
  }
});
router.delete("/employee/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const specific = await employeeSchema.findByIdAndDelete(id);
    res.status(200).send(specific);
  } catch (err) {
    res.status(400).send(err);
    console.log(err);
  }
});

module.exports=router;