import React, { useState, useEffect } from "react";
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
import axiosInstance from "../../../apis/axiosInstance";
import { BASE_URL } from "../../../apis/baseUrl";
import { FaUsers } from "react-icons/fa";

export const CompanySidebar = ({ changePage }) => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [companyData, setcompanyData] = useState(null);
  const [ipoFiled, setIpoFiled] = useState(false);
  const navigate = useNavigate();
  const [ipoStatus, setIpoStatus] = useState(null);
  const [logo, setLogo] = useState(profilePic);

  const redirectCompanyHome = () => {
    navigate("/companyHome");
  };

  useEffect(() => {
    if (companyData?.logo?.filename) {
      const url = `${BASE_URL}${companyData?.logo?.filename}`;
      console.log("url", url);
      setLogo(url);
    }
  }, [companyData]);

  useEffect(() => {
    let companyId = localStorage.getItem("stock_it_companyId") || null;

    if (!companyId) {
      toast.error("Please login again.");
      navigate("/companyLogin");
      return;
    }
    companyId = companyId.replace(/['"]+/g, "");
    getCompanyData(companyId);
    getIpoData(companyId);
  }, []);

  const getCompanyData = async (companyId) => {
    try {
      const response = await axiosInstance.post(
        `/viewCompanyById/${companyId}`
      );
      const data = response?.data?.data || null;
      if (data) {
        setcompanyData(data);
      } else {
        console.log("resposne", response);
      }
    } catch (error) {
      console.log("Error getting compnaies ipo data", error);
    }
  };

  const getIpoData = async (companyId) => {
    try {
      const response = await axiosInstance.get(
        `/getIpoByCompanyId/${companyId}`
      );
      const data = response?.data?.data || null;
      if (data) {
        setIpoStatus(data);
      }
    } catch (error) {
      console.log("=> ipo data", error);
    }
  };

  const redirectToBuyOrders = () => {
    navigate("/companyViewBuyOrders");
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
            <img
              style={{ width: "45px", height: "45px", borderRadius: "50%" }}
              src={logo}
              alt="Profile"
            />
          </div>
          <div className="companyprofile-detail">
            <span>{companyData?.name?.substring(0, 20)}</span>
            {/* <span>{companyData?.email?.substring(0, 20)}</span> */}
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
              // changePage("users")
              navigate("/companyViewUser");
            }}
            style={{ cursor: "pointer" }}
          >
            <tr>
              <td className="fs-5 p-1">
                <FaUsers />
              </td>
              <td className="px-3">Users</td>
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

          {ipoStatus && (
            <>
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
                <tr
                  onClick={() => {
                    navigate("/companyDividend");
                  }}
                >
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
                        Received Orders
                      </button>
                      {show && (
                        <div className="sidebar-drop">
                          <ul>
                            <li
                              onClick={() => {
                                navigate("/companyViewBuyOrders");
                              }}
                            >
                              Orders
                            </li>
                            {/* <li onClick={() => {
                            // navigate('/companyViewBuyOrders')
                          }}>Sell Order</li> */}
                          </ul>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              </div>
            </>
          )}
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
                        <li
                          onClick={() => {
                            changePage("add-Articles");
                          }}
                        >
                          Add Articles
                        </li>
                        <li
                          onClick={() => {
                            changePage("view-Articles");
                          }}
                        >
                          View Articles
                        </li>
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
                <h6
                  onClick={() => {
                    changePage("companyAddComplaint");
                  }}
                >
                  Complaints
                </h6>
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
