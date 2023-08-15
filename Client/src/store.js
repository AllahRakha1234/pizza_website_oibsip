import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from './reducers'
import loginUserReducer from './reducers/loginUserReducer';

const CartItems = localStorage.getItem("cartItems") ?
    JSON.parse(localStorage.getItem("cartItems")) : [];
const currentUser = localStorage.getItem("currentUser") ? JSON.parse(localStorage.getItem("currentUser")) : null;
const initialState = {
    addToCartReducer: {
        cartItems: CartItems
    },
    loginUserReducer: {
        currentUser: currentUser
    }
}

// const store = createStore(rootReducer, applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)));


export default store;