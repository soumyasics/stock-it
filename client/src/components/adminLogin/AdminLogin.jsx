import React, { useState } from "react";
import "./AdminLogin.css";
import img6 from "../../assets/images/shieldLogo.png";
import axiosInstance from "../../apis/axiosInstance";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useEffect } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";

import CommonNavbar from "../common/commonNavbar";

function AdminLogin() {
  const navigate = useNavigate();
  const [state, setState] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(true);
  const [show, setShow] = useState(false);
  const handleChange = () => {
    setShowPassword(!showPassword);
    setShow(!show);
  };
  function btnchange(input) {
    setState({ ...state, [input.target.name]: input.target.value });
  }

  useEffect(() => {
    const isAdminLoggedin = localStorage.getItem("stock_it_admin_login");
    if (isAdminLoggedin == "true") {
      navigate("/admin");
    }
  }, []);

  const btnsubmit = (e) => {
    e.preventDefault();

    axiosInstance
      .post("/loginAdmin", state)
      .then((res) => {
        console.log(res);
        if (res.data.status === 200) {
          toast.success("Login Successfully");
          localStorage.setItem("stock_it_admin_login", true);
          navigate("/admin");
        } else {
          toast.error(res.data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <CommonNavbar />
      <div>
        <div className="AdminLogin-background">
          <div className="AdminLogin-box">
            <h3 className="AdminLogin-heading display-7">Admin Login</h3>
            <div className="row">
              <div className="col-5 AdminLogin-left-box">
                <img
                  src={img6}
                  alt="loginPage logo"
                  className="img-fluid my-4 adminLogin-image"
                />
              </div>
              <div className="col-7 AdminLogin-left-box">
                <div className="AdminLogin-left-inner-box my-5">
                  <form action="" onSubmit={btnsubmit}>
                    <div className="mb-3">
                      <label for="formGroupExampleInput" className="form-label">
                        Email
                      </label>
                      <input
                        type="text"
                        className="form-control AdminLogin-input"
                        id="formGroupExampleInput"
                        placeholder="Enter email"
                        onChange={btnchange}
                        name="email"
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        for="formGroupExampleInput2"
                        className="form-label"
                      >
                        Password
                      </label>
                      {/* <input
                        type="password"
                        className="form-control AdminLogin-input"
                        id="formGroupExampleInput2"
                        placeholder="Enter Password"
                        onChange={btnchange}
                        name="password"
                      /> */}
                      <InputGroup className="mb-3 adminloginpasswordInput">
                        <Form.Control
                          placeholder="Enter password"
                          aria-label="admin password"
                          aria-describedby="basic-addon2"
                          type={showPassword ? "password" : "text"}
                          onChange={btnchange}
                          name="password"
                        />
                        <InputGroup.Text
                          id="basic-addon23"
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
                    <span
                      className="adminloginResetPassword"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        navigate("/admin-resetPassword");
                      }}
                    >
                      Reset password?
                    </span>

                    <button
                      type="submit"
                      value="submit"
                      className="btn btn-primary AdminLogin-button my-4 "
                    >
                      Login
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminLogin;
