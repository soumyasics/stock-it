import React, { useState } from "react";
import Modal from "react-modal";
import "./userComplaintModal.css";
import toast from "react-hot-toast";
import axiosInstance from "../../../apis/axiosInstance";

Modal.setAppElement("#root");

const ComplaintModal = ({
  openModal,
  closeModal,
  modalIsOpen,
  sendComplaint,
  companyId,userId
}) => {
  const [complaint, setComplaint] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Complaint submitted:", complaint);

    if (!complaint) {
      toast.error("Please enter your complaint");
      return;
    }
    sendComplaint(complaint);
    const obj = { complaint, userId, companyId };
    const response = axiosInstance.post("/createComplaint", obj);
    try {
      if (response.status == 200) {
        setComplaint(response.data.data);
        toast.success("completed");
      }
    } catch (error) {}
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Complaint Modal"
        className="modal-xl "
        overlayClassName="overlay"
      >
        <h2 style={{ color: "#fff" }} className="text-start">
          Issue
        </h2>
        <form onSubmit={handleSubmit}>
          <textarea
            value={complaint}
            onChange={(e) => setComplaint(e.target.value)}
            placeholder="Enter Your Complaint Here"
            className="complaint-textarea"
          />
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default ComplaintModal;
