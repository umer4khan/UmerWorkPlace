// // const express = require('express')
// // const { check, validationResult } = require('express-validator');
// // const bodyParser=require("body-parser");
// // const { urlencoded } = require('body-parser');
// // const app = express()
// // const port = 3000
// // const urlencodedParser=bodyParser.urlencoded({extended:false})
// // app.get('/', (req, res) => res.send('Hello World!'))
// // app.post("/home",(req,res)=>{
// //     res.send("express Validto")
// // })
// // app.listen(port, () => console.log(`Example app listening on port port!`))


// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');
// const { body, validationResult } = require('express-validator');
// const port = 2022;

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// app.post('/register', (req, res) => {});

// app.listen(port);
// console.log('See where it all happens at http://localhost:'+port);
// app.post('/login',
//     body('email').isEmail().normalizeEmail(),
//     body('password').isLength({
//         min: 6
//     }),
//     (req, res) => {
//         const errors = validationResult(req);

//         if (!errors.isEmpty()) {
//             return res.status(400).json({
//                 success: false,
//                 errors: errors.array()
//             });
//         }

//         res.status(200).json({
//             success: true,
//             message: 'Login successful',
//         }})