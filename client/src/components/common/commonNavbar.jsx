import React from "react";
import "./commonNavbar.css";
import img1 from "../../assets/images/Frame 339.png";
import {  Link } from "react-router-dom";
import {Form} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
function CommonNavbar() {
  const navigate = useNavigate();
  const redirectToAdminLogin = () => {
    navigate("/AdminDashboard");
  };

  const redirectToCompanyLogin = () => {
    navigate("/companylogin");
  };

  const handleLoginPageNavigate = (e) => {
    if (!e.target.value) {
      return;
    }

    navigate(e.target.value);
  };
  const navigateOptions = [
    // { value: "/", label: "Login" },
    { value: "/companylogin", label: "Company" },
    { value: "/userLogin", label: "User" },

  ];

  return (
    <div>
      <nav class="navbar commonNavbar">
        <div className="container">
          <a class="navbar-brand commonNavbar-image" href="#">
            <img src={img1} className="img-fluid" />
          </a>
          <div className="commonNavbar-right  align-items-center d-flex" style={{width: "300px"}}>
            <Link to="/">Home</Link>
            <Link to="/landingAbout">About</Link>
            <Form.Select
              onChange={handleLoginPageNavigate}
              defaultValue=""
              style={{ cursor: "pointer" }}
            >
              <option value="" disabled hidden>
                Login
              </option>
              {navigateOptions.map((option) => {
                return (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                );
              })}
            </Form.Select>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default CommonNavbar;
