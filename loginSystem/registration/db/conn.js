const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/registrationApi",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false,
}).then(()=>{
    console.log("Connection Successful")
}).catch((err)=>{
    console.log("Connection err")
})