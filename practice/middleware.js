const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const validation = (req, res, next) => {
  console.log("Middleware is working.");
  next();
};
//global
//app.use(validation);
//specific
app.get("/",validation, (req, res) => res.send("Hello World!"));
app.get("/home",validation, (req, res) => res.send("Hello World!"));
app.get("/about", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port port!`));
