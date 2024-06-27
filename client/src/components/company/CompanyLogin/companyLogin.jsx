import React from "react";
import "./companyLogin.css";
import img1 from "../../../assets/images/shieldLogo.png";
import CompanyRequest from "../CompanyRequest";

import { useNavigate } from "react-router-dom";
function CompanyLogin() {
  const navigate = useNavigate();
  const redirectToComapanySignup = () => {
    navigate("/CompanyRegistration");
  };
  return (
    <div>
      <div className="companylogin-background">
        <div className="companylogin-box">
          <h3 className="resetpassword-heading">Company Login</h3>
          <div class="row">
            <div class="col-5 companylogin-logo">
              <img src={img1} alt="loginPage logo" className="img-fluid my-4" />
            </div>
            <div class="col-7 companylogin-inputs">
              <div class="mb-3 companylogin-inner">
                <label for="exampleFormControlInput1" class="form-label">
                  Username
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter Username"
                />
              </div>
              <div class="mb-3 companylogin-inner">
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
              <div className="forgot-password">
                <a href="">forgot password?</a>
              </div>
              <button class="login-button" value="submit" type="submit">
                Login
              </button>
              <div className="register-now">
                Don't have an account Yet?
                <span
                  onClick={redirectToComapanySignup}
                  className="fs-6 fw-bold ms-2"
                >
                  Register Now!
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyLogin;
