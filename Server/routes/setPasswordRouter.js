const express = require("express");
const signupModel = require("../models/singupModel");
const router = express.Router();

const setPasswordRouter = router.post('/changePassword', async (req, res) => {
    const { email, password, cpassword } = req.body;
    console.log("req.body: ", req.body);
    try {
        const checkEmail = await signupModel.updateOne({ email: email }, {
            $set: { password: password, cpassword: cpassword }
        });
        if (checkEmail) {
            res.send("Change");
        }
        else {
            res.send("NotChange");
        }
    } catch (error) {
        res.json({ message: "Error Occured While Updating " });
    }

})

module.exports = setPasswordRouter;