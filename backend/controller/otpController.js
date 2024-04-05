const otp = process.env.OTP;

export const otpSignin =((req, res) => {
    const reqotp = req.body.otp;
    console.log(reqotp);
    try {
        if (reqotp ==="1234") {
            res.status(200).json({ message: "OTP verified successfully" });
        } else {
            res.status(400).json({ message: "Invalid OTP" });
        }
    } catch (err) {
        res.status(400).send(err.message);
    }
});