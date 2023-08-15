const express = require("express");
const signupModel = require("../models/singupModel");
const router = express.Router();

const getAllUsersRouter = router.get("/getAllUsers", async (req, res) => {
    try {
        const allUsers = await signupModel.find({});
        console.log("allOrders", allUsers);
        if (allUsers) {
            res.status(200).send(allUsers);
        }
        else {
            res.status(304).send("Fail");
        }
    } catch (error) {
        res.status(500).json({ message: "Error while getting users data ....", error: error.message });
    }
});

module.exports = getAllUsersRouter;


