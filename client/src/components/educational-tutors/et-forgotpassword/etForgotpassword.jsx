import React, { useState } from "react";
import "./etForgotpassword.css";
import img1 from "../../../assets/images/shieldLogo.png";
import CommonNavbar from "../../common/commonNavbar";
import { Footer2 } from "../../common/footer2/footer2";
import { toast } from "react-hot-toast";
import axiosInstance from "../../../apis/axiosInstance";
import { useNavigate } from "react-router-dom";
import { TiArrowBackOutline } from "react-icons/ti";

function EtForgotpassword() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate=useNavigate()
  const redirectToEtLogin=()=>{
    navigate("/etlogin")
  }
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
        newPassword: password
    }
    sendDataToServer(obj);
  };
  const sendDataToServer = async (data) => {
    try {
      const response = await axiosInstance.post("/tutor-forgot-password", data);
      console.log("forgot res", response);
      if (response.status === 200) {
        toast.success(response.data.msg);
redirectToEtLogin()
      } else {
        toast.error(response.data.msg);
      }
    } catch (error) {
      const status=error.response?.status
      if(status==400){
        toast.error("Check your email Id")
      }else{
        console.error("There was an error in changing passwords!",error)
        toast.error("Network error")
      }
    }
  };
  return (
    <div>
      <CommonNavbar />
      <div className="etForgotpassword">
        <div className="etForgotpassword-backbtn ms-5" onClick={redirectToEtLogin}>
        <TiArrowBackOutline />
        </div>
        <div className="etForgotpassword-box">
          <h3 className="resetpassword-heading">Forgot Password</h3>
          <div className="row">
            <div className="col-5 etForgotpassword-logo">
              <img src={img1} alt="loginPage logo" className="img-fluid my-4" />
            </div>
            <form className="col-7 etForgotpassword-inputs" onSubmit={handleSubmit}>
              <div className="mb-3 etForgotpassword-inner">
                <label for="exampleFormControlInput1" className="form-label">
                  Email Id
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter Email Id"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3 etForgotpassword-inner">
                <label for="exampleFormControlInput1" className="form-label">
                  New Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter New Password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mb-3 etForgotpassword-inner">
                <label for="exampleFormControlInput1" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter Confirm Password"
                  name="confirmPassword"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <button className="login-button" type="submit">
                submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
  );
}

export default EtForgotpassword;
