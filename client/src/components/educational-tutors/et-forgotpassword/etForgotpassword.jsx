import React from 'react'
import './etForgotpassword.css'
import img1 from '../../../assets/images/shieldLogo.png'

function EtForgotpassword() {
  return (
    <div>
         <div className='etForgotpassword'>
                <div className="etForgotpassword-box">
                    <h3 className="resetpassword-heading">Forgot Password</h3>
                    <div class="row">
                        <div class="col-5 etForgotpassword-logo">
                            <img src={img1} alt="loginPage logo" className="img-fluid my-4" />
                        </div>
                        <form class="col-7 etForgotpassword-inputs">
                            <div class="mb-3 etForgotpassword-inner">
                                <label for="exampleFormControlInput1" class="form-label">
                                    Email Id
                                </label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="Enter Email Id"
                                />
                            </div>
                            <div class="mb-3 etForgotpassword-inner">
                                <label for="exampleFormControlInput1" class="form-label">
                                   New Password
                                </label>
                                <input
                                    type="password"
                                    class="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="Enter New Password"
                                />
                            </div>
                            <div class="mb-3 etForgotpassword-inner">
                                <label for="exampleFormControlInput1" class="form-label">
                                   Confirm Password
                                </label>
                                <input
                                    type="password"
                                    class="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="Re Enter Password"
                                />
                            </div>

                            <button class="login-button" type="submit">
                                submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default EtForgotpassword