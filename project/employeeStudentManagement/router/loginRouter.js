const express = require("express");
const router = express.Router();
const Registration = require("../model/registerSchema");
const mongoose = require("mongoose");
const bcrypt=require("bcryptjs")
router.post("/login", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const login = await Registration.findOne({ email: email });
    const isMatch=await bcrypt.compare(password,login.password)
    const token = await login.generateAuthToken();
    console.log(token);
    if (isMatch) {
       
      res.status(200).send("login successfully");
    } else {
      res.status(400).send("Invalid password");
    }
  } catch(err){
    res.status(400).send("Invalid user name");
console.log(err)
  }
});
module.exports = router;
