import React, { useState } from "react";
import "./adminSidebar.css";

import imgGif from "../../assets/images/headergif.gif";
import titleImg from "../../assets/images/Group 398.png";
import vector1 from "../../assets/images/Vector.png";
import vector2 from "../../assets/images/company-icon.png";
import vector3 from "../../assets/images/ipos.png";
import vector4 from "../../assets/images/education.png";
import img2 from "../../assets/images/stock.png";
import img3 from "../../assets/images/action.png";
import img4 from "../../assets/images/reset.png";
import img5 from "../../assets/images/logout.png";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AdminNavbar from "./adminNavbar";
function AdminSidebar({ changePage }) {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const navigate = useNavigate();
  const adminLogout = () => {
    localStorage.setItem("stock_it_admin_login", false);
    navigate("/AdminLogin");
  };

  const navigateToAllCompanies = () => {
    navigate("/adminViewCompany");
  };

  const navigateToAllUsers = () => {
    navigate("/adminViewUsers");
  };
  const navigateIPOPending = () => {
    navigate("/adminIPOPending");
  };

  const openCompaniesTab = () => {
    setShow(!show);
    setShow1(false);
    setShow2(false);
  };
  const openIpoTab = () => {
    setShow1(!show1);
    setShow(false);
    setShow2(false);
  };

  const openEdTab = () => {
    setShow2(!show2);
    setShow1(false);
    setShow(false);
  };
  return (
    <div className="adminSidebar-main2 w-100">
      <div
        style={{ cursor: "pointer" }}
        className="adminSidebar-title-head"
        onClick={() => {
          changePage("overview");
        }}
      >
        <img src={titleImg} alt="dashboard" />
      </div>
      <div>
        <div className="adminSidebar-user-grid">
          <div
            className="clickable-item adminSidebar-user"
            onClick={navigateToAllUsers}
          >
            <img src={vector1} alt="" />
            <h4>User</h4>
          </div>
          <div className="adminSidebar-companies">
            <div className="clickable-item sidebar-company-drop">
              <img src={vector2} alt="" />
              <button type="button" onClick={openCompaniesTab}>
                {" "}
                Companies
              </button>
              {show && (
                <div className="sidebar-drop-10">
                  <ul>
                    <li
                      onClick={() => {
                        changePage("company-pending-request");
                      }}
                    >
                      Company Pending Requests
                    </li>
                    <li onClick={navigateToAllCompanies}>View all Companies</li>
                    <li>View all Company Article</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className="adminSidebar-companyipos mt-3">
            <div className="clickable-item sidebar-ipos-drop">
              <img src={vector3} alt="" />
              <button type="button" onClick={openIpoTab}>
                {" "}
                Company IPOs{" "}
              </button>
              {show1 && (
                <div className="sidebar-drop-10">
                  <ul>
                    <li onClick={navigateIPOPending}>View all Request</li>
                    <li>View all Company IPOs</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className="adminSidebar-education">
            <div className="clickable-item sidebar-education-drop">
              <img src={vector4} alt="" />
              <button type="button" onClick={openEdTab}>
                Educational Tutors
              </button>
              {show2 && (
                <div className=" sidebar-drop-10">
                  <ul>
                    <li className="clickable-item">View all Request</li>
                    <li className="clickable-item">
                      {" "}
                      View all Educational Tutors
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className="adminSidebar-stock">
            <div className="clickable-item adminSidebar-stock-grid">
              <img src={img2} alt="" />
            </div>
            <div className=" clickable-item stock-h1">
              <h5>Stock</h5>
            </div>
          </div>
          <div className="adminSidebar-takeaction">
            <div className="clickable-item adminSidebar-takeaction-grid">
              <img src={img3} alt="" />
            </div>
            <div className="clickable-item takeaction-h1">
              <h5>Take Action</h5>
            </div>
          </div>
          <div className="adminSidebar-resetpassword">
            <div className="clickable-item adminSidebar-resetpassword-grid">
              <img src={img4} alt="" />
            </div>
            <div className="clickable-item reset-h1">
              <h5>Reset Password</h5>
            </div>
          </div>
          <div className="adminSidebar-logout">
            <div className="clickable-item adminSidebar-logout-grid">
              <img src={img5} alt="" />
            </div>
            <div
              className="logout-h1 text-danger"
              style={{ cursor: "pointer" }}
              onClick={adminLogout}
            >
              <h5 className="fw-bold">Logout</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminSidebar;
