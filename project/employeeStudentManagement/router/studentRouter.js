
const express = require("express");
const router = express.Router();
const studentSchema = require("../model/studentSchema");
//const { check, validationResult } = require("express-validator");
router.get("/studentDetails", async (req, res) => {
  try {
    res.status(200).send("This is student details form");
  } catch (err) {
    res.status(400).send(err);
  }
});
router.post("/studentDetails/addStudent",async(req,res)=>{
    try{
        const student=new studentSchema(req.body)
        const token=await student.generateToken();
        console.log(token)
        const addStudent=await student.save()
        res.status(201).send(addStudent)
    }catch(err){
        res.status(500).send(err)
        console.log(err)
    }
})
router.get("/studentDetails/readAll", async (req, res) => {
  try {
    const readStudent = await studentSchema.find();
    res.status(200).send(readStudent);
  } catch (err) {
    res.status(400).send(err);
    console.log(err)
  }
});
router.get("/studentDetails/:fullName", async (req, res) => {
  try {
    const fullName = req.params.fullName;
    const specific = await studentSchema.findOne({fullName});
    res.status(200).send(specific);
  } catch (err) {
    res.status(400).send(err);
    console.log(err)
  }
});
router.patch("/studentDetails/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const update = await studentSchema.findByIdAndUpdate(id,req.body,{
      new:true,
    });
    res.status(200).send(update);
  } catch (err) {
    res.status(400).send(err);
    console.log(err)
  }
});
router.delete("/studentDetails/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const specific = await studentSchema.findByIdAndDelete(id);
    res.status(200).send(specific);
  } catch (err) {
    res.status(400).send(err);
    console.log(err)
  }
});
module.exports = router;
