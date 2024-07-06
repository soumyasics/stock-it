import React, { useState } from "react";
import img1 from "../../assets/images/shieldLogo.png";
import "./resetPassword.css";
import axiosInstance from "../../apis/axiosInstance";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
function Resetpassword() {
  const [state, setState] = useState({
    email: "",
    newpassword: "",
    confirmpassword: "",
  });
  const navigate =useNavigate()
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
        navigate('/adminlogin')
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
              <div class="row">
                <div class="col-5 resetpassword-logo">
                  <img
                    src={img1}
                    alt="loginPage logo"
                    className="img-fluid my-4"
                  />
                </div>
                <div class="col-7 resetpassword-inputs">
                  <div class="mb-3 resetpassword-inner">
                    <label for="exampleFormControlInput1" class="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Enter Email"
                      name="email"
                      value={state.email}
                      onChange={tochange}
                    />
                  </div>
                  <div class="mb-3 resetpassword-inner">
                    <label for="exampleFormControlInput1" class="form-label">
                      New Password
                    </label>
                    <input
                      type="password"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Enter New password"
                      name="newpassword"
                      onChange={tochange}
                    />
                  </div>{" "}
                  <div class="mb-3 resetpassword-inner">
                    <label for="exampleFormControlInput1" class="form-label">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Re Enter password"
                      name="confirmpassword"
                      onChange={tochange}
                    />
                  </div>
                  <button class="reset-button" value="submit" type="submit">
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
