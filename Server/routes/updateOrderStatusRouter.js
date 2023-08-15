const express = require("express");
const orderModel = require("../models/orderModel");
const router = express.Router();


const updateOrderStatusRouter = router.post("/updateOrderStatus", async (req, res) => {
    try {
        const { id } = req.body;
        const orderStatus = await orderModel.updateOne({ _id: id },
            { $set: { deliverStatus: true } }
        );
        console.log("orderStatus", orderStatus);
        if (orderStatus) {
            res.status(200).send("Success")
        }
        else {
            res.status(304).send("Fail")
        }
    } catch (error) {
        res.json({ message: "Error while updating ordering status ....", error })
    }
})

module.exports = updateOrderStatusRouter;