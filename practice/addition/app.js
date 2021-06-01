const bodyParser = require('body-parser')
const express = require('express')
const app = express()
app.use(bodyParser.urlencoded({extended:true}))
const port = 3000
app.set("view engine","hbs")
app.get('/', (req, res) =>{
 res.render("additio")})
 app.post("/",(req,res)=>{
const n1=Number(req.body.num1);
const n2=Number(req.body.num2);
var add=Number(req.body.add)
add=n1+n2;
res.send(""+add)
console.log(add)

 })

app.listen(port, () => console.log(`Example app listening on port port!`))