
import axios from "axios";
import emailjs from '@emailjs/browser';

// TO SEND EMAIL TO ADMIN
const EMAIL_USER_ID = 'ZlrD0g4QOHIgy6HWL';
const EMAIL_SERVICE_ID = 'service_uqoz1um';
const EMAIL_TEMPLATE_ID = 'template_mpdm4wc';
emailjs.init(EMAIL_USER_ID);


export const setLoginBtnBoolValue = () => {
    return {
        type: "BOOLLOGIN"
    }
};

export const setSignUpBtnBoolValue = () => {
    return {
        type: "BOOLSIGNUP"
    }
};

export const showLoginOrLogoutBtnAction = () => {
    return {
        type: "SHOW_LOGOUT_OR_LOGIN"
    }
}

export const showCheckOutBtnAction = () => {
    return {
        type: "SHOW_CHECKOUT_OR_NOT"
    }
}

export const showCheckOutOrOrderPlacedAction = () => {
    return {
        type: "SHOW_CHECKOUT_OR_ORDERPLACED"
    }
}

export const showOrderPlacedOrDeliverAction = () => {
    return {
        type: "SHOW_ORDERPLACED_OR_DELIVER"
    }
}


export const addToCartAction = (pizza, quantity, variant) => (dispatch, getState) => {
    console.log("Quantity: ", quantity);
    if (quantity >= 11) {
        alert("Can't Select More Than 10 Pizzas 🍕 In One Order.")
    }
    else if (quantity < 1) {
        alert("Quantity Of Pizza 🍕 Can't Be Lower Than 1.")
    }
    else {
        var cartItem = {
            name: pizza.name,
            _id: pizza._id,
            image: pizza.image,
            prices: pizza.prices,
            variant: variant,
            quantity: quantity,
            price: pizza.prices[0][variant] * quantity
        }
        dispatch({ type: "ADD_TO_CART", payload: cartItem });
        localStorage.setItem("cartItems", JSON.stringify(getState().addToCartReducer.cartItems))
    }
}

export const deleteFromCart = (pizza) => (dispatch, getState) => {
    dispatch({
        type: "DELETE_FROM_CART",
        payload: pizza
    })
    localStorage.setItem("cartItems", JSON.stringify(getState().addToCartReducer.cartItems));
}

// ******** SERVER RELATED ACTIONS ************

export const signupUserAction = (user) => async (dispatch) => {
    dispatch({ type: "REGISTER_USER_REQUEST" });
    try {
        const res = await axios.post("http://localhost:8080/signup", user);
        dispatch({ type: "REGISTER_USER_SUCCESS", payload: res.data });
        console.log(res.data);
    } catch (error) {
        dispatch({ type: "REGISTER_USER_FAIL", payload: error });
    }
}

export const loginUserAction = (user) => async (dispatch, getState) => {
    dispatch({ type: "LOGIN_USER_REQUEST" });
    try {
        const res = await axios.post("http://localhost:8080/login", user);
        dispatch({ type: "LOGIN_USER_SUCCESS", payload: res.data });
        if (res.data.msg === "Exist") {
            console.log("res.data = ", res.data);
            localStorage.setItem("currentUser", JSON.stringify(res.data));
            window.location.href = "/dashboard";
        }
        else if (res.data.msg === "NotExist") {
            alert("Email 📩 or Password 🔑 is Incorrect !");
        }
    } catch (error) {
        dispatch({ type: "LOGIN_USER_FAIL", payload: error });
    }

}

export const loginAdminserAction = (admin) => async (dispatch, getState) => {
    dispatch({ type: "LOGIN_ADMIN_REQUEST" });
    try {
        const res = await axios.post("http://localhost:8080/adminLogin", admin);
        dispatch({ type: "LOGIN_ADMIN_SUCCESS", payload: res.data });
        if (res.data.msg === "adminKey") {
            console.log("res.data = ", res.data);
            alert("Admin Key 🔐 is Incorrect!");
        }
        else if (res.data.msg === "Exist") {
            console.log("res.data = ", res.data);
            localStorage.setItem("currentUser", JSON.stringify(res.data));
            window.location.href = "/dashboard";
        }
        else if (res.data.msg === "NotExist") {
            alert("Email 📩 or Password 🔑 is Incorrect!");
        }
    } catch (error) {
        dispatch({ type: "LOGIN_ADMIN_FAIL", payload: error });
    }

}

export const getAllPizzasAction = () => async (dispatch) => {
    dispatch({
        type: "GET_ALL_PIZZAS_REQUEST"
    })
    try {
        const res = await axios.get("http://localhost:8080/api/pizzas/getAllPizzas");
        dispatch({ type: "GET_ALL_PIZZAS_SUCCESS", payload: res.data })
    } catch (error) {
        dispatch({ type: "GET_ALL_PIZZAS_FAIL", payload: error })
    }
}

export const getPizzaGradientsAction = () => async (dispatch) => {
    dispatch({
        type: "GET_ALL_PIZZAS_GRAD_REQUEST"
    })
    try {
        const res = await axios.get("http://localhost:8080/api/pizzas/getAllPizzaGradients");
        dispatch({ type: "GET_ALL_PIZZAS_GRAD_SUCCESS", payload: res.data })
    } catch (error) {
        dispatch({ type: "GET_ALL_PIZZAS_GRAD_FAIL", payload: error })
    }
}

