import React, { useState } from 'react';
import Modal from 'react-modal';
import "./userComplaintModal.css"

Modal.setAppElement('#root');

const ComplaintModal = ({openModal,closeModal,modalIsOpen,sendComplaint}) => {
    const [complaint, setComplaint] = useState('');
    

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Complaint submitted:', complaint);
    
if (!complaint) {
    // show toast here and return 
    closeModal()
}

sendComplaint(complaint)
    
    // Add your submission logic here
    setComplaint('');
    
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
        <h2 style={{color:"#fff"}} className='text-start'>Issue</h2>
        <form onSubmit={handleSubmit}>
          <textarea
            value={complaint}
            onChange={(e) => setComplaint(e.target.value)}
            placeholder="Enter Your Complaint Here"
            className="complaint-textarea" 
          />
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </Modal>
    </div>
  );
};

export default ComplaintModal;
