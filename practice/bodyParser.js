const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = 3000;
app.set("view engine", "pug");
app.set("views", "./views");
app.get("/", (req, res) =>
  res.render("test",{
    title: "body parser",
    message: "Hello World!",
  })
);
app.get("/:a-:b", (req, res) =>
  res.render("test", {
    title: "body parser",
    message: "Hello World!",
    sum:parseInt( req.params.a) +parseInt(),
  })
);
app.listen(port, () => console.log(`Example app listening on port port!`));