export const updatePizzaGradientsAdminAction = (option, updateValue) => async (dispatch) => {
    dispatch({
        type: "UPDATE_PIZZA_GRADIENT_REQUEST"
    })
    try {
        const udpatedData = {
            "option": option,
            "quantity": updateValue
        };
        const res = await axios.post("http://localhost:8080/updatePizzaGradientsAdmin", udpatedData);
        dispatch({ type: "UPDATE_PIZZA_GRADIENT_SUCCESS" })
        console.log("res.data: ", res.data);
        if (res.data === "Success") {
            alert("Updated Successfully 👍🏼");
            // window.location.reload();
        }
        else {
            alert("Error While Updating 🦠")
        }
    } catch (error) {
        dispatch({ type: "UPDATE_PIZZA_GRADIENT_FAIL" })
    }
}


export const updatePizzaGradientsOrderAction = (dataForUpdate) => async (dispatch) => {
    dispatch({
        type: "UPDATE_PIZZA_GRADIENT_REQUEST"
    })
    try {
        const res = await axios.post("http://localhost:8080/updatePizzaGradientsOrder", dataForUpdate);
        dispatch({ type: "UPDATE_PIZZA_GRADIENT_SUCCESS" })
        console.log("res.data.notAvailableGradients: ", res.data.notAvailableGradients);
        if (res.data.message === "Success") {
            console.log("Success in updating after order.");
            alert("Custom Pizza 🍕 Added To Cart 🛒 Successfully!")
        }
        else if (res.data.message === "NotEnough") {
            const notAvailableGradients = res.data.notAvailableGradients;
            alert(res.data.notAvailableGradients);
            console.log("notAvailableGradients", notAvailableGradients);
            alert(`Custom Pizza 🍕 Can't Added To Cart 🛒 Due To Enough Non-Availability Of Following Items:\n${notAvailableGradients}`)
        }
        else if (res.data.message === "SuccessAndLess") {
            alert("Custom Pizza 🍕 Added To Cart 🛒 Successfully!");
            // SENDING EMAIL TO ADMIN WHEN QUANTITY OF ANY GRADIENT IS LESS THAN 20
            const emailData = {
                to_name: "Admin",
                user_name: "Pizza Hut",
                user_email: "pizzahut@gmail.com",
                to_email: 'allahrakhahsp1234@gmail.com',
                message: `Following Custom Pizza 🍕 Gradients Have Crossed The Threshold Limit (< 20): ${res.data.optionsWithLowQuantity.join(', ')}`,
            };

            emailjs.send(EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, emailData)
                .then((response) => {
                    console.log('Email sent successfully:', response);
                })
                .catch((error) => {
                    console.error('Error sending email:', error);
                });
        }
        else {
            alert("Error While Updating 🦠")
        }
    } catch (error) {
        dispatch({ type: "UPDATE_PIZZA_GRADIENT_FAIL" })
    }
}

export const userDataForOrderAction = (userData) => async (dispatch) => {
    dispatch({
        type: "ORDER_DATA_REQUEST"
    })
    try {
        const res = await axios.post("http://localhost:8080/userDataForOrder", userData);
        console.log("res.data: ", res.data);
        console.log("res.data.allOrder", [res.data.allOrder]);
        dispatch({ type: "ORDER_DATA_SUCCESS", payload: [res.data.allOrder] })
        if (res.data.message === "Success") {
            console.log("Order Placed Successfully 🍕");
            // window.location.reload();
        }
        else {
            alert("Error While Ordering 🦠")
        }
    } catch (error) {
        dispatch({ type: "ORDER_DATA_FAIL", payload: error })
    }
}

export const getAllOrdersAction = () => async (dispatch) => {
    dispatch({
        type: "GET_ORDER_DATA_REQUEST"
    })
    try {
        const res = await axios.get("http://localhost:8080/api/orders");
        // console.log("res.data: ", res.data);
        dispatch({ type: "GET_ORDER_DATA_SUCCESS", payload: res.data })
    } catch (error) {
        dispatch({ type: "GET_ORDER_DATA_FAIL", payload: error })
    }
}

export const updatePizzaDeliverStatusAction = (id) => async (dispatch) => {
    dispatch({
        type: "UPDATE_DELIVER_STATUS_REQUEST"
    })
    try {
        const data = {
            id: id
        }
        const res = await axios.post("http://localhost:8080/updateOrderStatus", data);
        dispatch({ type: "UPDATE_DELIVER_STATUS_SUCCESS" })
        console.log("res.data in updating delivering: ", res.data);
        if (res.data === "Success") {
            alert("Order Deliverd Successfully 🍕");
            // window.location.reload();
        }
        else {
            alert("Error While Delivering 🦠")
        }
    } catch (error) {
        dispatch({ type: "UPDATE_DELIVER_STATUS_FAIL" })
    }
}

export const getAllUsersAction = () => async (dispatch) => {
    dispatch({
        type: "GET_ALL_USERS_REQUEST"
    })
    try {
        const res = await axios.get("http://localhost:8080/api/pizzas/getAllUsers");
        dispatch({ type: "GET_ALL_USERS_SUCCESS", payload: res.data })
    } catch (error) {
        dispatch({ type: "GET_ALL_USERS_FAIL", payload: error })
    }
}
