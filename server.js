// const express = require("express")
// const router = express.Router();
// const cors = require("cors");
// const nodemailer = require("nodemailer");

// email section
// server used to sent email  

// const app = express();
// app.use(cors());
// app.use(express.json())
// app.use('/',router);
// app.listen(5000,()=> console.log("Server Running"))
// console.log(process.env.EMAIL_USER);
// console.log(process.env.EMAIL_PASS);


// const contactEmail= nodemailer.createTransport({
//         service:'gmail',
//         auth:{
//             user:"sankusanku001@gmail.com",
//             pass: "ftth"
//         }
// });

// contactEmail.verify((error)=>{
//     if (error){
//         console.log(error);
//     }else{
//         console.log("Ready to Sent");
//     }
// })

// router.post("/contact",(req,res)=>{
//     const name = req.body.firstName + req.body.lastName;
//     const email = req.body.email;
//     const message = req.body.message;
//     const phone = req.body.phone;
//     const mail={
//         from:name,
//         to:"sankusanku001@gmail.com",
//         subject: "Contact Form Submisson - Portfolio ",
//         html: `
//                 <p>Name : ${name}</p>
//                 <p>Email : ${email}</p>
//                 <p>Phone : ${phone}</p>
//                 <p>Message : ${message}</p>
//                 `,
//     };
//     contactEmail.sendMail(mail,(error)=>{
//         if (error){
//             req.json(error)
//         }else{
//             req.json({code: 200 , status: "Message Sent" })
//         }
//     })
// })
