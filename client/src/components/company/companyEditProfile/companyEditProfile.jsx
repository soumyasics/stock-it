import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { MdArrowBack } from "react-icons/md";
import Button from "react-bootstrap/Button";
import axiosInstance from "../../../apis/axiosInstance";
import toast from "react-hot-toast";
import FloatingLabel from "react-bootstrap/FloatingLabel";

Modal.setAppElement("#root");

const EditCoProfileModal = ({
  openModal,
  closeModal,
  modalIsOpen,
  getIpoData,
}) => {
  const [companyId, setCompanyId] = useState("");
  const [companyData, setCompanyData] = useState({
    name: "",
    pincode: "",
    companyType: "",
    password: "",
    website: "",
    state: "",
    contact: "",
    email: "",
    description: "",
    regNo: "",
  });
  useEffect(() => {
    const companyId =
      JSON.parse(localStorage.getItem("stock_it_companyId")) || null;
    if (companyId) {
      setCompanyId(companyId);
      console.log("Coid", companyId);
      getcompanyData(companyId);
    }
  }, []);
  const getcompanyData = async (id) => {
    try {
      const response = await axiosInstance.post(`/viewCompanyById/${id}`);
      if (response.status == 200) {
        setCompanyData(response.data.data);
        console.log(response.data.data);
      }
    } catch (error) {
      console.log("Fail on getting companyData");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const {
      name,
      pincode,
      companyType,
      password,
      website,
      state,
      contact,
      email,
      description,
      regNo,
    } = companyData;
    console.log("compan", companyData)
    const isFieldValidate = () => {
      if (!name) {
        toast.error("Enter your CompanyName");
        return false;
      }
      if (!companyType) {
        toast.error("Choose your company type");
        return false;
      }
      if (!website) {
        toast.error("Enter your website");
        return false;
      }
      if (!regNo) {
        toast.error("Enter your regNo");
        return false;
      }
      if (!state) {
        toast.error("Enter your state");
        return false;
      }
      if (!pincode) {
        toast.error("Enter your pincode");
        return false;
      }
      if (String(pincode).length !== 6) {
        toast.error("Enter validate pincode");
        return false;
      }
      if (!contact) {
        toast.error("Enter your contact number");
        return false;
      }
      if (String(contact).length !== 10) {
        toast.error("Enter 10 digit contact number");
        return false;
      }
      if (!email) {
        toast.error("Enter your email");
        return false;
      }
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(email)) {
        toast.error("Please enter a valid email address");
        return false;
      }
      if (!password) {
        toast.error("Enter yout password");
        return false;
      }
      if (password.length < 8) {
        toast.error("Password needs minimum 8 characters");
        return;
      }
      if (!description) {
        toast.error("Enter description");
        return false;
      }
      return true;
    };
    if (!isFieldValidate()) {
      return;
    }
    closeModal();
    sendDataToServer();
  };
  const sendDataToServer = async () => {
    try {
      const response = await axiosInstance.post(
        `/editCompanyById/${companyId}`,
        companyData
      );
      if (response.status == 200) {
        console.log("Edit", response);
        toast.success("Profile updated");
      }
    } catch (error) {
      const status = error.response.status;
      if (status === 400 || status === 404) {
        toast.error(error?.response?.data?.msg);
      }
      console.log("Fail on updating companyData");
    } finally {
      getIpoData(companyId);
    }
  };
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="editProfile Modal"
        className="modal-Coedit"
        overlayClassName="overlay"
      >
        <div className="d-flex">
          <span className="fs-2" onClick={closeModal}>
            {" "}
            <MdArrowBack />
          </span>
          <h2 className="editprofile ">Edit Profile</h2>
        </div>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3 mt-3">
            <Form.Group as={Col} controlId="formGridFirstname">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter CompanyName"
                value={companyData.name}
                onChange={(e) =>
                  setCompanyData({ ...companyData, name: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridlastname">
              <Form.Label>CompanyType</Form.Label>
              <Form.Select
                aria-label="Floating label select example"
                placeholder="Enter CompanyType"
                value={companyData.companyType}
                onChange={(e) =>
                  setCompanyData({
                    ...companyData,
                    companyType: e.target.value,
                  })
                }
              >
                <option value="">Choose company type</option>
                <option value="Tech">Tech</option>
                <option value="Medical">Medical</option>
                <option value="Education">Education</option>
                <option value="Other">Other</option>
              </Form.Select>
            </Form.Group>
          </Row>
          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Website</Form.Label>
            <Form.Control
              type="url"
              placeholder="Enter website"
              value={companyData.website}
              onChange={(e) =>
                setCompanyData({ ...companyData, website: e.target.value })
              }
            />
          </Form.Group>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridRegNo">
              <Form.Label>RegNo</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter RegNo"
                value={companyData.regNo}
                onChange={(e) =>
                  setCompanyData({ ...companyData, regNo: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter state"
                value={companyData.state}
                onChange={(e) =>
                  setCompanyData({ ...companyData, state: e.target.value })
                }
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridPincode">
              <Form.Label>Pincode</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter pincode"
                value={companyData.pincode}
                onChange={(e) =>
                  setCompanyData({ ...companyData, pincode: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridContact">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter contact number"
                value={companyData.contact}
                onChange={(e) =>
                  setCompanyData({
                    ...companyData,
                    contact: e.target.value,
                  })
                }
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={companyData.email}
                onChange={(e) =>
                  setCompanyData({ ...companyData, email: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={companyData.password}
                onChange={(e) =>
                  setCompanyData({ ...companyData, password: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="floatingTextarea">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Enter Description"
                style={{ height: "60px" }}
                value={companyData.description}
                onChange={(e) =>
                  setCompanyData({
                    ...companyData,
                    description: e.target.value,
                  })
                }
              />
            </Form.Group>
          </Row>
          <div className="editsubmit-button">
            <Button variant="secondary" type="submit">
              Update
            </Button>{" "}
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default EditCoProfileModal;
