import React from 'react'
import './forgotpassword.css'
import img1 from '../../../assets/images/shieldLogo.png'
import CommonNavbar from '../commonNavbar'
import { Footer2 } from '../footer2/footer2'

function Forgotpassword() {
    return (
        <div>
           
            <div className='forgotpassword'>
                <div className="forgotpassword-box">
                    <h3 className="resetpassword-heading">Forgot Password</h3>
                    <div className="row">
                        <div className="col-5 forgotpassword-logo">
                            <img src={img1} alt="loginPage logo" className="img-fluid my-4" />
                        </div>
                        <form className="col-7 forgotpassword-inputs">
                            <div className="mb-3 forgotpassword-inner">
                                <label for="exampleFormControlInput1" className="form-label">
                                    Email Id
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="Enter Email Id"
                                />
                            </div>
                            <div className="mb-3 forgotpassword-inner">
                                <label for="exampleFormControlInput1" className="form-label">
                                   New Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="Enter New Password"
                                />
                            </div>
                            <div className="mb-3 forgotpassword-inner">
                                <label for="exampleFormControlInput1" className="form-label">
                                   Confirm Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="Re Enter Password"
                                />
                            </div>

                            <button className="login-button" type="submit">
                                submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Forgotpassword