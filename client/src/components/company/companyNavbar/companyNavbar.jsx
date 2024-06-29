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
              <Link>Home</Link>
              <Link>About</Link>
              <h6 className="text-danger fw-bold" onClick={handleCompanyLogout}>Logout</h6>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
