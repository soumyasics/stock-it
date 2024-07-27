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
import { TutorRating } from "../userRatingTutor/userRatingTutor";
import { ReviewModal } from "./reviewModel";
import { useNavigate } from "react-router-dom";

function UserViewEtDetail() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [userId, setUserId] = useState("");
  const { id } = useParams();
  const [etData, setEtData] = useState({});
  const [showReview, setShowReview] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const navigate = useNavigate();
  const handleClose = () => {
    setShowReview(false);
  };
  const handleOpen = () => {
    setShowReview(true);
  };
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
      getTutorById();
    } else {
      toast.error("Please Login");
      navigate("/userLogin");
    }
  }, []);
  const getTutorById = async () => {
    try {
      const response = await axiosInstance.post(`getTutorById/${id}`);
      if (response.status == 200) {
        setEtData(response.data.data);
   
      }
    } catch (error) {
      console.log("Fail on receiving data", error);
    }
  };
  useEffect(() => {
    getSubscriptionStatus();
  }, [id, userId])

  const getSubscriptionStatus = async () => {
    if (!userId || !id) {
      return
    }
    try {
      const response = await axiosInstance.post(`getSubscriptionStatus`, {
        userId,
        ETId: id,
      });

      if (response.status == 200) {
        setIsSubscribed(response.data.suscriptionStatus);
      }
    } catch (error) {
      console.log("Fail on receiving subscription status", error);
    }
  };

  const handleSubscribe = async () => {
    if (id && userId) {
      try {
        const res = await axiosInstance.post("/newSubscription", {
          userId,
          ETId: id,
        });
        if (res.status === 201) {
          toast.success(res.data.message);
          getSubscriptionStatus();
        }
      } catch (error) {
        console.log("err", error);
        const status = error?.response?.status;
        if (
          status === 400 ||
          status === 404 ||
          status === 409 ||
          status === 500
        ) {
          toast.error(error?.response?.data?.message);
        } else {
          toast.error("Something went wrong");
        }
      }
    } else {
      toast.error("Something went wrong..");
    }
  };
  const handleUnSubscribe = async () => {
    if (id && userId) {
      try {
        const res = await axiosInstance.post("unSubscribe", {
          userId,
          ETId: id,
        });
        if (res.status === 200) {
          toast.success(res.data.message);
          getSubscriptionStatus();
        }
      } catch (error) {
        console.log("err", error);
        const status = error?.response?.status;
        if (
          status === 400 ||
          status === 404 ||
          status === 409 ||
          status === 500
        ) {
          toast.error(error?.response?.data?.message);
        } else {
          toast.error("Something went wrong");
        }
      }
    } else {
      toast.error("Something went wrong..");
    }
  };

  return (
    <div>
      <UserNavbar />
      <UserComplaintModal
        closeModal={closeModal}
        openModal={openModal}
        modalIsOpen={modalIsOpen}
        etId={id}
        userId={userId}
      />
      <ReviewModal show={showReview} handleClose={handleClose} id={id} />
      <div>
        <div className="userViewTutorDetail-bg py-5">
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
                    <tr>
                      <td>Rating</td>
                      <td>-</td>
                      <td>{etData?.rating?.toFixed(2) || 0} </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="userViewEtDetail-btn ">
                {isSubscribed ? (
                  <Button variant="danger" onClick={handleUnSubscribe}>
                    Un Subcribe
                  </Button>
                ) : (
                  <Button variant="success" onClick={handleSubscribe}>
                    Subcribe
                  </Button>
                )}
                <Button className="ms-3" variant="primary" onClick={handleOpen}>
                  View Reviews
                </Button>
                <Button
                  className="ms-3"
                  variant="danger"
                  onClick={addComplaintFn}
                >
                  Add Complaint
                </Button>{" "}
              </div>
            </Col>
          </Row>
          <TutorRating etId={id} getTutorById={getTutorById} />
        </div>
      </div>
    </div>
  );
}

export default UserViewEtDetail;
