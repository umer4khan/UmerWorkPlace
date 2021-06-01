const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/first_database",{useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>console.log("connection successful")).catch((err)=>console.log(err));
