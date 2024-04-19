const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const Razorpay = require("razorpay")

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

const instance = new Razorpay({
    key_id: process.env.RAZOR_PAY_key_id,
    key_secret: process.env.RAZOR_PAY_key_secret
});

//create a order
app.get('/order', (req, res) => {
    try {
        const options = {
            amount: 10 * 100,
            currency: "INR",
            receipt: "Charity#1",
            payment_capture: 0
            // 1 for automatic capture // 0 for manual capture
        };
        instance.orders.create(options,((err, order) => {
            if (err) {
                return res.status(400).json({
                    message: "Something went wrong"
                })
            }
            return res.status(200).json(order);
        }))
    } catch (err) {
        return res.status(500).json({
            message: "Some thing Wrong "
        })
    }
})

// captures the payment 
app.post("/capture/:paymentId", (req, res) => {
    try {
        return request(
            {
                method: "POST",
                url: `https://${process.env.RAZOR_PAY_key_id}:${process.env.RAZOR_PAY_key_secret}@api.razorpay.com/v1/payments/${req.params.paymentId}/capture`,
                form: {
                    amount: 10 * 100,
                    currency: "INR",
                },
            },
            async function (err, response, body) {
                if (err) {
                    return res.status(500).json({
                        message: " something went wrong"
                    })
                }
                console.log(" Status:", express.response.statusCode);
                console.log("Header", JSON.stringify(response.headers));
                console.log("response", body);
                return res.status(200).json(body);
            });


    }
    catch (err) {
        return res.status(500).json({
            message: "Something ended"
        })
    }
})


const port = process.env.PORT;
app.listen(port, () => {
    console.log("server is started");;
})