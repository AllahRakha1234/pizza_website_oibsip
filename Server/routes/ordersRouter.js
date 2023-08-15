const express = require("express");
const ordersModel = require("../models/orderModel");
const router = express.Router();

const ordersRouter = router.post("/userDataForOrder", async (req, res) => {
    try {
        const ordersData = req.body;
        const newOrder = new ordersModel(ordersData);
        if (newOrder.save()) {
            const allOrders = await ordersModel.find({});
            // res.status(200).send("Success");
            res.json({ message: "Success", allOrder: allOrders });
        }
        else {
            // res.status(201).send("Fail");
            const allOrders = await ordersModel.find({});
            res.status(200).json({ message: "Fail", allOrder: allOrders });
        }
    } catch (error) {
        res.status(500).json({ message: "Error while saving ordering data ....", error: error.message });
    }
});

module.exports = ordersRouter;


