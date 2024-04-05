import express from "express"
import dotenv from 'dotenv';
import cors from 'cors'
import otpRoute from "./routes/otpRoute.js"
dotenv.config();

const app =express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT
const OTPCONFIG =process.env.OTP
// app.post('/otp', (req, res) => {
//     const reqotp = req.body.otp;
//     console.log(reqotp);
//     try {
//         if (reqotp ==="1234") {
//             res.status(200).json({ message: "OTP verified successfully" });
//         } else {
//             res.status(400).json({ message: "Invalid OTP" });
//         }
//     } catch (err) {
//         res.status(400).send(err.message);
//     }
// });
app.use('/',otpRoute)

app.get('/op', (req,res) => {
    res.status(200).send("server started")
})
app.listen(port , () => {
    console.log(`Server is listening at ${port}`);
})