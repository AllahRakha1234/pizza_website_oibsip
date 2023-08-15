const express = require("express");
const signupModel = require("../models/singupModel");
const router = express.Router();
const dotenv = require("dotenv")
// CONFIG DOTENV
dotenv.config();
// console.log("process.env.ADMIN_KEY = ", process.env.ADMIN_KEY);

const adminLoginRouter = router.post('/adminLogin', async (req, res) => {
    const { email, password, adminKey } = req.body;
    try {
        if (adminKey === process.env.ADMIN_KEY) {
            const checkEmail = await signupModel.findOne({ email: email, password: password });
            if (checkEmail) {
                const user = {
                    name: checkEmail.name,
                    _id: checkEmail._id,
                    email: checkEmail.email,
                    msg: "Exist",
                    isAdmin: true
                }
                res.json(user);
            }
            else {
                res.json({ msg: "NotExist" });
            }
        }
        else {
            res.json({ msg: "adminKey" })
        }
    } catch (error) {
        res.json({ message: "Error Occured While Registering " });
    }

})

module.exports = adminLoginRouter;