import React from "react";
import img1 from "../../../assets/images/shieldLogo.png";
import "./et-signup.css";
import CommonNavbar from "../../common/commonNavbar";
import { Footer2 } from "../../common/footer2/footer2";

function EtSignup() {
  return (
    <div>
      <CommonNavbar/>
      <div style={{ minHeight: "500px" }}>
        <div className="etRegistration">
          <div className="etRegistration-main">
            <div className="etRegistration-head">
              <h1>Educational Tutor Registration</h1>
              {/* <div className="etRegistration-profile">
            <img src={profilePic} alt="Profile" />
          </div> */}
            </div>
            <form className="etRegistration-content">
              <div className="etRegistration-logo">
                <img src={img1} alt="logo" />
              </div>
              <div className="etRegistration-inputs ">
                <div className="etRegistration-input-1">
                  <div className="row">
                    <div className="col">
                      <label htmlFor="fullName">Full Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Full name"
                        name="fullname"
                      />
                    </div>
                    <div className="etRegistration-input-2 col">
                      <div>
                        <label>Gender</label>
                        <br />
                        <div
                          className="etRegistration-gender  d-flex"
                          // style={{ height: "30px", width: "100px" }}
                        >
                          <label className="mt-2" htmlFor="male">Male</label> &nbsp;
                          <input
                            type="radio"
                            className="mt-2"
                            name="gender"
                            id="male"
                            value="male"
                          />
                          &nbsp; &nbsp;
                          <label className="ms-3 mt-2 " htmlFor="female">
                            Female
                          </label>{" "}
                          &nbsp;
                          <input
                            type="radio"
                            className="mt-2"
                            name="gender"
                            id="female"
                            value="female"
                          />
                          &nbsp;
                          <label className="ms-3 mt-2" htmlFor="other">
                            Other
                          </label>{" "}
                          &nbsp;
                          <input
                          className="mt-2"
                            type="radio"
                            id="other"
                            name="gender"
                            value="other"
                          />
                          &nbsp;
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="etRegistration-input-4">
                  <div className="row fieldgap">
                    <div className="col mt-4">
                      <label htmlFor="edquaification">
                        Educational Qualification
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Educational Qualification"
                        name="edqualification"
                      />
                    </div>
                  </div>

                  <div className="row fieldgap">
                    <div className="col mt-4">
                      <label htmlFor="area of spcl">
                        Area of Specification
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Area of Specification"
                        name="specification"
                      />
                    </div>
                    <div className="col mt-4">
                      <label htmlFor="yoe">Year of Experience</label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Enter Year of Experience"
                        name="YOE"
                      />
                    </div>
                  </div>

                  <div className="row fieldgap">
                    <div className="col mt-4">
                      <label htmlFor="contactnumber">Contact Number</label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Enter Contact Number"
                        name="contactnumber"
                      />
                    </div>
                    <div className="col mt-4">
                      <label htmlFor="email">Email ID</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter Email"
                      />
                    </div>
                  </div>

                  <div className="row fieldgap">
                    <div className="col mt-4">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Enter Password"
                        name="password"
                      />
                    </div>
                    <div className="col mt-4">
                      <label htmlFor="confirmpassword">Confirm Password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Re Enter Password"
                        aria-label="Last name"
                        name="confirmPassword"
                      />
                    </div>
                  </div>
                  <div className="col mt-4">
                    <label htmlFor="photo">Photo</label>
                    <input
                      type="file"
                      className="form-control"
                      placeholder="upload"
                    />
                  </div>
                </div>
                <span>
                  <button  type="submit">Register</button>
                  <p className="login-link">
                    Already have an account?{" "}
                    <span className="text-primary">Login Now </span>
                  </p>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
      {<Footer2/>}
    </div>
  );
}

export default EtSignup;
