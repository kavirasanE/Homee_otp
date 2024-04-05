import express from "express";
import {otpSignin} from "../controller/otpController.js"
import ipMiddleware from "../middleware/ipMiddleware.js"
const router = express.Router();


router.post('/otp',otpSignin,ipMiddleware);


export default router;