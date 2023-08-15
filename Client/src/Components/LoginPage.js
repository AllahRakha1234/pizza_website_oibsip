import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { setSignUpBtnBoolValue } from "../actions/actions";
import { loginUserAction } from '../actions/actions';
import { loginAdminserAction } from '../actions/actions';


export function LoginPage(props) {

    const dispatch = useDispatch();
    const [email, setEmail] = useState(" ");
    const [password, setPassword] = useState(" ");
    const [adminKey, setAdminKey] = useState(" ");

    const handleSignUpBtnClick = () => {
        dispatch(setSignUpBtnBoolValue());
    }

    // SERVER CODE TO SEND DATA TO DB

    const handleLoginBtn = (event) => {
        event.preventDefault();
        if (!props.showKeyBox) {
            dispatch(loginUserAction({ email, password }));
        }
        else if (props.showKeyBox) {
            if (email === " " || password === " " || adminKey === " ") {
                alert("Email 📩 or Password 🔑 or Admin Key 🔐 Can't Be Empty!");
            }
            else {
                const admin = {
                    email: email,
                    password: password,
                    adminKey: adminKey
                }
                dispatch(loginAdminserAction(admin));
            }
        }
    }

    const handleForgetPasswordBtnClick = (event) => {
        event.preventDefault();
        window.location.href = "/forgetPassword"
    }

    // ********* REDNER *********

    return (
        <>
            <div>
                <h3>Sign in to your account</h3>
                <form className='m-auto' action="POST" id="loginPage" method="POST">
                    <div className="form-row">
                        <div className="p-2">
                            <input type="email" onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Enter email" name="email" id="email" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="p-2">
                            <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Enter password" name="password" id="password" />
                        </div>
                    </div>
                    {/* SHOW ADMIN KEY INPUT OR NOT */}
                    {
                        props.showKeyBox && <div className="form-row">
                            <div className="p-2">
                                <input onChange={(e) => setAdminKey(e.target.value)} type="password" className="form-control" placeholder="Enter admin key" name="adminKey" id="adminKey" />
                            </div>
                        </div>
                    }
                    {/* <!-- Submit Button --> */}
                    <div className="form-row">
                        <div className="p-2">
                            <button onClick={handleLoginBtn} className="btn1" id="loginButton">
                                Login
                            </button>
                        </div>
                    </div>
                    {/* <!-- REDIRECTION TO SIGN UP PAGE --> */}
                    <p className="m-auto">
                        Don't have an account? <button onClick={handleSignUpBtnClick} className='makeBtnLinkUtility'>Register Here</button>
                    </p>
                    <p className="m-auto">
                        <button onClick={handleForgetPasswordBtnClick} className='makeBtnLinkUtility'>Forget Password ?</button>
                    </p>
                </form>
            </div>

        </>
    )
    // }
}
