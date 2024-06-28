import React, { useState } from 'react'
import './companyLogin.css'
import img1 from '../../../assets/images/shieldLogo.png'
import img2 from '../../../assets/images/eye.png'
import img3 from '../../../assets/images/eyeslash.svg'


function CompanyLogin() {
    const [icon, setIcon] = useState(img2)
    const togglePasswordVisibility = () => {

        const passwordInput = document.getElementById('Password')

        if (passwordInput.type === 'password') {
            passwordInput.type = 'text'
            setIcon(img3)

        } else {
            passwordInput.type = 'password';
            setIcon(img2)

        }

    }
    return (
        <div>
            <div className='companylogin-background'>
                <div className='companylogin-box'>
                    <h3 className='resetpassword-heading'>Company Login</h3>
                    <div class="row">
                        <div class="col-5 companylogin-logo">
                            <img src={img1} alt="loginPage logo" className='img-fluid my-4' />
                        </div>
                        <div class="col-7 companylogin-inputs">
                            <div class="mb-3 companylogin-inner">
                                <label for="exampleFormControlInput1" class="form-label">Username</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Username" />
                            </div>
                            <div class="mb-3 companylogin-inner">
                                <label for="exampleFormControlInput1" class="form-label">Password</label>
                                <input type="password" class="form-control" id="Password" placeholder="Enter Password" />
                                <span id='toggle-password' onClick={togglePasswordVisibility}><img src={icon} alt="" /></span>
                            </div>
                            <div className='forgot-password'>
                                <a href="">forgot password?</a>
                            </div>
                            <button class="login-button" value="submit" type="submit">Login</button>
                            <div className='register-now'>
                                Don't have an account Yet? <a href="#">Register Now!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompanyLogin