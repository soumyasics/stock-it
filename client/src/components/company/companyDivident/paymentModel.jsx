import { useState } from "react";
import { Form, Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export const DividentPaymentModal = ({
  show,
  handleClose,
  handlePaymentDataChange,
  sendDataToServer,
  paymentData,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    sendDataToServer();
  };
  return (
    <div id="my-unique-payment">
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
        className="buy-stock-payment-modal"
      >
        <Modal.Header className="text-center" closeButton>
          <Modal.Title>Payment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formCardHolderName">
                  <Form.Label>Card Holder Name</Form.Label>
                  <Form.Control
                    name="cardHolderName"
                    onChange={handlePaymentDataChange}
                    type="text"
                    value={paymentData.cardHolderName}
                    required
                    placeholder="Enter Name"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formCardNumber">
                  <Form.Label>Card Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="cardNumber"
                    onChange={handlePaymentDataChange}
                    minLength={16}
                    maxLength={16}
                    value={paymentData.cardNumber}
                    required
                    placeholder="Enter Card Number"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formCVV">
                  <Form.Label>CVV</Form.Label>
                  <Form.Control
                    type="text"
                    name="cvv"
                    onChange={handlePaymentDataChange}
                    minLength={3}
                    maxLength={3}
                    value={paymentData.cvv}
                    required
                    placeholder="Enter CVV"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formExpiry">
                  <Form.Label>Expiry Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="expiry"
                    required
                    onChange={handlePaymentDataChange}
                    placeholder="DD/MM/YYYY"
                    value={paymentData.expiry}
                  />
                </Form.Group>
              </Col>
            </Row>
            <div className="d-flex justify-content-center">
              <Button variant="success" type="submit">
                Pay
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};
