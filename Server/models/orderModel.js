const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    amount: {
        type: String,
        required: true,
    },
    deliverStatus: {
        type: Boolean,
        default: false,
    }
}, { timestamps: true });

const ordersModel = mongoose.model("ordersCollection", orderSchema);

module.exports = ordersModel;
