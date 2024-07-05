import React, { useState } from "react";
import img1 from "../../../assets/images/shieldLogo.png";
import "./et-signup.css";
import CommonNavbar from "../../common/commonNavbar";
import { Footer2 } from "../../common/footer2/footer2";
import { toast } from "react-hot-toast";
import { faL } from "@fortawesome/free-solid-svg-icons";

function EtSignup() {
  const [etData, setEtData] = useState({
    fullName: "",
    gender: "",
    qualification: "",
    specification: "",
    experience: "",
    contactNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    photo: null,
  });
  const handleChanges = (e) => {
    const { name, value } = e.target;

    if (name === "contactNumber" && value.length > 10) {
      return;
    }
    if (name === "experience" && value.length > 2) {
      return;
    }
    setEtData({ ...etData, [name]: value });
  };

  const validateFields = () => {
    const {
        fullName,
        gender,
        qualification,
        specification,
        experience,
        contactNumber,
        email,
        password,
        confirmPassword,
        photo,
      } = etData;

    if (!fullName) {
      toast.error("Full name is required");
      return false;
    }
    if (!gender) {
      toast.error("Gender is required");
      return false;
    }

    if (!qualification) {
      toast.error("Qualification is required");
      return false;
    }
    if (!specification) {
      toast.error("Specification is required");
      return false;
    }
    if (!experience) {
      toast.error("Experience is required");
      return false;
    }
    if (!contactNumber) {
      toast.error("Contact Number is required");
      return false;
    }
    if (!email) {
      toast.error("Eamil is required");
      return false;
    }
    if (!password) {
      toast.error("Password is required");
      return false;
    }
    if(password.length<8){
        toast.error("Please Enter minimum 8 characters")
        return false
    }
    if (!confirmPassword) {
      toast.error("Confirm Password is required");
      return false;
    }
    if(password!==confirmPassword){
        toast.error("Passwords doesn't matches")
        return false
    }
    if (!photo) {
      toast.error("Photo is required");
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(etData);
  
    console.log();
    if (!validateFields()) {
      return;
    }

    
  };

  return (
    <div>
      <CommonNavbar />
      <div style={{ minHeight: "500px" }}>
        <div className="etRegistration">
          <div className="etRegistration-main">
            <div className="etRegistration-head">
              <h1>Educational Tutor Registration</h1>
              {/* <div className="etRegistration-profile">
            <img src={profilePic} alt="Profile" />
          </div> */}
            </div>
            <form className="etRegistration-content" onSubmit={handleSubmit}>
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
                        name="fullName"
                        value={etData.fullName}
                        onChange={handleChanges}
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
                          <label className="mt-2" htmlFor="male">
                            Male
                          </label>{" "}
                          &nbsp;
                          <input
                            type="radio"
                            className="mt-2"
                            name="gender"
                            id="male"
                            value="male"
                            onChange={handleChanges}
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
                            onChange={handleChanges}
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
                            onChange={handleChanges}
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
                        name="qualification"
                        value={etData.qualification}
                        onChange={handleChanges}
                      />
                    </div>
                  </div>

                  <div className="row fieldgap">
                    <div className="col mt-4">
                      <label htmlFor="area of spcl">
                        Area of Specification
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Area of Specification"
                        name="specification"
                        value={etData.specification}
                        onChange={handleChanges}
                      />
                    </div>
                    <div className="col mt-4">
                      <label htmlFor="yoe">Year of Experience</label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Enter Year of Experience"
                        name="experience"
                        value={etData.experience}
                        onChange={handleChanges}
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
                        name="contactNumber"
                        value={etData.contactNumber}
                        onChange={handleChanges}
                      />
                    </div>
                    <div className="col mt-4">
                      <label htmlFor="email">Email ID</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter Email"
                        name="email"
                        value={etData.email}
                        onChange={handleChanges}
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
                        value={etData.password}
                        onChange={handleChanges}
                      />
                    </div>
                    <div className="col mt-4">
                      <label htmlFor="confirmpassword">Confirm Password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Re Enter Password"
                        name="confirmPassword"
                        value={etData.confirmPassword}
                        onChange={handleChanges}
                      />
                    </div>
                  </div>
                  <div className="col mt-4">
                    <label htmlFor="photo">Photo</label>
                    <input
                      type="file"
                      className="form-control"
                      placeholder="upload"
                      name="photo"
                      onChange={(e) => {
                        setEtData({ ...etData, photo: e.target.files[0] });
                      }}
                    />
                  </div>
                </div>
                <span>
                  <button type="submit">Register</button>
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
      {<Footer2 />}
    </div>
  );
}

export default EtSignup;
