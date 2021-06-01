const express = require("express");
const registration = require("../model/schema");
require("mongoose");
const Router = express.Router();
const bcrypt=require("bcryptjs");
const cookieParser=require("cookie-parser")
const jwt =require("jsonwebtoken")
Router.get("/login",async(req,res)=>{
  try{
    res.render("login")
  }catch(err){
    res.status(400).send(err)
   
  }
})
// Router.get("/secret_key",async(req,res)=>{
//   try{
//     res.render("secret_key")
//     console.log(`this is cookie parser: ${res.cookies.jwt}`)
//   }catch(err){
//     res.status(400).send(err)
//   }
// })

Router.post("/login", async (req, res) => {
  try {
    const userName = req.body.userName;
    const password = req.body.password;
    const userLogin = await registration.findOne({ userName:userName});
    const isMatch=await bcrypt.compare(password,userLogin.password)
    const token=await userLogin.generateAutToken();
    console.log(token)
    res.cookie("login",token,{
      expires:new Date(Date.now()+3000),
    httpOnly:true
    })
    if(isMatch){
  
    res.status(200).render("secret_key");
    }
    else
    {
        res.status(401).send("invalid password")
    }
  } catch {
    res.status(400).send("invalid user name");
  }
});
module.exports = Router;
