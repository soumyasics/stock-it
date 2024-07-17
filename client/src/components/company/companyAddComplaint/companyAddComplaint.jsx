import React from "react";
import "./companyAddComplaint.css";
import { FloatingLabel } from "react-bootstrap";
import Form from "react-bootstrap/Form";

function CompanyAddComplaint() {
  return (
    <div>
      <div className="companyAddComplaint-main">
        <div className="companyAddComplaint-textarea">
          <h6>Issue</h6>
          <FloatingLabel
            controlId="floatingTextarea2 "
            label="Enter Your Complaint Here"
          >
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: "250px" }}
            />
          </FloatingLabel>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default CompanyAddComplaint;
