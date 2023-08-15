const express = require("express");
const signupModel = require("../models/singupModel");
const router = express.Router();

const emailFinderRouter = router.post('/findEmail', async (req, res) => {
    const { email } = req.body;
    console.log("email: ", email);
    try {
        const checkEmail = await signupModel.findOne({ email: email });
        if (checkEmail) {
            res.send("Exist");
        }
        else {
            res.send("NotExist");
        }
    } catch (error) {
        res.json({ message: "Error Occured While Finding " });
    }

})

module.exports = emailFinderRouter;