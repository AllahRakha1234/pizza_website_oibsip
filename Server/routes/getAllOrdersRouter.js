const express = require("express");
const ordersModel = require("../models/orderModel");
const router = express.Router();

const getAllOrdersRouter = router.get("/orders", async (req, res) => {
    try {
        const allOrders = await ordersModel.find({});
        console.log("allOrders", allOrders);
        if (allOrders) {
            res.status(200).send(allOrders);
            // res.json({ message: "Success", allOrder: allOrders });
        }
        else {
            res.status(304).send("Fail");
        }
    } catch (error) {
        res.status(500).json({ message: "Error while getting ordering data ....", error: error.message });
    }
});

module.exports = getAllOrdersRouter;


