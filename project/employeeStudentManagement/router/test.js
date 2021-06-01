// // const express=require("express")
// // const router=express.Router()
// // const {check,validationResult}=require("express-validator")
// // router.post("/testUser",[
// //     check("email","invalid email").isEmail(),
// //     check("password","password is required").not().isEmpty(),
// //     check("password","please enter password more than one").isLength({min:6})
// // ],
// // (req,res)=>{
// //     const errors=validationResult(req);
// //     if(!errors.isEmpty()){
// //         return req.status(400).join({errors:errors.array()})
// //     }res.send("user route")
// // })
// // module.exports=router;


// const express = require("express");
// const router = express.Router();
// const studentSchema = require("../model/studentSchema");
// //const { check, validationResult } = require("express-validator");
// router.get("/studentDetails", async (req, res) => {
//   try {
//     res.status(200).send("This is student details form");
//   } catch (err) {
//     res.status(400).send(err);
//   }
// });
// router.post("/studentDetails/addStudent", async (req, res) => {
//   try {
//     // const fullName=req.body.fullName;
//     const student = new studentSchema(req.body);
//     const addStudent = await student.save();
//     res.status(200).send(addStudent);
//   } catch (err) {
//     res.status(400).send(err);
//     console.log(err)
//   }
// });
// router.get("/studentDetails/readAll", async (req, res) => {
//   try {
//     const readStudent = await studentSchema.find();
//     res.status(200).send(readStudent);
//   } catch (err) {
//     res.status(400).send(err);
//     console.log(err)
//   }
// });
// router.get("/studentDetails/:fullName", async (req, res) => {
//   try {
//     const fullName = req.params.fullName;
//     const specific = await studentSchema.findOne({fullName});
//     res.status(200).send(specific);
//   } catch (err) {
//     res.status(400).send(err);
//     console.log(err)
//   }
// });
// router.patch("/studentDetails/:id", async (req, res) => {
//   try {
//     const id = req.params.id;
//     const update = await studentSchema.findByIdAndUpdate(id,req.body,{
//       new:true,
//     });
//     res.status(200).send(update);
//   } catch (err) {
//     res.status(400).send(err);
//     console.log(err)
//   }
// });
// router.delete("/studentDetails/:id", async (req, res) => {
//   try {
//     const id = req.params.id;
//     const specific = await studentSchema.findByIdAndDelete(id);
//     res.status(200).send(specific);
//   } catch (err) {
//     res.status(400).send(err);
//     console.log(err)
//   }
// });
// module.exports = router;
const express = require('express')
const mongoose=require("../db/conn")
const app = express()
app.use(express.json())
const port = 3000
const student=require("../model/studentSchema")
app.post("/addition",(req,res)=>{
  try{var totalFees=req.body.totalFees
  var paidFees=req.body.paidFees
  var remaining=Number(totalFees)+Number(paidFees)
  res.status(201).send(remaining)
  console.log(remaining)
  }catch(err){
    //res.status(400).send(err)
    console.log(err)
  }
})
app.listen(port, () => console.log(`Example app listening on port port!`))



