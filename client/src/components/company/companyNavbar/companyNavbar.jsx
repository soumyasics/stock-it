import React from "react";
import "./companyNavbar.css";
import img1 from "../../../assets/images/Frame 339.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const CompanyNavbar = () => {
  const navigate = useNavigate();
  const handleCompanyLogout = () => {
    console.log("working");
    navigate("/companyLogin");
  };
  const redirectCompanyAbout = () => {
    navigate("/companyAbout");
  };

  const companyDashboard = () => {
    navigate("/company-dashboard");
  };
  return (
    <div>
      <div>
        <nav className="navbar d-flex commonNavbar ps-5">
          <div className="container ">
            <a className="navbar-brand commonNavbar-image">
              <img src={img1} className="img-fluid" />
            </a>
            <p
              style={{ color: "white", cursor: "pointer" }}
              onClick={companyDashboard}

            >
              Dashboard
            </p>
          </div>
        </nav>
      </div>
    </div>
  );
};
