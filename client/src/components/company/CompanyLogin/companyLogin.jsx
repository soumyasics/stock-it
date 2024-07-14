import React, { useState } from "react";
import "./companyLogin.css";
import img1 from "../../../assets/images/shieldLogo.png";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../apis/axiosInstance";
import { Footer2 } from "../../common/footer2/footer2";

function CompanyLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const redirectToComapanySignup = () => {
    navigate("/CompanyRegistration");
  };
  const redirectToComapnyForgotpassword=()=>{
    navigate("/companyForgotpassword")
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please enter email and password");
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      toast.error("Email is not valid");
      return;
    }

    if (password.length < 8) {
      toast.error("Password must be at least 8 characters long");
      return;
    }

    sendDataToServer();
  };

  const sendDataToServer = async () => {
    try {
      const res = await axiosInstance.post("loginCompany", { email, password });
      if (res.status === 200) {
        const userData = res.data?.data?._id || null;
        if (userData) {
          localStorage.setItem("stock_it_companyId", JSON.stringify(userData));
        }
        toast.success("Login Successful");
        navigate('/company-dashboard')
      } else {
        throw new Error("Something wrong.");
      }
      console.log("resp", res);
    } catch (err) {
      const msg = err.response?.data?.msg || "Something went wrong";
      
      console.log("company login msg", err)
      toast.error(msg);
    }
  };
  return (
    <div>
      <div className="companylogin-background">
        <div className="companylogin-box">
          <h3 className="resetpassword-heading">Company Login</h3>
          <div className="row">
            <div className="col-5 companylogin-logo">
              <img src={img1} alt="loginPage logo" className="img-fluid my-4" />
            </div>
            <form className="col-7 companylogin-inputs" onSubmit={handleSubmit}>
              <div className="mb-3 companylogin-inner">
                <label for="exampleFormControlInput1" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3 companylogin-inner">
                <label for="exampleFormControlInput1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="forgot-password">
                <span onClick={redirectToComapnyForgotpassword} >forgot password?</span>
              </div>
              <button className="login-button" value="submit" type="submit">
                Login
              </button>
              <div className="register-now">
                Don't have an account Yet?
                <span
                  onClick={redirectToComapanySignup}
                  className="fs-6 fw-bold ms-2"
                  style={{ cursor: "pointer" }}
                >
                  Register Now!
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div>
        <Footer2 /> 
      </div>

    </div>
  );
}

export default CompanyLogin;
