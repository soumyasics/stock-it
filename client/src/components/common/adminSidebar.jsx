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
import { toast } from "react-hot-toast";
import { IoMdStar } from "react-icons/io";
import { FaRegNewspaper } from "react-icons/fa6";
import { TiNews } from "react-icons/ti";
function AdminSidebar({ changePage }) {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const isAdminLoggedin =
      localStorage.getItem("stock_it_admin_login") || null;

    if (isAdminLoggedin === null || isAdminLoggedin === "false") {
      console.log("workd");

      toast.error("Please login again.");
      navigate("/AdminLogin");
    }
  }, []);
  const adminLogout = () => {
    localStorage.setItem("stock_it_admin_login", false);
    navigate("/AdminLogin");
  };

  const navigateToAllCompanies = () => {
    navigate("/adminViewCompany");
  };
  const navigateToActiveCompanies = () => {
    navigate("/adminActiveCompany");
  };

  const navigateToAllUsers = () => {
    navigate("/adminViewUsers");
  };
  const navigateIPOPending = () => {
    navigate("/adminIPOPending");
  };
  const navigateAllIPO = () => {
    navigate("/adminAllIPOs");
  };

  const navigateToViewAllEts = () => {
    navigate("/adminViewAllETs");
  };
  const navigateToCoComplaint = () => {
    navigate("/adminViewCoComplaint");
  };
  const navigateToResetPassword = () => {
    navigate("/admin-resetPassword");
  };

  const openCompaniesTab = () => {
    setShow(!show);
    setShow1(false);
    setShow2(false);
    setShow3(false);
  };
  const openIpoTab = () => {
    setShow1(!show1);
    setShow(false);
    setShow2(false);
    setShow3(false);
  };

  const openEdTab = () => {
    setShow2(!show2);
    setShow1(false);
    setShow(false);
    setShow3(false);
  };
  const openTakeActionTab = () => {
    setShow3(!show3);
    setShow2(false);
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
                      Company pending requests
                    </li>
                    {/* <li onClick={navigateToActiveCompanies}>
                      View active companies
                    </li> */}
                    <li onClick={navigateToAllCompanies}>
                      View all companies
                    </li>
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
                    <li onClick={navigateIPOPending}>View pending request </li>
                    <li onClick={navigateAllIPO}>View all company IPOs</li>
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
                    <li
                      className="clickable-item"
                      onClick={() => {
                        changePage("et-pending-request");
                      }}
                    >
                      View all request
                    </li>
                    <li
                      className="clickable-item"
                      onClick={navigateToViewAllEts}
                    >
                      {" "}
                      View all educational tutors
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
              <h5
                onClick={() => {
                  navigate("/adminViewBroughtStock");
                }}
              >
                Stock Orders
              </h5>
            </div>
          </div>
          <div className="mb-3 mt-1 adminSidebar-stock d-flex align-items-center ms-5 ps-2">
            <div className="text-light clickable-item fs-6">
              <FaRegNewspaper />
            </div>
            <div className=" clickable-item stock-h1">
              <h5
                onClick={() => {
                  changePage("view-company-articles");
                }}
                className="m-0 "
              >
                Companies Articles
              </h5>
            </div>
          </div>
          <div className="mb-3 mt-1 adminSidebar-stock d-flex align-items-center ms-5 ps-2">
            <div className="text-light clickable-item fs-6">
              <TiNews />
            </div>
            <div className=" clickable-item stock-h1">
              <h5
                onClick={() => {
                  changePage("view-tutors-articles");
                }}
                className="m-0 "
              >
                Educational contents
              </h5>
            </div>
          </div>
          <div
            className="adminSidebar-rating "
            style={{ marginLeft: "18%", width: "50%" }}
          >
            <div className="fs-5 adminSidebar-rating-grid">
              <IoMdStar />
              <div
                className="clickable-item-rating"
                onClick={() => {
                  navigate("/adminViewEtRating");
                }}
              >
                View Rating
              </div>
            </div>
          </div>
          <div className="adminSidebar-takeaction">
            <div className="clickable-item sidebar-ipos-drop">
              <img src={img3} alt="" />
              <button type="button" onClick={openTakeActionTab}>
                Take Action
              </button>
              {show3 && (
                <div className="sidebar-drop-10">
                  <ul>
                    <li onClick={navigateToCoComplaint}>Company</li>
                    <li
                      onClick={() => {
                        navigate("/adminViewUserComplaint");
                      }}
                    >
                      User
                    </li>
                    <li
                      onClick={() => {
                        navigate("/adminViewEtComplaint");
                      }}
                    >
                      Tutor
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className="adminSidebar-resetpassword">
            <div className="clickable-item adminSidebar-resetpassword-grid">
              <img src={img4} alt="" />
            </div>
            <div className="clickable-item reset-h1">
              <h5 onClick={navigateToResetPassword}>Reset Password</h5>
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
