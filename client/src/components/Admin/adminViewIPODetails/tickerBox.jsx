import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import "./ticker-box.css";
export const TickerBox = ({ handleClose, show, toAccept }) => {
  const submitTicker = (e) => {
    e.preventDefault();
    toAccept();
    handleClose();
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
            />
          </Form.Group>
          <div className="d-flex justify-content-center">
            <button  type="submit">Submit </button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
