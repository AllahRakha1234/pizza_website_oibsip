import changeLoginBoolValue from "./loginBtnReducer";
import changeSignUpBoolValue from "./signupBtnReducer";
import getAllPizzasReducer from './getAllPizzasReducer';
import getAllPizzaGradientsReducer from './getAllPizzaGradientsReducer';
import showLoginOrLogoutBtnReducer from "./showLoginOrLogoutBtnReducer";
import addToCartReducer from "./addToCartReducer";
import signupUserReducer from "./signupUserReducer";
import loginUserReducer from "./loginUserReducer";
import showCheckOutBtnReducer from "./showCheckoutBtnReducer";
import getAllOrdersReducer from "./getAllOrdersReducer";
import getAllUsersReducer from "./getAllUsersReducer";
import showCheckOutOrOrderPlacedReducer from "./showCheckOutOrOrderPlacedReducer";
import showOrderPlacedOrDeliverReducer from "./showOrderPlacedOrDeliverReducer";

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    changeLoginBoolValue: changeLoginBoolValue,
    changeSignUpBoolValue: changeSignUpBoolValue,
    getAllPizzasReducer: getAllPizzasReducer,
    getAllPizzaGradientsReducer: getAllPizzaGradientsReducer,
    showLoginOrLogoutBtnReducer: showLoginOrLogoutBtnReducer,
    addToCartReducer: addToCartReducer,
    signupUserReducer: signupUserReducer,
    loginUserReducer: loginUserReducer,
    showCheckOutBtnReducer,
    getAllOrdersReducer,
    getAllUsersReducer,
    showCheckOutOrOrderPlacedReducer,
    showOrderPlacedOrDeliverReducer
    // ChangeLoginBtnBoolValue
});



export default rootReducer;