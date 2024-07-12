import { useState } from "react";
import { Form, Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./PaymentModal.css"; // Custom CSS file for additional styling

export const PaymentModal = ({ show, handleClose }) => {
  return (
    <>
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
          <Form>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formCardHolderName">
                  <Form.Label>Card Holder Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Name" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formCardNumber">
                  <Form.Label>Card Number</Form.Label>
                  <Form.Control
                    type="text"
                    minLength={16}
                    maxLength={16}
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
                    minLength={3}
                    maxLength={3}
                    placeholder="Enter CVV"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formExpiry">
                  <Form.Label>Expiry</Form.Label>
                  <Form.Control type="date" placeholder="DD/MM/YYYY" />
                </Form.Group>
              </Col>
            </Row>
            <div className="d-flex justify-content-center">
              <Button variant="primary">Submit</Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};
