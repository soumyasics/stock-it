import React, { useState } from "react";
import "./adminNotification.css";
import { IoReturnUpBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "../../common/adminNavbar";
import { Button } from "react-bootstrap";

function AdminNotification() {
  const [notification, setNotification] = useState([
    { companyName: "Pen&Pencils" },
    { companyName: "Pen&Pencils" },
    { companyName: "Pen&Pencils" },
    { companyName: "Pen&Pencils" },
    { companyName: "Pen&Pencils" },
    
  ]);
  const navigate = useNavigate();
  return (
    <div>
      <AdminNavbar />
      <div className="viewCompany-body">
        <div className="viewcomapany-head-box d-flex align-items-center justify-content-between px-5">
          <div
            onClick={() => {
              navigate(-1);
            }}
            style={{ cursor: "pointer", color: "white", fontSize: "20px" }}
          >
            <IoReturnUpBack />
          </div>
          <h4 style={{ fontWeight: "bold" }}>Company IPO Edit Requests</h4>
          <div></div>
        </div>
        {notification.map((e) => {
          return (
            <div className="adminNotification-box">
              <div>
                <p>
                  {" "}
                  You have a company IPO edit request from{" "}
                  <span style={{ cursor: "pointer" ,fontWeight:"bold"}}>{e.companyName}</span>
                </p>
              </div>
              <div>
                <Button variant="transparent">Viewmore</Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AdminNotification;
