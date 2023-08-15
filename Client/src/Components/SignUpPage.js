
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setLoginBtnBoolValue } from "../actions/actions"
import { setSignUpBtnBoolValue } from "../actions/actions"
import { signupUserAction } from "../actions/actions"

export default function SignUpPage(props) {

    const dispatch = useDispatch();
    const handleCloseShow = () => {
        dispatch(setLoginBtnBoolValue());
        dispatch(setSignUpBtnBoolValue());
    }
    const singupState = useSelector(state => state.signupUserReducer);
    const resFromDbForSignup = singupState.resFromDbForSignup

    // SERVER CODE TO SEND DATA TO DB

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setcPassword] = useState("");


    const handleAddAcount = (event) => {
        event.preventDefault();
        if (name === "" || email === "" || password === "" || cpassword === "") {
            alert("All the Fields are Required 📁");
        }

        else if (password !== cpassword) {
            alert("Password 🔑 and Confirm Password 🔑 Should Be Same");
        }
        else if (password.length < 8) {
            alert("Password 🔑 Length Should Be Atleast 8 Characters Long");
        }
        else {
            dispatch(signupUserAction({ name, email, password, cpassword }));
            try {
                if (resFromDbForSignup === "Exist") {
                    alert("User Already Exist 🙎🏼‍♂️");
                }
                else if (resFromDbForSignup === "NotExist") {
                    alert("User Registered Successfully 🙎🏼‍♂️");
                    dispatch(setSignUpBtnBoolValue());
                }
            } catch (error) {
                alert("Error Occur: ", error);
            }
        }
    }


    // ********* REDNER *********

    return (
        <>
            <div className="modal" style={{ display: 'block', background: 'rgba(0,0,0,0.8)' }}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2 className="modal-title">Sign Up</h2>
                            <button type="button" className="btn-close" onClick={handleCloseShow} aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div>
                                <h3>Make your account</h3>
                                <form className='m-auto' action="POST" id="loginPage" method="POST">
                                    <div className="form-row">
                                        <div className="p-2">
                                            <input type="text" onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Enter name" name="name" id="name" />
                                        </div>
                                    </div>
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
                                    <div className="form-row">
                                        <div className="p-2">
                                            <input type="password" onChange={(e) => setcPassword(e.target.value)} className="form-control" placeholder="Confirm password" name="confirmPassword" id="confirmPassword" />
                                        </div>
                                    </div>
                                    {/* <!-- Submit Button --> */}
                                    <div className="form-row">
                                        <div className="p-2">
                                            <button onClick={handleAddAcount} className="btn1" id="signupButton">
                                                Add Acount
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-danger" onClick={handleCloseShow}>
                                Done
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}