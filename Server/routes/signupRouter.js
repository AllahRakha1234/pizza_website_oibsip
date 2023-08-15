const express = require("express");
const signupModel = require("../models/singupModel");
const singupModel = require("../models/singupModel");
const router = express.Router();

const signupRouter = router.post('/signup', async (req, res) => {
    const { name, email, password, cpassword } = req.body;
    const userData = {
        name: name,
        email: email,
        password: password,
        cpassword: cpassword
    }
    const newUser = new singupModel(userData);  // CREATING USER (OTHER WAY TO DO BELOW WORK)
    try {
        const checkEmail = await signupModel.findOne({ email: email });
        if (checkEmail) {
            res.json("Exist");
        }
        else {
            res.json("NotExist");
            await newUser.save();
            // await signupModel.insertMany([userData]); // OTHER WAY TO DO ABOVE WORK
        }
    } catch (error) {
        res.json({ message: "Error Occured While Registering " });
    }

})

module.exports = signupRouter;