import React from "react";
import "./adminNavbar.css";
import logo from "../../assets/images/Frame 339.png";
import logo2 from "../../assets/images/adminlogo.png";
import { useNavigate } from "react-router-dom";
function AdminNavbar() {
  const navigate = useNavigate();
  const redirectToAdminLogin = () => {
    navigate("/admin  ");
  };
  return (
    <div className="adminNavbar">
      <nav className="navbar">
        <div className="container-fluid navlogo">
          <img src={logo} alt="" />
          <form className="d-flex adminlogo">
            <img src={logo2} alt="" />
            <button class="btn" type="submit" onClick={redirectToAdminLogin}>
              Admin
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default AdminNavbar;
