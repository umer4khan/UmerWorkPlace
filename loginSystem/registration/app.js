require("dotenv").config();
const express = require("express");
const app = express();
const registrationRouter = require("./router/registrationRouter");
const login = require("./router/login.js");
const registrationSchema = require("./model/schema");
const mongoose = require("./db/conn");
const hbs = require("hbs");
const path = require("path");
const cookieParser = require("cookie-parser");
const template_path = path.join(__dirname, "./templates/views");
const partial_path = path.join(__dirname, "./templates/partials");
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partial_path);
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(cookieParser())
app.use(express.urlencoded({ extended: false }));
app.use(registrationRouter);
app.use(login);
app.get("/secret",(req,res)=>{
    res.render("secret_key.hbs")
    console.log(`This is cookies   ${req.cookies.jwt}`)
})

app.listen(port, () => console.log(`Connection port is ${port}`));
