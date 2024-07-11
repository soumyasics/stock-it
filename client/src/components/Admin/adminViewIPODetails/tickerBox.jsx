import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import "./ticker-box.css";
import { toast } from "react-hot-toast";
import { useState } from "react";
import axiosInstance from "../../../apis/axiosInstance";
export const TickerBox = ({ companyId, handleClose, show, toAccept }) => {
  const [ticker, setTicker] = useState("");
  const submitTicker = (e) => {
    e.preventDefault();
    if (ticker.length < 3) {
      toast.error("Ticker symbol must be more than 3 characters");
      return;
    }
    if (ticker.length > 20) {
      toast.error("Ticker symbol must be less than 20 characters");
      return;
    }

    const data = {
      companyId,
      ticker,
    };
    sendDataToServer(data);
  };
  const sendDataToServer = async (data) => {
    try {
      const res = await axiosInstance.post("add-ticker", data);
      if (res.status === 200) {
        // toast.success(res.data.msg);
        toAccept();
      } else {
        toast.error(res.data.msg);
      }
    } catch (error) {
      console.log("Error on assigning ticker", error);
    } finally {
      handleClose();
    }
  };
  return (
    <Modal show={show} onHide={handleClose} className="ticker-modal">
      <Modal.Header className="d-flex justify-content-center shadow text-light ticker-modal">
        <Modal.Title className="text-center fs-5 fw-bold">
          IPO Request Approval
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="ticker-modal text-light shadow">
        <Form onSubmit={submitTicker}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Assign Stock Ticker Symbol</Form.Label>
            <Form.Control
              type="text"
              placeholder="Stock Ticker Symbol"
              autoFocus
              required
              minLength={3}
              onChange={(e) => setTicker(e.target.value)}
              maxLength={20}
            />
          </Form.Group>
          <div className="d-flex justify-content-center">
            <button type="submit">Submit </button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
