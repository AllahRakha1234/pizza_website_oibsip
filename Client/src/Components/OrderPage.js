
import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { showCheckOutBtnAction } from "../actions/actions";
import { userDataForOrderAction } from "../actions/actions";
import { showCheckOutOrOrderPlacedAction } from "../actions/actions"

export default function OrderPage(props) {

    const dispatch = useDispatch();
    const checkOutBtnState = useSelector(state => state.showCheckOutBtnReducer)
    const checkOutBtnOrOrderPlaceState = useSelector(state => state.showCheckOutOrOrderPlacedReducer)
    const [email, setEmail] = useState(" ");
    const [cardNo, setCardNo] = useState(" ");
    const [monthYear, setMonthYear] = useState(" ");
    const [cvc, setCvc] = useState(" ");
    const [address, setAddress] = useState(" ");
    const [showDone, setShowDone] = useState(false);

    const handleCheckOutBtn = () => {
        setShowDone(false);
        console.log("checkOutBtnState", checkOutBtnState);
        dispatch(showCheckOutBtnAction());
    }

    const handlePayButton = () => {
        if (email === " " || cardNo === " " || monthYear === " " || cvc === " " || address === " ") {
            alert("Fill All The Fields 📃📰📜.");
            return;
        }
        else {
            const userData = {
                email: email,
                amount: props.totalPayment,
                address: address
            }
            setTimeout(() => {
                setShowDone(true);
            }, 1000)
            setTimeout(() => {
                dispatch(userDataForOrderAction(userData));
                dispatch(showCheckOutBtnAction());
                dispatch(showCheckOutOrOrderPlacedAction());
                console.log('checkOutBtnOrOrderPlaceState: ', checkOutBtnOrOrderPlaceState);
            }, 1500)
            console.log("Pay button clicked!");
        }
    }

    return (
        <>
            {
                checkOutBtnState &&
                <div className="modal" style={{ display: 'block', background: 'rgba(0,0,0,0.8)' }}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header bg-info">
                                <h2 className="modal-title"><b>Pay With Card</b></h2>
                                <button type="button" className="btn-close" aria-label="Close"
                                    onClick={handleCheckOutBtn} style={{ color: "white" }}>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="container">
                                    <form className='m-auto' action="POST" id="loginPage" method="POST">
                                        <h5 className='ms-3'><b>Email</b></h5>
                                        <div className="form-row">
                                            <div className="p-2">
                                                <input type="email" onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Enter email" name="email" id="email" />
                                            </div>
                                        </div>
                                        <h5 className='ms-3'><b>Card Information</b></h5>
                                        <div className="form-row">
                                            <div className="p-2">
                                                <input type="text" onChange={(e) => setCardNo(e.target.value)} className="card-input form-control" placeholder="1234 1234 1234 1234" name="cardNo" id="cardNo" />
                                            </div>
                                        </div>
                                        <div className="d-flex">
                                            <div className="form-row">
                                                <div className="p-2">
                                                    <input type="text" onChange={(e) => setMonthYear(e.target.value)} className="form-control" placeholder="MM / YY" name="monthYear" id="monthYear" />
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="p-2">
                                                    <input type="text" onChange={(e) => setCvc(e.target.value)} className="form-control" placeholder="CVC" name="cvc" id="cvc" />
                                                </div>
                                            </div>
                                        </div>
                                        <h5 className='ms-3'><b>Address</b></h5>
                                        <div className="form-row">
                                            <div className="p-2">
                                                <input type="text" onChange={(e) => setAddress(e.target.value)} className="form-control" placeholder="Enter address" name="address" id="adress" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="modal-footer bg-info">
                                <div className="w-100">
                                    <button onClick={handlePayButton} className="orderBtn btn1" id="payButton">
                                        {
                                            showDone ?
                                                <h1 className='bg-light text-success'>✅✅✅✅</h1>
                                                :
                                                <h4 className='mt-2'><b> Pay {props.totalPayment} Rs/-</b></h4>
                                        }
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}
        </>
    )
}
