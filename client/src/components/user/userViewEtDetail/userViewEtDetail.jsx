import React, { useEffect, useState } from "react";
import tutorImg from "../../../assets/images/tutor-2.png";
import { Row, Col, ButtonGroup } from "react-bootstrap";
import { BASE_URL } from "../../../apis/baseUrl";
import Button from "react-bootstrap/Button";
import "./userViewEtDetail.css";
import axiosInstance from "../../../apis/axiosInstance";
import { useParams } from "react-router-dom";
import UserComplaintModal from "../userComplaintTutor/userComplaintTutor";
import toast from "react-hot-toast";
import { UserNavbar } from "../userNavbar/userNavbar";

function UserViewEtDetail() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [userId, setUserId] = useState({});
  const { id } = useParams();
  const [etData, setEtData] = useState({});
  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };
  const addComplaintFn = () => {
    openModal();
  };


  useEffect(() => {
    const userId = localStorage.getItem("stock_it_userId") || null;
    if (userId) {
      setUserId(userId);
    } else {
      toast.error("Please Login");
    }
    getTutorById();
  }, []);
  const getTutorById = async () => {
    try {
      const response = await axiosInstance.post(`getTutorById/${id}`);
      if (response.status == 200) {
        setEtData(response.data.data);
      }
    } catch (error) {
      console.log("Fail on receiving data");
    }
  };

  return (
    <div>
      <UserNavbar/>
      <div>
        <div className="adminViewUserDetail-bg py-5">
          <Row>
            <Col>
              <img src={tutorImg} alt="" />
            </Col>
            <Col>
              <div className="adminViewUserDetail-header">
                <img
                  src={`${BASE_URL}${etData?.photo?.filename}`}
                  alt="profile"
                />
                <div className="adminViewUserDetail-companyname">
                  <h2 style={{ textTransform: "capitalize" }}>
                    {etData.fullName}
                  </h2>
                </div>
              </div>
              <div className="adminViewUserDetail-content">
                <table>
                  <tbody>
                    <tr>
                      <td>Full Name</td>
                      <td>-</td>
                      <td style={{ textTransform: "capitalize" }}>
                        {etData?.fullName}
                      </td>
                    </tr>

                    <tr>
                      <td>Gender</td>
                      <td>-</td>
                      <td>{etData?.gender} </td>
                    </tr>

                    <tr>
                      <td>Qualifiaction</td>
                      <td>-</td>
                      <td style={{ textTransform: "capitalize" }}>
                        {etData?.qualification}{" "}
                      </td>
                    </tr>
                    <tr>
                      <td>Specification</td>
                      <td>-</td>
                      <td style={{ textTransform: "capitalize" }}>
                        {etData?.specification}{" "}
                      </td>
                    </tr>
                    <tr>
                      <td>Experience</td>
                      <td>-</td>
                      <td style={{ textTransform: "capitalize" }}>
                        {etData?.experience}{" "}
                      </td>
                    </tr>
                    <tr>
                      <td>Contact Number</td>
                      <td>-</td>
                      <td>{etData?.contactNumber} </td>
                    </tr>
                    <tr>
                      <td>Email ID</td>
                      <td>-</td>
                      <td>{etData?.email} </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="userViewEtDetail-btn">
                <Button variant="warning">Subcribe</Button>{" "}
                <Button variant="danger" onClick={addComplaintFn}>
                  Add Complaint
                </Button>{" "}
                <UserComplaintModal
                  closeModal={closeModal}
                  openModal={openModal}
                  modalIsOpen={modalIsOpen}
                  etId={id}
                  userId={userId}
                  
                />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default UserViewEtDetail;
