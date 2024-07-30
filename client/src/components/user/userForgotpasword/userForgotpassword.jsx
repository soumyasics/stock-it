import React, { useState } from "react";
import "./userForgotpassword.css";
import img1 from "../../../assets/images/shieldLogo.png";
import CommonNavbar from "../../common/commonNavbar";
import { Footer2 } from "../../common/footer2/footer2";
import { toast } from "react-hot-toast";
import axiosInstance from "../../../apis/axiosInstance";
import { useNavigate } from "react-router-dom";
import { TiArrowBackOutline } from "react-icons/ti";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

function UserForgotpassword() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const[showPassword,setShowPassword]=useState(true)
  const[showPassword1,setShowPassword1]=useState(true)
  const navigate = useNavigate();
  const redirectToUserLogin = () => {
    navigate("/userLogin");
  };
  const toggleButton=()=>{
    setShowPassword(!showPassword)
  }
  const toggleButton1=()=>{
    setShowPassword1(!showPassword1)
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
        redirectToUserLogin();
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
        <div className="userForgotpassword">
          <div
            className="userForgotpassword-backbtn ms-5"
            onClick={redirectToUserLogin}
          >
            <TiArrowBackOutline />
          </div>
          <div className="userForgotpassword-box">
            <h3 className="resetpassword-heading">Forgot Password</h3>
            <div className="row">
              <div className="col-5 userForgotpassword-logo">
                <img
                  src={img1}
                  alt="loginPage logo"
                  className="img-fluid my-4"
                />
              </div>
              <form
                className="col-7 userForgotpassword-inputs"
                onSubmit={handleSubmit}
              >
                <div className="mb-3 userForgotpassword-inner">
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
                <div className="mb-3 userForgotpassword-inner">
                  <label for="exampleFormControlInput1" className="form-label">
                    New Password
                  </label>
                  {/* <input
                    type="password"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Enter New Password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                  /> */}
                   <InputGroup className="mb-3 companyForgotpasswordInput">
                    <Form.Control
                      placeholder="Enter New Password"
                      type={showPassword ? "password" : "text"}
                      aria-label="password"
                      aria-describedby="basic-addon1"
                      name="password"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                    <InputGroup.Text id="basic-addonUser">
                      {showPassword ? (
                        <FaEyeSlash onClick={toggleButton} />
                      ) : (
                        <FaEye onClick={toggleButton} />
                      )}
                    </InputGroup.Text>
                  </InputGroup>
                </div>
                <div className="mb-3 userForgotpassword-inner">
                  <label for="exampleFormControlInput1" className="form-label">
                    Confirm Password
                  </label>
                  {/* <input
                    type="password"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Enter Confirm Password"
                    name="confirmPassword"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  /> */}
                       <InputGroup className="mb-3 companyForgotpasswordInput">
                    <Form.Control
                      placeholder="Enter confirm Password"
                      type={showPassword1 ? "password" : "text"}
                      aria-label="password"
                      aria-describedby="basic-addon1"
                      name="confimPassword"
                      onChange={(e) => {
                        setConfirmPassword(e.target.value);
                      }}
                    />
                    <InputGroup.Text id="basic-addonUser">
                      {showPassword1 ? (
                        <FaEyeSlash onClick={toggleButton1} />
                      ) : (
                        <FaEye onClick={toggleButton1} />
                      )}
                    </InputGroup.Text>
                  </InputGroup>
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
    </div>
  );
}

export default UserForgotpassword;
