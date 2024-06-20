import React, { useState } from "react";
import img5 from "../../assets/images/image 8.png";
import axiosMultipartInstance from "../../apis/axiosMultipartInstance";
import "./CompanyRegistration.css";

function CompanyRegistration() {
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
  //   district: "city",
  //   email: "abc@gmail.com",
  //   description: "description",
  //   regNo: "1234123412",
  //   logo: null,
  //   license: null,
  // });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "logo" || name === "license") {
      setCompanyData({ ...companyData, [name]: files[0] });
    } else {
      setCompanyData({ ...companyData, [name]: value });
    }

    console.log(companyData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    sendDataToServer(formData);
  };

  const sendDataToServer = async (formData) => {
    formData.append("name", companyData.name);
    formData.append("pincode", companyData.pincode);
    formData.append("companyType", companyData.companyType);
    formData.append("year", companyData.year);
    formData.append("password", companyData.password);
    formData.append("website", companyData.website);
    formData.append("state", companyData.state);
    formData.append("contact", companyData.contact);
    formData.append("district", companyData.district);
    formData.append("email", companyData.email);
    formData.append("description", companyData.description);
    formData.append("regNo", companyData.regNo);
    formData.append("city", companyData.city);

    formData.append("files", companyData.logo);
    formData.append("files", companyData.license);
    try {
      const response = await axiosMultipartInstance.post(
        "/registerCompany",
        formData
      );
      console.log(response.data);
      if (response.data.status === 200) {
        alert("Company registered successfully");
      } else {
        alert(response.data.msg);
      }


    } catch (error) {
      console.error("There was an error registering the company!", error);
    }
  };
  return (
    <div className="CompanyRegistation-background">
      <div className="CompanyRegistartion-inner-box">
        <h2 className="CompanyRegistation-heading">Company Registration</h2>
        <div className="row my-5">
          <div className="col-5 CompanyRegistraion-left-box">
            <img
              className="CompanyRegistration-logo my-5 img-fluid"
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
                      required
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
                      <option value="">Open this select menu</option>
                      <option value="Type1">Type 1</option>
                      <option value="Type2">Type 2</option>
                      <option value="Type3">Type 3</option>
                    </select>
                  </div>
                </div>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">City</label>
                    <input
                      type="text"
                      name="district"
                      className="form-control CompanyRegistration-inp"
                      placeholder="Enter City"
                      required
                      value={companyData.district}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">State</label>
                    <input
                      type="text"
                      name="state"
                      className="form-control CompanyRegistration-inp"
                      placeholder="Enter State"
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
                    <label className="form-label">Company License</label>
                    <input
                      type="file"
                      name="license"
                      className="form-control CompanyRegistration-inp"
                      required
                      onChange={handleChange}
                    />
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
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Enter Password"
                      required
                      value={companyData.password}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Confirm Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Re-enter Password"
                      required
                      name="confirmPassword"
                      value={companyData.confirmPassword}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="my-5 CompanyRegistration-button"
                >
                  Register
                </button>
                <p className="CompanyRegistration-footer">
                  Already have an account? Login Now!
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyRegistration;
