import React, { useEffect, useState } from "react";
import "./etsidebar.css";
import profile from "../../../assets/images/idprofile.png";
import titleImg from "../../../assets/images/Group 398.png";
import img1 from "../../../assets/images/article.svg";
import img2 from "../../../assets/images/subcribericon.svg";
import img3 from "../../../assets/images/logout.png";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../apis/axiosInstance";
import { BASE_URL } from "../../../apis/baseUrl";
import { CgProfile } from "react-icons/cg";
import { Row, Col } from "react-bootstrap";

function Etsidebar({ changePage }) {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [etData, setEtData] = useState({});
  useEffect(() => {
    const tutorId =
      JSON.parse(localStorage.getItem("stock_it_tutorId")) || null;
    if (tutorId) {
      console.log(tutorId);
      getEtData(tutorId);
    }
  }, []);
  const getEtData = async (id) => {
    try {
      const response = await axiosInstance.post(`getTutorById/${id}`);
      if (response.status === 200) {
        setEtData(response.data.data);
      }
    } catch (error) {
      console.log("Network Issue");
    }
  };
  return (
    <div>
      <div className="etsidebar-main pt-5">
        <div className="etsidebar-profilebox">
          <div className="etsidebar-profile">
            <img src={`${BASE_URL}${etData?.photo?.filename}`} alt="Profile" />
          </div>
          <div className="etsidebar-detail mt-3">
            <h6>{etData.fullName} </h6>
            <p>{etData.email}</p>
          </div>
        </div>
        <div className="etsidebar-title">
          <img src={titleImg} alt="" />
        </div>
        <div className="etsidebar-content mt-5">
          <span style={{cursor:"pointer"}} onClick={()=>{
            changePage("tutorProfile")
          }}>
            <tr>
              <td>
                <span className="fs-4 ">
                  <CgProfile />
                </span>
              </td>
              <td className="px-2">
                <h6>Profile</h6>
              </td>
            </tr>
          </span>
          <div className="etsidebar-items etsidebar-content-Article">
            <tr>
              <td style={{}}>
                <img src={img1} alt="" />
              </td>
              <td className="px-0">
                <div className="content-drop">
                  <button type="button" onClick={() => setShow(!show)}>
                    Articles
                  </button>
                  {show && (
                    <div className="etsidebar-drop">
                      <ul>
                        <li
                          onClick={() => {
                            changePage("addArticles");
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          Add Articles
                        </li>
                        <li
                          onClick={() => {
                            changePage("viewArticles");
                          }}
                          style={{ cursor: "pointer" }}
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
          <div className=" etsidebar-items etsidebar-content-subscriber">
            <tr>
              <td>
                <img src={img2} alt="icon" />
              </td>
              <td onClick={() => {
                navigate("/etSubs")
              }}>
                <h6>Subscribers</h6>
              </td>
            </tr>
          </div>
          <div className="etsidebar-items etsidebar-content-logout">
            <tr
              onClick={() => {
                navigate("/etLogin");
              }}
              style={{ cursor: "pointer" }}
            >
              <td>
                <img src={img3} alt="icon" />
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
}

export default Etsidebar;
