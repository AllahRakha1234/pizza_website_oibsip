
import React, { useState } from 'react';
import Pizzas from './DashboardComponents/Pizzas';
import { useSelector } from "react-redux";
import CustomPizzaPage from './CustomPizzaPage';
import CartPage from './CartPage';
import AdminPage from './AdminPage';

export default function DashboardPage() {

    const cartState = useSelector(state => state.addToCartReducer);
    const [flagCartPizzaShow, setFlagCartPizzaShow] = useState(1);
    const currentUser = localStorage.getItem("currentUser") ? JSON.parse(localStorage.getItem("currentUser")) : "No User";

    // ***** RENDER *****
    return (
        <>
            <div style={{ height: "5vh" }}>
                <div id='badgeBox'>
                    {flagCartPizzaShow === 1 && <span className="badge p-2 text-bg-primary" >Click on Image or Title to see description!</span>}
                </div>
            </div>
            <nav className="container navbar navbar-expand-lg navbar-info bg-info shadow bg-info rounded mt-3 p-3">
                <div className="container-fluid">
                    <div className='d-flex fd-row w-100%'>
                        <h2 className='text-light mt-1'>
                            <b>Welcome {
                                currentUser.isAdmin === true ?
                                    `${currentUser.name} (Admin)` : currentUser.name
                            }</b>
                        </h2>
                    </div>
                    <div className="d-flex w-100%">
                        <button className="btn btn-danger mx-2"
                            onClick={() => setFlagCartPizzaShow(1)}>
                            <b>Dashboard</b>
                        </button>
                        <button className="btn btn-danger"
                            onClick={() => setFlagCartPizzaShow(2)}>
                            <b>Cart Page: {cartState.cartItems.length}</b>
                        </button>
                        <button className="btn btn-danger mx-2"
                            onClick={() => setFlagCartPizzaShow(3)}>
                            <b>Custom Pizza</b>
                        </button>
                        {
                            currentUser.isAdmin === true &&
                            <button className="btn btn-danger"
                                onClick={() => setFlagCartPizzaShow(4)}>
                                <b>Admin Control</b>
                            </button>
                        }
                    </div>
                </div>
            </nav>
            {/* SHOWING DASHBOARD OR CART OR CUSTOMEPIZZA PAGE LOGIC */}
            {
                flagCartPizzaShow === 1 ?
                    <Pizzas /> : flagCartPizzaShow === 2 ?
                        <CartPage /> : flagCartPizzaShow === 3 ?
                            <CustomPizzaPage /> : <AdminPage />
            }
        </>
    )
}
