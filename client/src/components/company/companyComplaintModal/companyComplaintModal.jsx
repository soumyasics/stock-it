import React, { useState } from "react";
import Modal from "react-modal";
import toast from "react-hot-toast";
import axiosInstance from "../../../apis/axiosInstance";

Modal.setAppElement("#root");

const CompanyComplaintModal = ({
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
    const response = axiosInstance.post("/user-createComplaint", obj);
    try {
      if (response.status == 200) {
        setComplaint(response.data.data);
        toast.success("completed");
      }
    } catch (error) {
      console.log("Error on send complaint");
    }finally{
      setComplaint("")
      closeModal()
    }
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
          Write your complaint
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

export default CompanyComplaintModal;
