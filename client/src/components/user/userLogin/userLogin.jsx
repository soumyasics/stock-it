import CommonNavbar from "../../common/commonNavbar";
import { Footer2 } from "../../common/footer2/footer2";
import img1 from "../../../assets/images/shieldLogo.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-hot-toast";
import axiosInstance from "../../../apis/axiosInstance";
export const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const navigateToUserRegistration = () => {
    navigate("/userRegistration");
  };
  const redirectToHome = () => {
    navigate('/userHome')
  }
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
    sendDataToServer({ email, password });
  };

  const sendDataToServer = async (formData) => {
    try {
      const response = await axiosInstance.post(
        "/loginUser",
        formData
      );
      console.log("resg respo", response);
      if (response.status === 200) {
        toast.success("User login successful.");
        redirectToHome();
      } else {
        toast.error(response.data.msg);
      }
    } catch (error) {
      console.error("There was an error registering the company!", error);
      const msg = error?.response?.data?.msg || "Network issue";
      toast.error(msg);
    }
  };

  return (
    <div>
      <CommonNavbar />
      <div style={{ minHeight: "500px" }}>
        <div>
          <div className="companylogin-background">
            <div className="companylogin-box">
              <h3 className="resetpassword-heading">User Login</h3>
              <div class="row">
                <div class="col-5 companylogin-logo">
                  <img
                    src={img1}
                    alt="loginPage logo"
                    className="img-fluid my-4"
                  />
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
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  {/* <div className="forgot-password">
                    <a href="">forgot password?</a>
                  </div> */}
                  <button className="login-button mt-3" value="submit" type="submit">
                    Login
                  </button>
                  <div className="register-now">
                    Don't have an account Yet?
                    <span
                      className="fs-6 fw-bold ms-2"
                      style={{ cursor: "pointer" }}
                      onClick={navigateToUserRegistration}
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
};
