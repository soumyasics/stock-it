import React, { useState } from "react";
import img1 from "../../assets/images/shieldLogo.png";
import "./resetPassword.css";
import axiosInstance from "../../apis/axiosInstance";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
function Resetpassword() {
  const [state, setState] = useState({
    email: "",
    newpassword: "",
    confirmpassword: "",
  });
  const [showPassword, setShowPassword] = useState(true);
  const [showPassword1, setShowPassword1] = useState(true);

  const toggleButton = () => {
    setShowPassword(!showPassword);
  };
  const toggleButton1 = () => {
    setShowPassword1(!showPassword1);
  };
  const navigate = useNavigate();
  function tochange(e) {
    setState({ ...state, [e.target.name]: e.target.value });
  }

  const tosave = (a) => {
    a.preventDefault();
    const { email, newpassword, confirmpassword } = state;
    if (!email) {
      toast.error("Email is required");
      return;
    }
    if (!newpassword) {
      toast.error("Password is required");
      return;
    }
    if (!confirmpassword) {
      toast.error("Confirm Password is required");
      return;
    }
    if (state.email !== "admin@gmail.com") {
      toast.error("Please check the email id");
      return;
    }
    if (state.newpassword !== state.confirmpassword) {
      toast.error("The passwords doesn't match ");
      return;
    }

    axiosInstance.post("/resetPwd", state).then((res) => {
      console.log(res);
      if (res.data.status == 200) {
        toast.success(res.data.msg);
        navigate("/adminlogin");
      } else {
        toast.error(res.data.msg);
      }
    });
  };
  return (
    <div>
      <div>
        <form onSubmit={tosave}>
          <div className="resetpassword-background">
            <div className="resetpassword-box">
              <h3 className="resetpassword-heading">Reset Password</h3>
              <div className="row">
                <div className="col-5 resetpassword-logo">
                  <img
                    src={img1}
                    alt="loginPage logo"
                    className="img-fluid my-4"
                  />
                </div>
                <div className="col-7 resetpassword-inputs">
                  <div className="mb-3 resetpassword-inner">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Enter Email"
                      name="email"
                      value={state.email}
                      onChange={tochange}
                    />
                  </div>
                  <div className="mb-3 resetpassword-inner">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label"
                    >
                      New Password
                    </label>
                    {/* <input
                      type="password"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Enter New password"
                      name="newpassword"
                      onChange={tochange}
                    /> */}
                    <InputGroup className="mb-3 companyForgotpasswordInput">
                      <Form.Control
                        placeholder="Enter New Password"
                        type={showPassword ? "password" : "text"}
                        aria-label="password"
                        aria-describedby="basic-addon1"
                        name="newpassword"
                        onChange={tochange}
                      />
                      <InputGroup.Text id="basic-addonReset">
                        {showPassword ? (
                          <FaEyeSlash onClick={toggleButton} />
                        ) : (
                          <FaEye onClick={toggleButton} />
                        )}
                      </InputGroup.Text>
                    </InputGroup>
                  </div>{" "}
                  <div className="mb-3 resetpassword-inner">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label"
                    >
                      Confirm Password
                    </label>
                    {/* <input
                      type="password"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Re Enter password"
                      name="confirmpassword"
                      onChange={tochange}
                    /> */}
                           <InputGroup className="mb-3 companyForgotpasswordInput">
                      <Form.Control
                        placeholder="Re Enter Password"
                        type={showPassword1 ? "password" : "text"}
                        aria-label="password"
                        aria-describedby="basic-addon1"
                        name="confirmpassword"
                        onChange={tochange}
                      />
                      <InputGroup.Text id="basic-addonReset">
                        {showPassword1 ? (
                          <FaEyeSlash onClick={toggleButton1} />
                        ) : (
                          <FaEye onClick={toggleButton1} />
                        )}
                      </InputGroup.Text>
                    </InputGroup>
                  </div>
                  <button className="reset-button" value="submit" type="submit">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Resetpassword;
