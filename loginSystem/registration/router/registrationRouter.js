require("dotenv").config();
const express = require("express");
const router = express.Router();
const Registration = require("../model/schema");
var validator = require("email-validator");

console.log(process.env.SECRETE_KEY);
router.get("/registration", (req, res) => {
  res.status(200).render("registration");
});
router.post("/registration", async (req, res) => {
  try {
    
    const { fullName, email, userName, password, confirmPassword } = req.body;
    const user = new Registration(req.body);
    Registration.findOne({email}).then(async(already)=>{
    if(already){res.send("already exist")}
  
    else{
    if (validator.validate(email)) {
      if (password === confirmPassword) {
        const token = await user.generateAutToken();
        console.log(token);

        res.cookie("jwt", token, {
          expires: new Date(Date.now() + 30000),
          httpOnly: true,
        });
        //console.log(cookie);
        const createUser = await user.save();
        res.status(201).send(createUser);
      } else {
        res.status(400).send("password are not matched");
      }
    } else {
      res.status(400).send("Invalid email");
    }
  }})
 } catch (err) {
    res.status(500).send(err);
    console.log(err);
 }
});
router.get("/registration/readAll", async (req, res) => {
  try {
    const readUser = await Registration.find();
    res.status(200).send(readUser);
  } catch (err) {
    res.status(400).send(err);
  }
});
router.get("/registration/:userName", async (req, res) => {
  try {
    const userName = req.params.userName;
    const readUser = await Registration.findOne({ userName: userName });
    res.status(200).send(readUser);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.patch("/registration/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updateUser = await Registration.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).send(updateUser);
  } catch (err) {
    res.status(400).send(err);
    console.log(err);
  }
});
router.delete("/registration/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deleteUser = await Registration.findByIdAndDelete(id);
    res.status(200).send(deleteUser);
  } catch (err) {
    res.status(400).send(err);
    console.log(err);
  }
});
module.exports = router;
