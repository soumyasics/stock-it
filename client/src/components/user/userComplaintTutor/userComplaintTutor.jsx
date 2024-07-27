import React, { useState } from "react";
import Modal from "react-modal";
import "./userComplaintTutor.css";
import toast from "react-hot-toast";
import axiosInstance from "../../../apis/axiosInstance";

Modal.setAppElement("#root");

const UserComplaintModal = ({
  openModal,
  closeModal,
  modalIsOpen,
  etId,
  userId,
}) => {
  const [complaint, setComplaint] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Complaint submitted:", complaint);

    if (!complaint) {
      toast.error("Please enter your complaint");
      return;
    }

    const obj = { complaint, userId, etId };
    try {
      const response = await axiosInstance.post("/createComplaintET", obj);
      console.log("re", response);
      if (response.status == 200) {
        setComplaint(response.data.data);
        toast.success("Send complaint successfully. We will review soon");
      }
    } catch (error) {
      console.log("Error on send complaint");
    } finally {
      setComplaint("");
      closeModal()
    }
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Complaint Modal"
        className="Usercomplaint"
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

export default UserComplaintModal;
