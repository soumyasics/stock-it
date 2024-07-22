import React, { useState } from "react";
import "./userEditProfile.css"
import Modal from "react-modal";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { MdArrowBack } from "react-icons/md";
import Button from "react-bootstrap/Button";

Modal.setAppElement("#root");

const EditModal = ({openModal,closeModal,modalIsOpen}) => {
  
  const [complaint, setComplaint] = useState("");



  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Complaint submitted:", complaint);
    // Add your submission logic here
    setComplaint("");
    closeModal();
  };

  return (
    <div>
      
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Complaint Modal"
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
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Firstname" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Enter lastname" />
            </Form.Group>
          </Row>
          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="Enter address" />
          </Form.Group>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="Enter city" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>State</Form.Label>
              <Form.Control type="text" placeholder="Enter state" />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Pincode</Form.Label>
              <Form.Control type="number" placeholder="Enter pincode" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control type="number" placeholder="Enter contact number" />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Row>
          <div className="editsubmit-button"> 
            <Button variant="secondary">Update</Button>{" "}
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default EditModal;
