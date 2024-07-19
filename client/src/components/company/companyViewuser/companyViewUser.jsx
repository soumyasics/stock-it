import React, { useEffect, useState } from "react";
import { IoReturnUpBack } from "react-icons/io5";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../apis/axiosInstance";
import CompanyComplaintModal from "../companyComplaintModal/companyComplaintModal";

function CompanyViewUser() {
  const navigateToViewUserDetail = (id) => {
    navigate(`/companyViewUserDetails/${id}`);
  };
  const navigate = useNavigate();
  const [allUsers, setAllUsers] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [userId, setUserId] = useState({});
  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };
  useEffect(() => {
    getAllUsers();
  }, []);
  const getAllUsers = async () => {
    try {
      const response = await axiosInstance.post("/getAllUsers");
      if (response.status === 200) {
        setAllUsers(response.data.data);
      }
    } catch (error) {
      console.log("error on receiving data");
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
          <h4>All Users</h4>
          <div></div>
        </div>

        <div className="comapnyRequest-first-box">
          <div className="companyRequesest-second-box" role="group"></div>
        </div>

        <div className="viewCompany-table ">
          <table border="1px">
            <tr className="viewCompancy-head-row">
              <th> No</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Contact </th>
              <th>Email</th>
              <th>Status</th>
              <th>Complaints</th>
              <th>View More</th>
            </tr>
            {allUsers.map((u, i) => {
              return (
                <tr key={u._id}>
                  <td>{i + 1}</td>
                  <td>{u?.firstName}</td>
                  <td>{u?.gender}</td>
                  <td> {u?.contactNumber}</td>
                  <td>{u.email}</td>
                  <td>
                    {u.isActive ? (
                      <p className="text-success">Active</p>
                    ) : (
                      <p className="text-danger"> In active </p>
                    )}
                  </td>
                  <td>
                    <CompanyComplaintModal
                      openModal={openModal}
                      closeModal={closeModal}
                      modalIsOpen={modalIsOpen}
                    />
                    <Button variant="danger">Add complaint</Button>
                  </td>
                  <td className="viewComapny-viewmore">
                    <Button
                      onClick={() => {
                        navigateToViewUserDetail(u._id);
                      }}
                    >
                      View more
                    </Button>
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

export default CompanyViewUser;
