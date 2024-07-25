import React, { useEffect, useState } from "react";
import "./adminViewCoComplaint.css";
import { IoReturnUpBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../apis/axiosInstance";
import AdminNavbar from "../../common/adminNavbar";

function AdminViewCoComplaint() {
  const navigate = useNavigate();
  const reDirectToComplaint = (id) => {
    navigate(`/adminViewCoComplaintDetail/${id}`);
  };
  const [complaint, setComplaint] = useState([
    { userId: { firstName: "" }, companyId: { name: "" } },
  ]);
  useEffect(() => {
    axiosInstance.get("/getAllComplaints").then((response) => {
      console.log(response);
      if (response.status === 200) {
        setComplaint(response.data.data);
      }
    });
  }, []);
  return (
    <div>
      <AdminNavbar/>
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
              Company Complaints
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
                      <td>Company</td>
                      <td>:</td>
                      <td className="adminViewCoComplaint-data">
                        {e.companyId.name}
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

export default AdminViewCoComplaint;
