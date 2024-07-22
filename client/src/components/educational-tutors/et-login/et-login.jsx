import React, { useState } from "react";
import "./et-login.css";
import img1 from "../../../assets/images/shieldLogo.png";
import CommonNavbar from "../../common/commonNavbar";
import { Footer2 } from "../../common/footer2/footer2";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axiosInstance from "../../../apis/axiosInstance";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";

function Etlogin() {
  const navigate = useNavigate();
  const redirectToETRegister = () => {
    navigate("/etsignup");
  };
  const redirectToEtdashboard = () => {
    navigate("/etdashboard");
  };
  const redirectToforgotPassword = () => {
    navigate("/etForgotpassword");
  };
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [showPassword, setShowPassword] = useState(true);
  const [show, setShow] = useState(false);
  const handleChange = () => {
    setShowPassword(!showPassword);
    setShow(!show);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Email is required");
      return;
    }
    if (!password) {
      toast.error("Password is required");
      return;
    }
    if (password.length < 8) {
      toast.error("CheckPassword");
      return;
    }
    sendDataToServer({ email, password });
  };
  const sendDataToServer = async (data) => {
    try {
      const response = await axiosInstance.post("loginTutor", data);
      if (response.status === 200) {
        const tutorId = response.data?.data?._id || null;

        if (tutorId) {
          localStorage.setItem("stock_it_tutorId", JSON.stringify(tutorId));
        }
        toast.success(response.data.msg);
        redirectToEtdashboard();
      } else {
        toast.error(response.data.msg);
      }
    } catch (error) {
      const status = error.response?.status;
      if (status == 401) {
        const msg =
          error?.response?.data?.msg ||
          "Please check your email Id and password";
        toast.error(msg);
      } else if (status == 404) {
        const msg = error?.response?.data?.msg || "Password mismatch";
        toast.error(msg);
      } else if (status == 500) {
        const msg = error?.response?.data?.msg || "Something went wrong";
        toast.error(msg);
      } else {
        toast.error("Please check your network");
      }
    }
  };
  return (
    <div>
      <CommonNavbar />
      <div style={{ minHeight: "500px" }}>
        <div>
          <div className="etlogin-background">
            <div className="etlogin-box">
              <h3 className="resetpassword-heading">Educational Tutor Login</h3>
              <div className="row">
                <div className="col-5 etlogin-logo">
                  <img
                    src={img1}
                    alt="loginPage logo"
                    className="img-fluid my-4"
                  />
                </div>
                <form className="col-7 etlogin-inputs" onSubmit={handleSubmit}>
                  <div className="mb-3 etlogin-inner">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label"
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Enter Email"
                      name="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-3 etlogin-inner">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label"
                    >
                      Password
                    </label>
                    {/* <input
                      type="password"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Enter Password"
                      name="password"
                      onChange={(e) => setPassword(e.target.value)}
                    /> */}

                    <InputGroup className="mb-3 et-loginpasswordInput">
                      <Form.Control
                        placeholder="Enter password"
                        aria-label="password"
                        aria-describedby="basic-addon2"
                        type={showPassword ? "password" : "text"}
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <InputGroup.Text
                        id="basic-addon2"
                        style={{ backgroundColor: "white" }}
                      >
                        {" "}
                        {show ? (
                          <span onClick={handleChange}>
                            <IoIosEye />{" "}
                          </span>
                        ) : (
                          <span onClick={handleChange}>
                            <IoIosEyeOff />
                          </span>
                        )}
                      </InputGroup.Text>
                    </InputGroup>
                  </div>
                  <div className="etforgot-password">
                    <span onClick={redirectToforgotPassword}>
                      forgot password?
                    </span>
                  </div>
                  <button
                    className="login-button mt-3"
                    value="submit"
                    type="submit"
                  >
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
      <Footer2 />
    </div>
  );
}

export default Etlogin;
