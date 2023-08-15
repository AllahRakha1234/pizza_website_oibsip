
import axios from 'axios';
import React, { useState } from 'react'

export function PasswordForgetPage() {

    const [email, setEmail] = useState(" ");
    const [password, setPassword] = useState(" ");
    const [cpassword, setcPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showCaptcha, setShowCaptcha] = useState(false);

    const handleBackBtnClick = (event) => {
        event.preventDefault();
        window.location.href = "/";
    }

    const handleEmailNextBtnClick = async (event) => {
        event.preventDefault();
        console.log("Email in page: ", email);
        const data = { email }
        const res = await axios.post("http://localhost:8080/findEmail", data)
        console.log("res", res);
        if (res.data === "Exist") {
            setShowCaptcha(true);
        }
        else if (res.data === "NotExist") {
            alert("Email 📩 is Incorrect!");
        }
    }

    const handleCaptchaNextBtnClick = (event) => {
        event.preventDefault();
        const response = prompt("Enter The Text 📃📄 From The Below Image 🖼🖼")
        if (response === "ReCAptChA") {
            setShowPassword(true)
        }
        else {
            alert("Enter The Correct Text 📃📄 From The Image 🖼🖼")
        }
    }

    const handlePasswordNextBtnClick = async (event) => {
        event.preventDefault();
        if (password.length < 8) {
            alert("Password 🔑 Length Should Be Atleast 8 Characters Long!");
        }
        else if (password !== cpassword) {
            alert("Password 🔑 and Confirm Password 🔑 Should Be Same!");
        }
        else {
            const data = { email, password, cpassword }
            const res = await axios.post("http://localhost:8080/changePassword", data)
            console.log("res", res);
            if (res.data === "Change") {
                alert("Password 🔑 Change Successfully ✅!");
                window.location.href = "/"
            }
            else if (res.data === "NotChange") {
                alert("Password 🔑 Does Not Change!");
            }
        }

    }


    // ********* REDNER *********

    return (
        <>
            <div className="container my-2">
                <nav className="navbar navbar-expand-lg navbar-info bg-info" style={{ borderRadius: "20px" }}>
                    <div className="container" >
                        <h3 className='text-light'>Forget Password</h3>
                        <div className="d-flex justify-content-between">
                            <button onClick={handleBackBtnClick} className="btn btn-light">Back</button>
                        </div>
                    </div>
                </nav>
                <div className="container mt-1" style={{ height: "67vh" }}>
                    <form className='m-auto' action="POST" id="forgetPasswordPage" method="POST">
                        <div className="form-row">
                            <div className="p-1">
                                <input disabled={showCaptcha} type="email" onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Enter email" name="email" id="email" />
                            </div>
                        </div>
                        <div className="d-flex justify-content-center align-items-center mt-1">
                            <button id="emailNext" onClick={handleEmailNextBtnClick} className="btn btn-primary w-50" disabled={showCaptcha}>
                                Next
                            </button>
                        </div>
                        {/* SHOWING CAPTCHA LOGIC */}
                        {showCaptcha &&
                            <div className="container my-2">
                                <div className="imageCaptcha d-flex  justify-content-center align-items-center" style={{ border: "2px solid black" }}>
                                    <img src="https://www.tsohost.com/assets/uploads/blog/capcha.jpeg" style={{ width: "40vw", height: "20vh" }} alt="pizza" />
                                </div>
                                <div className="d-flex  justify-content-center align-items-center">
                                    <button id="emailNext" className="btn btn-primary w-50 ms-2 mt-2" disabled={showPassword} onClick={handleCaptchaNextBtnClick}>
                                        Next
                                    </button>
                                </div>
                            </div>
                        }
                        {/* SHOWING PASSWORD AND CONFIRM PASSWORD LOGIC */}
                        {showPassword &&
                            <>
                                <div className="form-row">
                                    <div className="p-1">
                                        <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Enter password" name="password" id="password" />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="p-2">
                                        <input type="password" onChange={(e) => setcPassword(e.target.value)} className="form-control" placeholder="Confirm password" name="confirmPassword" id="confirmPassword" />
                                    </div>
                                </div>
                                <div className="d-flex  justify-content-center align-items-center">
                                    <button id="emailNext" onClick={handlePasswordNextBtnClick} className="btn btn-primary w-50">
                                        Set Password
                                    </button>
                                </div>
                            </>
                        }
                    </form>
                </div>
            </div>
        </>
    )
    // }
}
