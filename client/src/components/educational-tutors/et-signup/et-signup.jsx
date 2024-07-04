import React from "react";
import img1 from "../../../assets/images/shieldLogo.png";

function EtSignup() {
  return (
    <div>
      {" "}
      <div style={{ minHeight: "500px" }}>
        <div className="userRegistration">
          <div className="userRegistration-main">
            <div className="userRegistration-head">
              <h1>Educational Tutor Registration</h1>
              {/* <div className="userRegistration-profile">
            <img src={profilePic} alt="Profile" />
          </div> */}
            </div>
            <form className="userRegistration-content">
              <div className="userRegistration-logo">
                <img src={img1} alt="logo" />
              </div>
              <div className="userRegistration-inputs ">
                <div className="userRegistration-input-1">
                  <div className="row">
                    <div className="col">
                      <label htmlFor="firstName">First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First name"
                        name="firstName"
                      />
                    </div>
                    <div className="col">
                      <label htmlFor="lastname">Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last name"
                        aria-label="Last name"
                        name="lastName"
                      />
                    </div>
                  </div>
                </div>
                <div className="userRegistration-input-2">
                  <div>
                    <label className="mt-3">Gender</label>
                    <br />
                    <div
                      className="userRegistration-gender  d-flex"
                      // style={{ height: "30px", width: "100px" }}
                    >
                      <label htmlFor="male">M</label> &nbsp;
                      <input
                        type="radio"
                        name="gender"
                        id="male"
                        value="male"
                      />
                      &nbsp; &nbsp;
                      <label className="ms-3" htmlFor="female">
                        F
                      </label>{" "}
                      &nbsp;
                      <input
                        type="radio"
                        name="gender"
                        id="female"
                        value="female"
                      />
                      &nbsp;
                      <label className="ms-3" htmlFor="other">
                        Other
                      </label>{" "}
                      &nbsp;
                      <input
                        type="radio"
                        id="other"
                        name="gender"
                        value="other"
                      />
                      &nbsp;
                    </div>
                  </div>
                </div>
        
                <div className="userRegistration-input-4">
                  <div className="row fieldgap">
                    <div className="col">
                      <label htmlFor="edbackground">Educational Background</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Eductional background"
                        name="Edbackgroun"
                      />
                    </div>
                    <div className="col">
                      <label htmlFor="edquaification">Educational Qualification</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Educational Qualification"
                        name="edqualification"
                      />
                    </div>
                  </div>

                  <div className="row fieldgap">
                    <div className="col">
                      <label htmlFor="pincode">Pincode</label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Enter Pincode"
                        name="pincode"
                      />
                    </div>
                    <div className="col">
                      <label htmlFor="contact">Contact Number</label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Enter Contact Number"
                        aria-label="Last name"
                        name="contactNumber"
                      />
                    </div>
                  </div>

                  <div className="row fieldgap">
                    <div className="col">
                      <label htmlFor="email">Email ID</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="First name"
                        name="email"
                      />
                    </div>
                    <div className="col">
                      <label htmlFor="proof">Id proof</label>
                      <input
                        type="file"
                        className="form-control"
                        placeholder="upload"
                        aria-label="Last name"
                      />
                    </div>
                  </div>

                  <div className="row fieldgap">
                    <div className="col">
                      <label htmlFor="password">password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Enter Password"
                        name="password"
                      />
                    </div>
                    <div className="col">
                      <label htmlFor="confirmpassword">Confirm Password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Re Enter Password"
                        aria-label="Last name"
                        name="confirmPassword"
                      />
                    </div>

                    <div className="col">
                      <label htmlFor="proof">Photo</label>
                      <input
                        type="file"
                        className="form-control"
                        placeholder="upload"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}

export default EtSignup;
