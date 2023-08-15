
import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getAllOrdersAction } from "../../actions/actions"
import { updatePizzaDeliverStatusAction } from "../../actions/actions"
import { showOrderPlacedOrDeliverAction } from "../../actions/actions"

export default function AllOrdersPageComp() {

    const dispatch = useDispatch();
    const ordersState = useSelector(state => state.getAllOrdersReducer);
    const orderPlaceOrDeliverState = useSelector(state => state.showOrderPlacedOrDeliverAction);
    const { allOrders, error } = ordersState;
    useEffect(() => {
        dispatch(getAllOrdersAction());
    }, [dispatch]);

    const devliverHandler = (id) => {
        console.log("id in page: ", id);
        dispatch(updatePizzaDeliverStatusAction(id));
        dispatch(showOrderPlacedOrDeliverAction());
        console.log("orderPlaceOrDeliverState: ", orderPlaceOrDeliverState);
    }

    // ***** RENDER *****

    return (
        <>
            {
                error ? <h1>Error While Loading Pizza Gradients In Admin Panel</h1>
                    : allOrders.length === 0 ?
                        <div className="container" style={{ width: "47vw" }}>
                            <h1 className='cartMsg bg-secondary text-light p-3' style={{ margin: "78px 0" }}>
                                <b className='bg-primary p-1'>No Orders 📦📦 Yet To Show</b>
                            </h1>
                        </div>
                        :
                        <div className="container my-5">
                            <table className="ordersTable table col-lg-8" style={{ lineHeight: "10px" }}>
                                <tbody>
                                    <tr>
                                        <th colSpan={12}>
                                            <h2 className="d-flex justify-content-center pt-1">
                                                <b>Orders List</b>
                                            </h2>
                                        </th>
                                    </tr>
                                    <tr>
                                        <td><h4><b>Order ID</b></h4></td>
                                        <td><h4><b>Email</b></h4></td>
                                        <td><h4><b>Address</b></h4></td>
                                        <td><h4><b>Amount</b></h4></td>
                                        <td><h4><b>Order Date</b></h4></td>
                                        <td><h4><b>Status</b></h4></td>
                                    </tr>
                                    {
                                        allOrders.map((order, index) => {
                                            return (
                                                <>
                                                    < tr key={order + index}  >
                                                        <td className="pt-3 fw-bold">{order._id}</td>
                                                        <td className="pt-3 fw-bold">
                                                            {order.email}
                                                        </td>
                                                        <td className="pt-3 fw-bold">
                                                            {order.address}
                                                        </td>
                                                        <td className="pt-3 fw-bold">
                                                            {order.amount} Rs/-
                                                        </td>
                                                        <td className="pt-3 fw-bold">
                                                            {order.createdAt}
                                                        </td>
                                                        {order.deliverStatus ?
                                                            <td className="pt-3 fw-bold"><b>Delivered</b></td>
                                                            :
                                                            <td className="pt-3" colSpan={2}>
                                                                <button className="updateBtn btn btn-primary"
                                                                    onClick={() => devliverHandler(order._id)}
                                                                >
                                                                    Deliver
                                                                </button>
                                                            </td>
                                                        }

                                                    </tr>
                                                </>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div >
            }
        </>
    );
}

