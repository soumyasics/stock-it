import React, { useEffect, useState } from "react";
import { IoReturnUpBack } from "react-icons/io5";
import axiosInstance from "../../../apis/axiosInstance";
import { useNavigate } from "react-router-dom";
import Etnavbar from "../et-navbar/etnavbar";

export const ViewETSubs = () => {
  const navigate = useNavigate();
  const [etId, setEtId] = useState("");
  const [mySubs, setMySubs] = useState([]);

  useEffect(() => {
    const tutorId =
      JSON.parse(localStorage.getItem("stock_it_tutorId")) || null;
    if (tutorId) {
      setEtId(tutorId);
      console.log("tutorId", tutorId);
      getSubs(tutorId);
    }
  }, []);

  const getSubs = async (id) => {
    try {
      const response = await axiosInstance.get(
        "/getAllSubscriptionByETId/" + id
      );
      console.log(response);
      if (response.status == 200) {
        setMySubs(response.data.data);
      }
    } catch (error) {
      console.log("Fail on get subs data", error);
    }
  };
  return (
    <div>
      <Etnavbar />
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
          <h4>My Subscriptions</h4>
          <div></div>
        </div>

        <div className="comapnyRequest-first-box">
          <div className="companyRequesest-second-box" role="group"></div>
        </div>

        <div className="viewCompany-table ">
          <table border="1px">
            <tr className="viewCompancy-head-row">
              <th>Sl No</th>
              <th>User Name</th>
              <th>Email </th>
              <th>Gender</th>
              <th>DOB</th>
              <th>Address</th>
              <th>Active Status</th>
            </tr>
            {mySubs.map((co, i) => {
              console.log("cooo", co);
              return (
                <tr key={co?._id}>
                  <td>{i + 1}</td>
                  <td>
                    {co?.userId.firstName}
                    {co?.userId.lastName}
                  </td>
                  <td> {co?.userId?.email}</td>
                  <td>{co?.userId?.gender}</td>
                  <td>{co?.userId?.dob}</td>
                  <td>{co?.userId?.address}</td>

                  <td>{co?.userId?.isActive ? "Active" : "In Active"}</td>

                  <td>
                    {co?.review?.length > 20
                      ? co?.review?.substring(0, 20) + "..."
                      : co?.review}
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
};
