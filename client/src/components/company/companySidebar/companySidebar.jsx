import React, { useState } from "react";
import "./companySidebar.css";
import profilePic from "../../../assets/images/kfc.svg";
import titleImg from "../../../assets/images/Group 398.png";
import img1 from "../../../assets/images/ipos.png";
import img2 from "../../../assets/images/divident.svg";
import img3 from "../../../assets/images/orderIcon.svg";
import img4 from "../../../assets/images/article.svg";
import img5 from "../../../assets/images/action.png";
import img6 from "../../../assets/images/logout.png";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
export const CompanySidebar = ({ changePage }) => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const navigate = useNavigate();
  const redirectCompanyHome = () => {
    navigate("/companyHome");
  };
  return (
    <div>
      <div className="companysidebar-main pt-5">
        <p
          className="ms-5 mb-3"
          style={{ textAlign: "left", cursor: "pointer" }}
          onClick={redirectCompanyHome}
        >
          <IoMdArrowBack /> &nbsp; Back to home{" "}
        </p>
        <div className="companysidebar-profile ">
          <div className="companyprofile">
            <img src={profilePic} alt="Profile" />
          </div>
          <div className="companyprofile-detail">
            <h6>kfc</h6>
            <p>officilakfc@gmail.com</p>
          </div>
        </div>
        <div className="companysidebar-title">
          <img src={titleImg} alt="" />
        </div>
        <div className="companysidebar-content">
          <div
            onClick={() => {
              changePage("profile");
            }}
            className="companysidebar-items companysidebar-content-companyipos"
          >
            <tr className="">
              <td>
                <img src={img1} alt="icon" />
              </td>
              <td>
                <h6>Profile</h6>
              </td>
            </tr>
          </div>
          <div
            onClick={() => {
              changePage("ipo-form");
            }}
            className="companysidebar-items companysidebar-content-companyipos"
          >
            <tr className="">
              <td>
                <img src={img1} alt="icon" />
              </td>
              <td>
                <h6>Initiate IPO</h6>
              </td>
            </tr>
          </div>
          <div
            onClick={() => {
              changePage("ipo-status");
            }}
            className="companysidebar-items companysidebar-content-companyipos"
          >
            <tr className="">
              <td>
                <img src={img1} alt="icon" />
              </td>
              <td>
                <h6>IPO Status</h6>
              </td>
            </tr>
          </div>
          <div className="companysidebar-items companysidebar-content-dividend">
            <tr>
              <td>
                <img src={img2} alt="" />
              </td>
              <td>
                <h6>Dividend</h6>
              </td>
            </tr>
          </div>
          <div className="companysidebar-items companysidebar-content-receive">
            <tr>
              <td>
                <img src={img3} alt="" />
              </td>
              <td>
                <div className="company-content-drop">
                  <button type="button" onClick={() => setShow(!show)}>
                    {" "}
                    Receive Order
                  </button>
                  {show && (
                    <div className="sidebar-drop">
                      <ul>
                        <li>Buy order</li>
                        <li>Sell Order</li>
                      </ul>
                    </div>
                  )}
                </div>
              </td>
            </tr>
          </div>
          <div className="companysidebar-items companysidebar-content-Article">
            <tr>
              <td>
                <img src={img4} alt="" />
              </td>
              <td>
                <div className="company-content-drop">
                  <button type="button" onClick={() => setShow1(!show1)}>
                    {" "}
                    Articles
                  </button>
                  {show1 && (
                    <div className="sidebar-drop">
                      <ul>
                        <li>Add Articles</li>
                        <li>View Articles</li>
                      </ul>
                    </div>
                  )}
                </div>
              </td>
            </tr>
          </div>
          <div className=" companysidebar-items company-content-complaint">
            <tr>
              <td>
                <img src={img5} alt="icon" />
              </td>
              <td>
                <h6>Complaints</h6>
              </td>
            </tr>
          </div>
          <div className="companysidebar-items company-content-logout">
            <tr
              onClick={() => {
                navigate("/companyLogin");
              }}
            >
              <td>
                <img src={img6} alt="icon" />
              </td>
              <td>
                <h6 className="text-danger fw-bold">Logout</h6>
              </td>
            </tr>
          </div>
        </div>
      </div>
    </div>
  );
};
