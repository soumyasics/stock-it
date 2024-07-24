import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { MdArrowBack } from "react-icons/md";
import Button from "react-bootstrap/Button";
import axiosInstance from "../../../apis/axiosInstance";
import toast from "react-hot-toast";

Modal.setAppElement("#root");

const EtEditModal = ({ openModal, closeModal, modalIsOpen, getEtData2 }) => {
  const [tutorId, SetTutorId] = useState("");
  const [etData, SetEtData] = useState({
    fullName: "",
    qualification: "",
    specification: "",
    experience: "",
    contactNumber: "",
    email: "",
    password: "",
  });
  useEffect(() => {
    const tutorId =
      JSON.parse(localStorage.getItem("stock_it_tutorId")) || null;
    if (tutorId) {
      SetTutorId(tutorId);
      console.log("tutorid", tutorId);
      getUserData(tutorId);
    }
  }, []);
  const getUserData = async (id) => {
    try {
      const response = await axiosInstance.post(`/getTutorById/${id}`);
      if (response.status == 200) {
        SetEtData(response.data.data);
        console.log(response.data.data);
      }
    } catch (error) {
      console.log("Fail on getting userdata");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const {
      fullName,
      qualification,
      specification,
      experience,
      email,
      password,
      contactNumber,
    } = etData;
    const isFieldValidate = () => {
      if (!fullName) {
        toast.error("Enter your fullName");
        return false;
      }
      if (!specification) {
        toast.error("Enter your specification");
        return false;
      }
      if (!qualification) {
        toast.error("Enter your qualification");
        return false;
      }
      if (!experience) {
        toast.error("Enter your experience");
        return false;
      }
      if (experience.length > 2) {
        toast.error("Please enter your correct experience")
        return false;
      }
      if (!contactNumber) {
        toast.error("Enter your contact number");
        return false;
      }
      if (contactNumber.length !== 10) {
        toast.error("Enter validate contact number");
        return false;
      }
      if (!email) {
        toast.error("Enter your email");
        return false;
      }
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(email)) {
        toast.error("Please enter a valid email address");
        return false;
      }
      if (!password) {
        toast.error("Enter your password");
        return false;
      }
      if (password.length < 8) {
        toast.error("Password needs minimum 8 characters");
        return;
      }
      return true;
    };
    if (!isFieldValidate()) {
      return;
    }
    closeModal();
    sendDataToServer();
  };
  const sendDataToServer = async () => {
    try {
      const response = await axiosInstance.post(
        `/editTutorById/${tutorId}`,
        etData
      );
      if (response.status == 200) {
        console.log("Edit", response);
        toast.success("Profile updated");
      }
    } catch (error) {
      console.log("Fail on updating userdata");
    } finally {
      getEtData2(tutorId);
    }
  };
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="editProfile Modal"
        className="modal-Etedit"
        overlayClassName="overlay"
      >
        <div className="d-flex">
          <span className="fs-2" onClick={closeModal}>
            {" "}
            <MdArrowBack />
          </span>
          <h2 className="editprofile">Edit Profile</h2>
        </div>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3 mt-3">
            <Form.Group as={Col} controlId="formGridFirstname">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Fullname"
                value={etData.fullName}
                onChange={(e) =>
                  SetEtData({ ...etData, fullName: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridlastname">
              <Form.Label>Qualifiaction</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter qualification"
                value={etData.qualification}
                onChange={(e) =>
                  SetEtData({ ...etData, qualification: e.target.value })
                }
              />
            </Form.Group>
          </Row>
          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Specification</Form.Label>
            <Form.Control
              placeholder="Enter specification"
              value={etData.specification}
              onChange={(e) =>
                SetEtData({ ...etData, specification: e.target.value })
              }
            />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridPincode">
              <Form.Label>Experience</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter experience"
                value={etData.experience}
                onChange={(e) =>
                  SetEtData({ ...etData, experience: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridContact">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter contact number"
                value={etData.contactNumber}
                onChange={(e) =>
                  SetEtData({ ...etData, contactNumber: e.target.value })
                }
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={etData.email}
                onChange={(e) =>
                  SetEtData({ ...etData, email: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={etData.password}
                onChange={(e) =>
                  SetEtData({ ...etData, password: e.target.value })
                }
              />
            </Form.Group>
          </Row>
          <div className="editEtsubmit-button">
            <Button variant="secondary" type="submit">
              Update
            </Button>{" "}
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default EtEditModal;
