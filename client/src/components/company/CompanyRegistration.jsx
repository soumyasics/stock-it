import React, { useState } from "react";
import img5 from "../../assets/images/shieldLogo.png";

import axiosMultipartInstance from "../../apis/axiosMultipartInstance";
import "./CompanyRegistration.css";
import CommonNavbar from "../common/commonNavbar";
import { Footer2 } from "../common/footer2/footer2";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

function CompanyRegistration() {
  const [showPassword, setShowPassword] = useState(true);
  const [showPassword1, setShowPassword1] = useState(true);
  const toggleButton = () => {
    setShowPassword(!showPassword);
  };
  const toggleButton1 = () => {
    setShowPassword1(!showPassword1);
  };
  const navigate = useNavigate();
  const [companyData, setCompanyData] = useState({
    name: "",
    pincode: "",
    companyType: "",
    year: "",
    password: "",
    website: "",
    state: "",
    contact: "",
    district: "",
    email: "",
    description: "",
    regNo: "",
    logo: null,
    license: null,
  });
  const [errors, setErrors] = useState({
    name: "",
    dob: "",
    gender: "",
    nationality: "",
    address: "",
    contact: "",
    email: "",
    password: "",
    bcNo: "",
    dateOfEnrollment: "",
    bcState: "",
    specialization: "",
    experience: "",
    qualification: "",
    profilePic: "",
    idProof: "",
  });

  // This code is just for testing purpose
  // const [companyData, setCompanyData] = useState({
  //   name: "name 1",
  //   pincode: "1234123",
  //   companyType: "Type1",
  //   year: "2000",
  //   password: "1234123",
  //   confirmPassword: "12341234",
  //   website: "https://www.google.com",
  //   state: "state",
  //   contact: "1234132412",
  //   email: "abc@gmail.com",
  //   description: "description",
  //   regNo: "1234123412",
  //   logo: null,
  //   license: null,
  // });

  const redirectToLogin = () => {
    navigate("/companylogin");
  };
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setCompanyData({ ...companyData, [name]: files[0] });
    } else {
      setCompanyData({ ...companyData, [name]: value });
    }

    console.log(companyData);
  };

  function validateContact(fieldName, value) {
    console.log("in validate", value);
    const contactRegex = /^[0-9]+$/;
    if (!value.trim()) {
      return `${fieldName} is required`;
    } else if (!contactRegex.test(value) || value.length !== 10) {
      return "Please enter a valid Contact Number";
    }
    return "";
  }
  const sendDataToServer = async (formData) => {
    formData.append("name", companyData.name);
    formData.append("pincode", companyData.pincode);
    formData.append("companyType", companyData.companyType);
    formData.append("year", companyData.year);
    formData.append("website", companyData.website);
    formData.append("state", companyData.state);
    formData.append("contact", companyData.contact);
    formData.append("district", companyData.district);
    formData.append("email", companyData.email);
    formData.append("description", companyData.description);
    formData.append("regNo", companyData.regNo);
    formData.append("password", companyData.password);
    formData.append("files", companyData.logo);
    formData.append("files", companyData.license);
    try {
      const response = await axiosMultipartInstance.post(
        "/registerCompany",
        formData
      );
      console.log(response);
      if (response.data.status === 200) {
        toast.success("Company registered successfully");
        redirectToLogin();
      } else {
        alert(response.data.msg);
      }
    } catch (error) {
      console.error("There was an error registering the company!", error);
      alert(error);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    let errors = {};
    let formIsValid = true;
    errors.contact = validateContact("Contact", companyData.contact);
    setErrors(errors);
    for (let key in errors) {
      if (errors[key]) {
        formIsValid = false;
        break;
      }
    }
    const {
      name,
      pincode,
      companyType,
      year,
      website,
      state,
      contact,
      district,
      email,
      description,
      regNo,
      logo,
      license,
      password,
      confirmPassword,
    } = companyData;

    if (!name) {
      toast.error("Company name is required");
      formIsValid = false;
      return;
    }
    if (!district) {
      toast.error("District is required");
      formIsValid = false;
      return;
    }

    if (pincode.length !== 6) {
      toast.error("Please enter 6 digit pincode");
      formIsValid = false;
      return;
    }
    if (year.length !== 4) {
      toast.error("Year should be 4 digit");
      formIsValid = false;
      return;
    }
    if (regNo.length !== 10) {
      toast.error("Please enter 10 digit registration number");
      formIsValid = false;
      return;
    }
    if (password.length < 8) {
      toast.error("Password needs minimum 8 characters");
      formIsValid = false;
      return;
    }
    if (!confirmPassword) {
      toast.error("Confirm password is required");
      formIsValid = false;
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords doesn't matches ");
      formIsValid = false;
      return;
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      toast.error("Email is not valid");
      formIsValid = false;
      return;
    }
    if (!logo) {
      toast.error("Logo is required");
      formIsValid = false;
      return;
    }
    if (!license) {
      toast.error("License is required");
      formIsValid = false;
      return;
    }

    if (formIsValid) {
      sendDataToServer(formData);
    }
  };
  return (
    <div>
      <CommonNavbar />
      <div className="CompanyRegistation-background ">
        <div className="CompanyRegistartion-inner-box ">
          <h4 className="CompanyRegistation-heading">Company Registration</h4>
          <div className="row my-5">
            <div className="col-5 CompanyRegistraion-left-box">
              <img
                className="CompanyRegistration-logo   img-fluid"
                src={img5}
                alt=""
              />
            </div>
            <div className="col-7 CompanyRegistraion-right-box">
              <div className="CompanyRegistration-form-box">
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">Name</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control CompanyRegistration-inp"
                        placeholder="Enter Company Name"
                        value={companyData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Company Type</label>
                      <select
                        name="companyType"
                        className="form-select select-box CompanyRegistration-inp"
                        required
                        value={companyData.companyType}
                        onChange={handleChange}
                      >
                        <option value="">Choose company type</option>
                        <option value="Tech">Tech</option>
                        <option value="Medical">Medical</option>
                        <option value="Education">Education</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">District</label>
                      <input
                        type="text"
                        name="district"
                        className="form-control CompanyRegistration-inp"
                        placeholder="Enter district"
                        value={companyData.district}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6">
                      <label for="text" className="form-label">
                        State
                      </label>
                      <input
                        type="text"
                        className="form-control CompanyRegistration-inp"
                        id="inputPassword4"
                        placeholder="Enter state"
                        name="state"
                        required
                        value={companyData.state}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">Pincode</label>
                      <input
                        type="number"
                        name="pincode"
                        className="form-control CompanyRegistration-inp"
                        placeholder="Enter Pincode"
                        required
                        value={companyData.pincode}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Email Id</label>
                      <input
                        type="email"
                        name="email"
                        className="form-control CompanyRegistration-inp"
                        placeholder="Enter Email Id"
                        required
                        value={companyData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">Contact Number</label>
                      <input
                        type="tel"
                        name="contact"
                        className="form-control CompanyRegistration-inp"
                        placeholder="Enter Contact Number"
                        required
                        value={companyData.contact}
                        onChange={handleChange}
                      />
                      {errors.contact && (
                        <div className="text-danger">{errors.contact}</div>
                      )}
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Registration number</label>
                      <input
                        type="text"
                        name="regNo"
                        className="form-control CompanyRegistration-inp"
                        placeholder="Enter Registration Number"
                        required
                        value={companyData.regNo}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="row g-3">
                    <div className="col-md-6">
                      <label for="file" className="form-label">
                        Comapany licences
                      </label>

                      <input
                        type="file"
                        name="license"
                        className="form-control CompanyRegistration-inp"
                        required
                        onChange={handleChange}
                      />

                      {/* <input type="email" className="form-control CompanyRegistration-inp" id="inputEmail4" placeholder='Upload File' /> */}
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Year Founded</label>
                      <input
                        type="number"
                        name="year"
                        className="form-control CompanyRegistration-inp"
                        placeholder="Enter Year"
                        required
                        value={companyData.year}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">Company Logo</label>
                      <input
                        type="file"
                        name="logo"
                        className="form-control CompanyRegistration-inp"
                        required
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Company Website</label>
                      <input
                        type="url"
                        name="website"
                        className="form-control CompanyRegistration-inp"
                        placeholder="Add website"
                        required
                        value={companyData.website}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea
                      name="description"
                      className="form-control"
                      rows="3"
                      placeholder="Add Description"
                      required
                      value={companyData.description}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">Password</label>
                      {/* <input
                        type="password"
                        name="password"
                        className="form-control CompanyRegistration-inp"
                        placeholder="Enter Password"
                        required
                        value={companyData.password}
                        onChange={handleChange}
                      /> */}
                      <InputGroup className="mb-3 companypasswordInput">
                        <Form.Control
                          placeholder="Enter Password"
                          type={showPassword ? "password" : "text"}
                          aria-label="password"
                          aria-describedby="basic-addon1"
                          name="password"
                          required
                          onChange={handleChange}
                          value={companyData.password}
                        />
                        <InputGroup.Text id="basic-addonCompany">
                          {showPassword ? (
                            <FaEyeSlash onClick={toggleButton} />
                          ) : (
                            <FaEye onClick={toggleButton} />
                          )}
                        </InputGroup.Text>
                      </InputGroup>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Confirm Password</label>
                      {/* <input
                        type="password"
                        className="form-control CompanyRegistration-inp"
                        placeholder="Re-enter Password"
                        required
                        name="confirmPassword"
                        value={companyData.confirmPassword}
                        onChange={handleChange}
                      /> */}
                            <InputGroup className="mb-3 companypasswordInput">
                        <Form.Control
                          placeholder="Re Enter Password"
                          type={showPassword1 ? "password" : "text"}
                          aria-label="password"
                          aria-describedby="basic-addon1"
                          name="confirmPassword"
                          onChange={handleChange}
                          value={companyData.confirmPassword}
                        />
                        <InputGroup.Text id="basic-addonCompany">
                          {showPassword1 ? (
                            <FaEyeSlash onClick={toggleButton1} />
                          ) : (
                            <FaEye onClick={toggleButton1} />
                          )}
                        </InputGroup.Text>
                      </InputGroup>
                    </div>
                  </div>
                  <button className="my-5 CompanyRegistration-button">
                    Register
                  </button>
                  <p className="CompanyRegistration-footer">
                    {" "}
                    Already have an account? &nbsp;{" "}
                    <span
                      className="fs-6 fw-bold text-primary"
                      style={{ cursor: "pointer" }}
                      onClick={redirectToLogin}
                    >
                      Login Now!
                    </span>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer2 />
      </div>
    </div>
  );
}

export default CompanyRegistration;
