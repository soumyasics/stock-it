import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoReturnUpBack } from "react-icons/io5";
import axiosInstance from "../../../apis/axiosInstance";

function AdminViewEtComplaint() {
  const navigate = useNavigate();
  const [complaint, setComplaint] = useState([]);
  const reDirectToComplaint=(id)=>{
    navigate(`/adminViewEtComplaintDetail/${id}`)
  }
  useEffect(() => {
    getComplaint()
  }, []);
  const getComplaint = async () => {
    try {
      const responce = await axiosInstance.get("/getAllComplaintsET");
      console.log(responce);
      if (responce.status == 200) {
        let myData = responce.data?.data || [];
        myData.reverse();
        setComplaint(myData);
      }
    } catch (error) {
      console.log("fail on receiving data");
    }
  };
  return (
    <div>
      <div className="adminViewCoComplaint-body ">
        <div className="adminViewCoComplaint-heading">
          <div className="d-flex pt-3">
            <span
              onClick={() => {
                navigate(-1);
              }}
              className="text-start ms-3"
            >
              <IoReturnUpBack />
            </span>
            <h5 className="text-center" style={{ marginLeft: "40%" }}>
              Tutor Complaints
            </h5>
          </div>
        </div>
        <div className="d-flex flex-wrap gap-5 px-5 py-3">
          {complaint.map((e) => {
            return (
              <div className="adminViewCoComplaint-content p-2">
                <div className="adminViewCoComplaint-details2">
                  <div className="adminViewCoComplaint-innerbox1"></div>
                  <table className="adminViewCoComplaint-table">
                    <tr>
                      <td>User Name</td>
                      <td>:</td>
                      <td className="adminViewCoComplaint-data">
                        {e?.userId?.firstName}
                      </td>
                    </tr>
                    <tr>
                      <td>Tutor</td>
                      <td>:</td>
                      <td className="adminViewCoComplaint-data">
                        {e?.etId?.fullName}
                      </td>
                    </tr>
                  </table>
                  <p
                    className="companyRewquest-viewmore2 mt-3"
                    onClick={() => {
                      reDirectToComplaint(e._id);
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    View Complaint
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AdminViewEtComplaint;
