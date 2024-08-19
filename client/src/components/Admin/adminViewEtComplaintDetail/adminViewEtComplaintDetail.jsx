import React, { useEffect, useState } from "react";
import { IoReturnUpBack } from "react-icons/io5";
import { BASE_URL } from "../../../apis/baseUrl";
import { Button } from "react-bootstrap";
import axiosInstance from "../../../apis/axiosInstance";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

function AdminViewEtComplaintDetail() {
    const navigate=useNavigate()
  const [complaint, setComplaint] = useState({});
  const { id } = useParams();
  useEffect(() => {
    getComplaintById();
  }, []);
  const getComplaintById = async () => {
    try {
      const responce = await axiosInstance.get(`/getComplaintByIdET/${id}`);
      if(responce.status===200){
        setComplaint(responce.data.data)
      }
    } catch (error) {
        console.log("Fail on receiving data")
    }
  };
  const toAccept = () => {
    axiosInstance
      .post(`/activateTutorById/${complaint?.etId?._id}`)
      .then((response) => {
        if (response.status == 200) {
          toast.success("Tutor activation sucessfull");
          navigate(-1);
        } else {
          toast.error(response.data.msg);
        }
      });
  };
  const toDelete = () => {
    axiosInstance
      .post(`/deactivateTutorById/${complaint?.etId?._id}`)
      .then((response) => {
        console.log("res", response);
        if (response.status == 200) {
          toast.success("Tutor deactivation sucessfull");
          navigate(-1);
        } else {
          toast.error(response.data.msg);
        }
      });
  };
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
          <h4>Tutor Complaints</h4>
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
              <h4>Tutor Details</h4>
            </div>
            <span
              style={{ fontWeight: "bold" }}
              className="adminViewCoComplaintDetail-profile fs-5"
            >
              <img
                src={`${BASE_URL}${complaint?.etId?.photo?.filename}`}
                alt=""
              />
              {complaint?.etId?.name}
            </span>
            <table className="mt-3">
              <tbody>
                <tr>
                  <td>Gender</td>
                  <td>:</td>
                  <td>{complaint?.etId?.gender} </td>
                </tr>
                <tr>
                  <td>Experience</td>
                  <td>:</td>
                  <td>{complaint?.etId?.experience} </td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>:</td>
                  <td>{complaint?.etId?.email} </td>
                </tr>
                <tr>
                  <td>Specification</td>
                  <td>:</td>
                  <td>{complaint?.etId?.specification}</td>
                </tr>
                <tr>
                  <td>Contact Number</td>
                  <td>:</td>
                  <td>{complaint?.etId?.contactNumber}</td>
                </tr>
                <tr>
                  <td>Qualification</td>
                  <td>:</td>
                  <td>{complaint?.etId?.qualification}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="adminViewComplaintBox">
          <h3 className="text-dark mb-3 fs-5" style={{ fontWeight: "bold" }}>
            Complaint
          </h3>
          {complaint.complaint}
        </div>
        <div className="banOrSuspendBtn">
          {complaint?.etId?.isActive ? (
            <Button variant="danger" size="lg" onClick={toDelete}>
              Deactivate Tutor
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

export default AdminViewEtComplaintDetail;
