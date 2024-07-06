import React, { useState } from "react";
import "./etsidebar.css";
import profile from "../../../assets/images/idprofile.png";
import titleImg from "../../../assets/images/Group 398.png";
import img1 from "../../../assets/images/article.svg";
import img2 from "../../../assets/images/subcribericon.svg";
import img3 from "../../../assets/images/logout.png";
import { useNavigate } from "react-router-dom";

function Etsidebar() {
    const navigate=useNavigate()
  const [show, setShow] = useState(false);
  return (
    <div>
        
      <div className="etsidebar-main pt-5">
        <div className="etsidebar-profilebox ">
          <div className="etsidebar-profile">
            <img src={profile} alt="Profile" />
          </div>
          <div className="etsidebar-detail mt-3">
            <h6>Laziqm</h6>
            <p>officilakfc@gmail.com</p>
          </div>
        </div>
        <div className="etsidebar-title">
          <img src={titleImg} alt="" />
        </div>
        <div className="etsidebar-content mt-5">
          <div className="etsidebar-items etsidebar-content-Article">
            <tr>
              <td>
                <img src={img1} alt="" />
              </td>
              <td>
                <div className="content-drop">
                  <button type="button" onClick={() => setShow(!show)}>
                    Articles
                  </button>
                  {show && (
                    <div className="etsidebar-drop">
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
          <div className=" etsidebar-items etsidebar-content-subscriber">
            <tr>
              <td>
                <img src={img2} alt="icon" />
              </td>
              <td>
                <h6>Subscribers</h6>
              </td>
            </tr>
          </div>
          <div className="etsidebar-items etsidebar-content-logout">
            <tr
              onClick={() => {
                navigate("/etLogin");
              }}
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
