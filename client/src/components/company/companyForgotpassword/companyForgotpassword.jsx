import React, { useState } from "react";
import "./companyForgotpassword.css";
import img1 from "../../../assets/images/shieldLogo.png";
import CommonNavbar from "../../common/commonNavbar";
import { Footer2 } from "../../common/footer2/footer2";
import { toast } from "react-hot-toast";
import axiosInstance from "../../../apis/axiosInstance";
import { useNavigate } from "react-router-dom";
import { TiArrowBackOutline } from "react-icons/ti";

function CompanyForgotpassword() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const redirectTocompanyLogin = () => {
    navigate("/companylogin");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return false;
    }
    if (!password) {
      toast.error("Password is required");
      return;
    }
    if (password.length < 8) {
      toast.error("Password needs minimum 8 characters");
      return;
    }
    if (!confirmPassword) {
      toast.error("Confirm password is required");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords doesn't matches ");
      return;
    }
    let obj = {
      email,
      newPassword: password,
    };
    sendDataToServer(obj);
  };
  const sendDataToServer = async (data) => {
    try {
      const response = await axiosInstance.post("/user-forgot-password", data);
      console.log("forgot res", response);
      if (response.status === 200) {
        toast.success(response.data.msg);
        redirectTocompanyLogin();
      } else {
        toast.error(response.data.msg);
      }
    } catch (error) {
      const status = error.response?.status;
      if (status == 400) {
        toast.error("Check your email Id");
      } else {
        console.error("There was an error in changing passwords!", error);
        toast.error("Network error");
      }
    }
  };
  return (
    <div>
      <div>
        <CommonNavbar />
        <div className="companyForgotpassword">
          <div
            className="companyForgotpassword-backbtn ms-5"
            onClick={redirectTocompanyLogin}
          >
            <TiArrowBackOutline />
          </div>
          <div className="companyForgotpassword-box">
            <h3 className="resetpassword-heading">Forgot Password</h3>
            <div class="row">
              <div class="col-5 companyForgotpassword-logo">
                <img
                  src={img1}
                  alt="loginPage logo"
                  className="img-fluid my-4"
                />
              </div>
              <form
                class="col-7 companyForgotpassword-inputs"
                onSubmit={handleSubmit}
              >
                <div class="mb-3 companyForgotpassword-inner">
                  <label for="exampleFormControlInput1" class="form-label">
                    Email Id
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Enter Email Id"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div class="mb-3 companyForgotpassword-inner">
                  <label for="exampleFormControlInput1" class="form-label">
                    New Password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Enter New Password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div class="mb-3 companyForgotpassword-inner">
                  <label for="exampleFormControlInput1" class="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Enter Confirm Password"
                    name="confirmPassword"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <button class="login-button" type="submit">
                  submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <Footer2 />
      </div>
    </div>
  );
}

export default CompanyForgotpassword;
