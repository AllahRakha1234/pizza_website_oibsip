
import '../index.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignUpPage from './SignUpPage';
import { LoginPage } from './LoginPage';
import logoImg from '../assets/images/logo1.png';
import { useSelector, useDispatch } from "react-redux";
import { setLoginBtnBoolValue } from "../actions/actions";
import { showLoginOrLogoutBtnAction } from "../actions/actions";


export default function Navbar() {

    const history = useNavigate();
    const dispatch = useDispatch();
    const [showKeyBox, setShowKeyBox] = useState(false);
    const loginState = useSelector((state) => state.changeLoginBoolValue);
    const signupState = useSelector((state) => state.changeSignUpBoolValue);
    // const loginOrLogoutBtnState = useSelector(state => state.showLoginOrLogoutBtnReducer)
    const localLoginLogoutBtnState = localStorage.getItem("currentUser");

    const handleOpenLoginShow = (txt) => {
        if (txt === "admin") {
            setShowKeyBox(true);
        }
        else {
            setShowKeyBox(false);
        }
        dispatch(setLoginBtnBoolValue());
    }

    const handleClosLoginShow = () => {
        dispatch(setLoginBtnBoolValue())
    }

    const handleLogoutBtnClick = () => {
        dispatch(showLoginOrLogoutBtnAction());
        localStorage.removeItem("currentUser");
        localStorage.setItem("cartItems", "");
        history("/");
    }

    // ********* RENDER **********

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <div className='d-flex fd-row w-100%'>
                        <img src={logoImg} id='logo' style={{ height: "45px", width: "65px", marginRight: "8px" }} alt="" />
                        <div className="navbar-brand text-dark" >
                            <h4 className='text-light mt-1'>Pizza Hut</h4></div>
                    </div>
                    {/* SHOWING LOGIN OR LOGOUT BUTTON LOGIN */}
                    {
                        // loginOrLogoutBtnState ?
                        localLoginLogoutBtnState !== null ?
                            <button onClick={() => handleLogoutBtnClick()} className="btn btn-outline-light mx-2">Logout</button>
                            :
                            <div className="d-flex w-100%">
                                <button onClick={() => handleOpenLoginShow("admin")} className="btn btn-outline-light mx-2">Admin Login</button>
                                <button onClick={() => handleOpenLoginShow("user")} className="btn btn-outline-light">User Login</button>
                            </div>
                    }
                </div>
            </nav>
            {/* MODAL CODE */}

            {loginState && (
                <div className="modal" style={{ display: 'block', background: 'rgba(0,0,0,0.8)' }}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h2 className="modal-title">{signupState ? "Sign Up" : "Login"} Page</h2>
                                <button type="button" className="btn-close" onClick={handleClosLoginShow} aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                {/* CONDITIONAL RENDERING LOGIN OR SINGUP PAGE */}
                                {signupState ?
                                    <SignUpPage />
                                    :
                                    <LoginPage showKeyBox={showKeyBox} />
                                }
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-danger" onClick={handleClosLoginShow} >
                                    Done
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}