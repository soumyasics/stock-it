import React from "react";
import "./companyNavbar.css";
import img1 from "../../../assets/images/Frame 339.png";
import {  Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const CompanyNavbar = () => {
  const navigate = useNavigate();
  const handleCompanyLogout = () => {
    console.log("working")
    navigate('/companyLogin')
  }
  const redirectCompanyAbout = () => {
    navigate('/companyAbout')
  }
  return (
    <div>
      <div>
        <nav class="navbar commonNavbar">
          <div className="container">
            <a class="navbar-brand commonNavbar-image" href="#">
              <img src={img1} className="img-fluid" />
            </a>
            <div
              className="commonNavbar-right  align-items-center d-flex"
              style={{ width: "300px" }}
            >
              <h6>Home</h6>
              <h6 className="text-light fw-bold" onClick={redirectCompanyAbout}>About</h6>
              <h6 className="text-danger fw-bold" onClick={handleCompanyLogout}>Logout</h6>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
