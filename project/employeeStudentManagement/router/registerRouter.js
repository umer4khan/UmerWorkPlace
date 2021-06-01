const express = require("express");
const Registration = require("../model/registerSchema");
const validator = require("email-validator");
const router = express.Router();
router.get("/", async (req, res) => {
  try {
    res.status(200).send("This is your dashboard");
  } catch (err) {
    res.status(400).send(err);
  }
});
router.post("/registration", async (req, res) => {
  try {
    const {
      fullName,
      email,
      type,
      mobileNo,
      password,
      confirmPassword,
    } = req.body;
    const user = new Registration(req.body);
    if (validator.validate(email)) {
      if (password === confirmPassword) {
       
        const token = await user.generateAuthToken();
        console.log(token);
        const createUser = await user.save();
        res.status(201).send(createUser);
      } else {
        res.status(400).send("password are not match");
      }
    } else {
      res.status(400).send("Invalid email");
    }
  } catch (err) {
    res.status(500).send(err);
    console.log(err);
  }
});
router.get("/registration", async (req, res) => {
  try {
    const readUser = await Registration.find();
    res.status(200).send(readUser);
  } catch (err) {
    res.status(400).send(err);
  }
});
router.get("/registration/:fullName", async (req, res) => {
  try {
    const fullName = req.params.fullName;
    const readUser = await Registration.findOne({ fullName });
    res.status(200).send(readUser);
  } catch (err) {
    res.status(400).send(err);
    console.log(err);
  }
});
router.patch("/registration/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const readUser = await Registration.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).send(readUser);
  } catch (err) {
    res.status(400).send(err);
    console.log(err);
  }
});
router.delete("/registration/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const readUser = await Registration.findByIdAndDelete(id);
    res.status(200).send(readUser);
  } catch (err) {
    res.status(400).send(err);
  }
});
module.exports = router;
