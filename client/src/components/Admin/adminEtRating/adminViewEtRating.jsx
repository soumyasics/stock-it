import React, { useEffect, useState } from "react";
import { IoReturnUpBack } from "react-icons/io5";
import axiosInstance from "../../../apis/axiosInstance";
import { useNavigate } from "react-router-dom";

function AdminViewEtRating() {
  const navigate = useNavigate();
  const [rating, setRating] = useState([]);
  useEffect(() => {
    getEtRating();
  }, []);
  const getEtRating = async () => {
    try {
      const response = await axiosInstance.get("/getAllRating");
      console.log(response);
      if (response.status == 200) {
        let myData = response.data?.data || [];
        myData.reverse();
        setRating(myData);
      }
    } catch (error) {
      console.log("Fail on receiving data");
    }
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
          <h4>Tutor Rating</h4>
          <div></div>
        </div>

        <div className="comapnyRequest-first-box">
          <div className="companyRequesest-second-box" role="group"></div>
        </div>

        <div className="viewCompany-table ">
          <table border="1px">
            <tr className="viewCompancy-head-row">
              <th>Sl No</th>
              <th>User</th>
              <th>Email Id</th>
              <th>Tutor</th>
              <th>Email Id</th>
              <th>Rating</th>
              <th>Review</th>
            </tr>
            {rating.map((co, i) => {
              return (
                <tr key={co?._id}>
                  <td>{i + 1}</td>
                  <td>{co?.userId.firstName}</td>
                  <td> {co?.userId?.email}</td>
                  <td>{co?.etId?.fullName}</td>
                  <td>{co?.etId?.email}</td>
                  <td>{co?.rating}</td>
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
}

export default AdminViewEtRating;
