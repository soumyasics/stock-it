import React, { useEffect, useState } from "react";
import { IoReturnUpBack } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../../../apis/baseUrl";
import { Button } from "react-bootstrap";
import axiosInstance from "../../../apis/axiosInstance";
import toast from "react-hot-toast";
import AdminNavbar from "../../common/adminNavbar";

function AdminViewUserComplaintDetails() {
  const navigate = useNavigate();
  const [complaint, setComplaint] = useState({});
  const { id } = useParams();
  useEffect(() => {
    getAllComplaints();
  }, []);
  const getAllComplaints = async () => {
    const response = await axiosInstance.get(`user-getComplaintById/${id}`);
    try {
      if (response.status === 200) {
        setComplaint(response.data.data);
      }
    } catch (error) {
      console.log("Fail on receving complaint");
    }
  };
  const toAccept = () => {
    axiosInstance
      .post(`/activateUserById/${complaint?.userId?._id}`)
      .then((response) => {
        if (response.status == 200) {
          toast.success("User activation sucessfull");
          navigate(-1);
        } else {
          toast.error(response.data.msg);
        }
      });
  };
  const toDelete = () => {
    axiosInstance
      .post(`/deActivateUserById/${complaint?.userId?._id}`)
      .then((response) => {
        console.log("res", response);
        if (response.status == 200) {
          toast.success("User deactivation sucessfully");
          navigate(-1);
        } else {
          toast.error(response.data.msg);
        }
      });
  };
  return (
    <div>
      <AdminNavbar/>
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
        <div className="d-flex container">
          <div className="adminViewCoComplaintDetail-table ms-5">
            <div className="adminViewCoComplaintDetail-head ms-5">
              <h4>User details</h4>
            </div>
            <span
              style={{ fontWeight: "bold" }}
              className="adminViewCoComplaintDetail-profile fs-5"
            >
              <img src={`${BASE_URL}${complaint?.userId?.photo}`} alt="" />
              {complaint?.userId?.firstName}
              {complaint?.userId?.lastName}
            </span>
            <table>
              <tbody>
                <tr>
                  <td>Gender</td>
                  <td>:</td>
                  <td>{complaint?.userId?.gender} </td>
                </tr>
                <tr>
                  <td>DOB</td>
                  <td>:</td>
                  <td> {complaint?.userId?.dob} </td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>:</td>
                  <td>{complaint?.userId?.email} </td>
                </tr>
                <tr>
                  <td>Address</td>
                  <td>:</td>
                  <td>{complaint?.userId?.address}</td>
                </tr>
                <tr>
                  <td>Contact Number</td>
                  <td>:</td>
                  <td>{complaint?.userId?.contactNumber}</td>
                </tr>
                <tr>
                  <td>City</td>
                  <td>:</td>
                  <td>{complaint?.userId?.city}</td>
                </tr>
                <tr>
                  <td>State</td>
                  <td>:</td>
                  <td>{complaint?.userId?.state}</td>
                </tr>
                <tr>
                  <td>Demat A/C Number</td>
                  <td>:</td>
                  <td>{complaint?.userId?.dematACNumber} </td>
                </tr>
                <tr>
                  <td>Bank Name</td>
                  <td>:</td>
                  <td>{complaint?.userId?.bankName}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="adminViewCoComplaintDetail-table ms-5">
            <div className="adminViewCoComplaintDetail-head ms-5">
              <h4>Company Details</h4>
            </div>
            <span
              style={{ fontWeight: "bold" }}
              className="adminViewCoComplaintDetail-profile fs-5"
            >
              <img
                src={`${BASE_URL}${complaint?.companyId?.logo?.filename}`}
                alt=""
              />
              {complaint?.companyId?.name}
            </span>
            <table>
              <tbody>
                <tr>
                  <td>RegNo</td>
                  <td>:</td>
                  <td>{complaint?.companyId?.regNo} </td>
                </tr>
                <tr>
                  <td>Year</td>
                  <td>:</td>
                  <td>Since {complaint?.companyId?.year} </td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>:</td>
                  <td>{complaint?.companyId?.email} </td>
                </tr>
                <tr>
                  <td>CompanyType</td>
                  <td>:</td>
                  <td>{complaint?.companyId?.companyType}</td>
                </tr>
                <tr>
                  <td>Contact Number</td>
                  <td>:</td>
                  <td>{complaint?.companyId?.contact}</td>
                </tr>
                <tr>
                  <td>City</td>
                  <td>:</td>
                  <td>{complaint?.companyId?.district}</td>
                </tr>
                <tr>
                  <td>State</td>
                  <td>:</td>
                  <td>{complaint?.companyId?.state}</td>
                </tr>
                <tr>
                  <td>Website</td>
                  <td>:</td>
                  <td>
                    {" "}
                    <a href={complaint?.companyId?.website}>
                      {complaint?.companyId?.website}
                    </a>{" "}
                  </td>
                </tr>
                <tr>
                  <td>Description</td>
                  <td>:</td>
                  <td>{complaint?.companyId?.description}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="adminViewComplaintBox">
          <h3 className="text-dark mb-3 fs-5" style={{fontWeight:"bold"}}>Complaint</h3>
        {complaint.complaint}
        </div>
        <div className="banOrSuspendBtn">
          {complaint?.userId?.isActive ? (
            <Button variant="danger" size="lg" onClick={toDelete}>
              Deactivate User
            </Button>
          ) : (
            <Button variant="success" size="lg" onClick={toAccept}>
            Activate
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminViewUserComplaintDetails;
