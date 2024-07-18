import React, { useEffect, useState } from "react";
import { IoReturnUpBack } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./adminViewCoComplaintDetail.css";
import axiosInstance from "../../../apis/axiosInstance";

function AdminViewCoComplaintDetail() {
  const navigate = useNavigate();
  const [complaint, setComplaint] = useState({companyId:{name:''},userId:{firstName:''}});
  const { id } = useParams();
  useEffect(() => {
    axiosInstance
      .get(`/getComplaintById/${id}`)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          setComplaint(response.data.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(complaint);
  return (
   <div>
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
          <h4>Company Complaints</h4>
          <div></div>
        </div>
        <div className="comapnyRequest-first-box">
          <div className="companyRequesest-second-box" role="group"></div>
        </div>
        <div className="adminViewCoComplaintDetail w-50 ms-5">
          <table>
            <tbody style={{ width: "50%" }}>
              <tr>
                <td>Username</td>
                <td>:</td>
                <td style={{ fontWeight: "bold" }}>{complaint?.userId?.firstName}</td>
              </tr>
              <tr>
                <td>Company</td>
                <td>:</td>
                <td>{complaint?.companyId?.name} </td>
              </tr>
              <tr>
                <td>Complaint</td>
                <td>:</td>
                <td>
                 {complaint.complaint}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="banOrSuspendBtn">
          <Button variant="warning" size="sm">
            Suspend
          </Button>{" "}
          <Button variant="danger" size="sm">
            Ban
          </Button>{" "}
        </div>
      </div>
   </div>
  );
}

export default AdminViewCoComplaintDetail;
