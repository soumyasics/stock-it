import React from 'react'
import './et-login.css'
import img1 from "../../../assets/images/shieldLogo.png";
import CommonNavbar from '../../common/commonNavbar';
import { Footer2 } from '../../common/footer2/footer2';
import { useNavigate } from 'react-router-dom';
function  Etlogin() {
  const navigate = useNavigate();
  const redirectToETRegister = () => {
    navigate('/etsignup')
  }
  return (
    <div>
        <CommonNavbar/>
        <div style={{ minHeight: "500px" }}>
        <div>
          <div className="etlogin-background">
            <div className="etlogin-box">
              <h3 className="resetpassword-heading">Educational Tutor Login</h3>
              <div class="row">
                <div class="col-5 etlogin-logo">
                  <img
                    src={img1}
                    alt="loginPage logo"
                    className="img-fluid my-4"
                  />
                </div>
                <form class="col-7 etlogin-inputs">
                  <div class="mb-3 etlogin-inner">
                    <label for="exampleFormControlInput1" class="form-label">
                      Email
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Enter Email"
                   
                    />
                  </div>
                  <div class="mb-3 etlogin-inner">
                    <label for="exampleFormControlInput1" class="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Enter Password"
                     
                    />
                  </div>
                  {/* <div className="forgot-password">
                    <a href="">forgot password?</a>
                  </div> */}
                  <button className="login-button mt-3" value="submit" type="submit">
                    Login
                  </button>
                  <div className="register-now">
                    Don't have an account Yet?
                    <span
                      className="fs-6 fw-bold ms-2"
                      style={{ cursor: "pointer" }}
                     onClick={redirectToETRegister}
                    >
                      Register Now!
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer2/>
    </div>
  )
}

export default Etlogin