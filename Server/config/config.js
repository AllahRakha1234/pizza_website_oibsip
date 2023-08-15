const mongoose = require("mongoose");
require("colors");

const connectDb = async () => {
    try {
        const url = process.env.MONGO_URI;
        const conn = await mongoose.connect(url, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            // useCreateIndex: true
        });
        console.log(`Mongodb connected successfully ${conn.connection.host}`.bgRed.white);

    } catch (error) {
        console.log(`Error: ${error.message}`.bgMagenta.white);
    }
}

module.exports = connectDb;