import React, { useEffect, useState } from "react";
import "./userEditProfile.css";
import Modal from "react-modal";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { MdArrowBack } from "react-icons/md";
import Button from "react-bootstrap/Button";
import axiosInstance from "../../../apis/axiosInstance";
import toast from "react-hot-toast";

Modal.setAppElement("#root");

const EditModal = ({ openModal, closeModal, modalIsOpen, getUserData2 }) => {
  const [userId, setUserId] = useState("");
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    contactNumber: "",
    email: "",
    password: "",
  });
  useEffect(() => {
    const userId = localStorage.getItem("stock_it_userId") || null;
    if (userId) {
      setUserId(userId);
      console.log("userid", userId);
      getUserData(userId);
    }
  }, []);
  const getUserData = async (id) => {
    try {
      const response = await axiosInstance.post(`/getUserById/${id}`);
      if (response.status == 200) {
        setUserData(response.data.data);
        console.log(response.data.data);
      }
    } catch (error) {
      console.log("Fail on getting userdata");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const {
      firstName,
      lastName,
      address,
      city,
      state,
      pincode,
      contactNumber,
      email,
      password,
    } = userData;
    const isFieldValidate = () => {
      if (!firstName) {
        toast.error("Enter your firstName");
        return false;
      }
      if (!lastName) {
        toast.error("Enter your lastName");
        return false;
      }
      if (!address) {
        toast.error("Enter your address");
        return false;
      }
      if (!city) {
        toast.error("Enter your city");
        return false;
      }
      if (!state) {
        toast.error("Enter your state");
        return false;
      }
      if (!pincode) {
        toast.error("Enter your pincode");
        return false;
      }
      if (pincode.length !== 6) {
        toast.error("Enter validate pincode");
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
        toast.error("Enter yout password");
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
        `/editUserById/${userId}`,
        userData
      );
      if (response.status == 200) {
        console.log("Edit", response);
        toast.success("Profile updated");
      }
    } catch (error) {
      console.log("Fail on updating userdata");
    } finally {
      getUserData2(userId);
    }
  };
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="editProfile Modal"
        className="modal-edit"
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
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Firstname"
                value={userData.firstName}
                onChange={(e) =>
                  setUserData({ ...userData, firstName: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridlastname">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter lastname"
                value={userData.lastName}
                onChange={(e) =>
                  setUserData({ ...userData, lastName: e.target.value })
                }
              />
            </Form.Group>
          </Row>
          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control
              placeholder="Enter address"
              value={userData.address}
              onChange={(e) =>
                setUserData({ ...userData, address: e.target.value })
              }
            />
          </Form.Group>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter city"
                value={userData.city}
                onChange={(e) =>
                  setUserData({ ...userData, city: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter state"
                value={userData.state}
                onChange={(e) =>
                  setUserData({ ...userData, state: e.target.value })
                }
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridPincode">
              <Form.Label>Pincode</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter pincode"
                value={userData.pincode}
                onChange={(e) =>
                  setUserData({ ...userData, pincode: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridContact">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter contact number"
                value={userData.contactNumber}
                onChange={(e) =>
                  setUserData({ ...userData, contactNumber: e.target.value })
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
                value={userData.email}
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={userData.password}
                onChange={(e) =>
                  setUserData({ ...userData, password: e.target.value })
                }
              />
            </Form.Group>
          </Row>
          <div className="editsubmit-button">
            <Button variant="secondary" type="submit">
              Update
            </Button>{" "}
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default EditModal;
