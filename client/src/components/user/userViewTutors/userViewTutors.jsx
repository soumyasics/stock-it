import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { IoReturnUpBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../apis/axiosInstance";
import { UserNavbar } from "../userNavbar/userNavbar";

function UserViewTutors() {
  const navigate = useNavigate();
  const [approvedEt, setApprovedEt] = useState([]);
  
  useEffect(() => {
    getApprovedEt();
  }, []);
  const getApprovedEt = async () => {
    try {
      const responce = await axiosInstance.get("/getAllApprovedTutors");
      if (responce.status == 200) {
        setApprovedEt(responce.data.data);
      }
    } catch (error) {
      console.log("Fail on receiving data");
    }
  };
  return (
    <div>
      <UserNavbar/>
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
          <h4>All Educational Tutors</h4>
          <div></div>
        </div>

        <div className="comapnyRequest-first-box">
          <div className="companyRequesest-second-box" role="group"></div>
        </div>

        <div className="viewCompany-table ">
          <table border="1px">
            <tr className="viewCompancy-head-row">
              <th>Sl No</th>
              <th>Name</th>
              <th>Email Id</th>
              <th>Contact</th>
              <th>View More</th>
            </tr>
            {approvedEt.map((co, i) => {
              return (
                <tr key={co?._id}>
                  <td>{i + 1}</td>
                  <td>{co?.fullName}</td>
                  <td> {co?.email}</td>
                  <td>{co?.contactNumber}</td>
                  <td className="viewComapny-viewmore">
                    <Button
                      variant="success"
                      onClick={() => {
                        navigate(`/userViewEtDetail/${co?._id}`);
                      }}
                    >
                      View more
                    </Button>
                    
                  </td>
                  <TutorRating 
                 approvedEt={approvedEt}
                  />
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
}

export default UserViewTutors;
