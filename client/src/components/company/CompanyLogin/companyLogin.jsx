import React, { useState } from "react";
import "./companyLogin.css";
import img1 from "../../../assets/images/shieldLogo.png";
import CompanyRequest from "../CompanyRequest";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../apis/axiosInstance";

function CompanyLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const redirectToComapanySignup = () => {
    navigate("/CompanyRegistration");
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    sendDataToServer();
  };

  const sendDataToServer = async () => {
    try {
      const res = await axiosInstance.post("loginCompany", { email, password });
      if (res.status === 200) {
        const userData = res.data?.data || null;
        if (userData) {
          localStorage.setItem("stock_it_companyData", JSON.stringify(userData));
        }
        console.log("user data", res.data)
        toast.success("Login Successful");
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
          <div class="row">
            <div class="col-5 companylogin-logo">
              <img src={img1} alt="loginPage logo" className="img-fluid my-4" />
            </div>
            <form class="col-7 companylogin-inputs" onSubmit={handleSubmit}>
              <div class="mb-3 companylogin-inner">
                <label for="exampleFormControlInput1" class="form-label">
                  Email
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
                  style={{ cursor: "pointer" }}
                >
                  Register Now!
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyLogin;
