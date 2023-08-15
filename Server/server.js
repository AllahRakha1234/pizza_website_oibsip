require("colors");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDb = require("./config/config");
const pizzasRouter = require("./routes/pizzaRouter");
const pizzaGradRouter = require("./routes/pizzaGradRouter");
const signupRouter = require("./routes/signupRouter");
const loginRouter = require("./routes/loginRouter");
const updatePizzaGradAdminRouter = require("./routes/updatePizzaGradAdminRouter");
const updatePizzaGradientsOrderRouter = require("./routes/updatePizzaGradOrderRouter");
const ordersRouter = require("./routes/ordersRouter");
const getAllOrdersRouter = require("./routes/getAllOrdersRouter");
const updateOrderStatusRouter = require("./routes/updateOrderStatusRouter");
const adminLoginRouter = require("./routes/adminLoginRouter");
const getAllUsersRouter = require("./routes/getAllUsersRouter");
const emailFinderRouter = require("./routes/emailFinderRouter");
const setPasswordRouter = require("./routes/setPasswordRouter");

const PORT = process.env.PORT || 8080;
const app = express();

// MIDLLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"))

// CONFIG DOTENV
dotenv.config();

// MONGODB CONNECTION
connectDb();

// ROUTES

app.get("/", cors(), (req, res) => {
    res.send("How are you");
});

// GET ALL PIZZAS FROM DB

app.use("/api/pizzas", pizzasRouter);
app.use("/api/pizzas", pizzaGradRouter);
app.use(signupRouter);
app.use(loginRouter);
app.use(updatePizzaGradAdminRouter);
app.use(updatePizzaGradientsOrderRouter);
app.use(ordersRouter);
app.use("/api", getAllOrdersRouter);
app.use(updateOrderStatusRouter);
app.use(adminLoginRouter);
app.use("/api/pizzas", getAllUsersRouter);
app.use(emailFinderRouter);
app.use(setPasswordRouter);
// LISTENING SERVER

app.listen(PORT, () => {
    console.log(`Server listenning on http://localhost:${PORT}`.bgWhite.black);
})
