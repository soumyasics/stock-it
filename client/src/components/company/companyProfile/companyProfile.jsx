import { useEffect, useState } from "react";
import axiosInstance from "../../../apis/axiosInstance";
import {
  Alert,
  Button,
  Card,
  Col,
  Image,
  ListGroup,
  Row,
  Table,
} from "react-bootstrap";
import ipoImage1 from "../../../assets/images/ipo-1.png";
import "./companyProfile.css";
import coImg1 from "../../../assets/images/co-1.png";
import EditCoProfileModal from "../companyEditProfile/companyEditProfile";
import { BASE_URL } from "../../../apis/baseUrl";
import CompanyProfileDividend from "../companyProfileDividend/companyProfileDividend";
export const CompanyProfile = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [companyData, setcompanyData] = useState(null);
  const [dividend, setDividend] = useState([]);
  const [coId, setCoId] = useState();
  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };
  const editProfile = () => {
    openModal();
  };
  useEffect(() => {
    let companyId = localStorage.getItem("stock_it_companyId") || null;
    if (!companyId) {
      toast.error("Please login again.");
      navigate("/companyLogin");
      return;
    }
    companyId = companyId.replace(/['"]+/g, "");
    getIpoData(companyId);
    setCoId(companyId);
    getIpoData2(companyId);
  }, []);
  console.log("CompanyID", coId);
  const getIpoData = async (companyId) => {
    try {
      const response = await axiosInstance.post(
        `/viewCompanyById/${companyId}`
      );
      console.log("resp", response);
      const data = response?.data?.data || null;
      if (data) {
        setcompanyData(data);
      } else {
        console.log("resposne", response);
      }
      console.log("Response from getcompanyData api", response.data.data);
    } catch (error) {
      console.log("Error getting companies ipo data", error);
    }
  };

  const getIpoData2 = async (companyId) => {
    try {
      const response = await axiosInstance.get(
        `/getIpoByCompanyId/${companyId}`
      );
      if (response.status === 200) {
        const data = response?.data?.data || null;
        if (data) {
          getDividendData(data._id);
          console.log("data", data);
        }
      }
    } catch (error) {
      console.log("Error getting compnaies ipo data", error);
    }
  };
  console.log("dividend", dividend);
  const getDividendData = async (id) => {
    try {
      const response = await axiosInstance.get(`getDividentsByIPOId/${id}`);
      if (response.status == 200) {
        setDividend(response.data.data);
      }
    } catch (error) {
      console.log("Fail on getting dividend data");
    }
  };
  return (
    <div className="text-light pt-5" style={{overflowY:"scroll",height:"800px"}}>
      <h4 className="text-center">Profile </h4>
      <Row className=" mx-auto mt-5" style={{ width: "90%" }}>
        <Col
          md={6}
          className="d-flex justify-content-center align-items-center"
        >
          <Image className="w-75" src={coImg1} alt="ipo" />
        </Col>
        <Col md={6} className="company-ipo-status  shadow p-3">
          <Card className="w-100">
            <Card.Header className="capitalizeText text-center fw-bold">
              {" "}
              Company Details
            </Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>
                {" "}
                <h6>
                  <span className="capitalizeText fw-bold ">
                    Company Name:{" "}
                  </span>
                  {companyData?.name?.substring(0, 20)}
                </h6>
              </ListGroup.Item>
              {/* <ListGroup.Item>
                {" "}
                <h6>
                  Current Status:{" "}
                  {companyData?.isAdminApproved ? (
                    <span className="capitalizeText text-success fw-bold">
                      {" "}
                      Approved
                    </span>
                  ) : (
                    <span className="capitalizeText text-danger fw-bold">
                      {" "}
                      Pending
                    </span>
                  )}
                </h6>
              </ListGroup.Item> */}
              <ListGroup.Item>
                {" "}
                <h6>
                  <span className="fw-bold">Type: </span>{" "}
                  {companyData?.companyType}
                </h6>
              </ListGroup.Item>
              <ListGroup.Item>
                {" "}
                <h6>
                  <span className="fw-bold">Contact: </span>{" "}
                  {companyData?.contact}
                </h6>
              </ListGroup.Item>
              <ListGroup.Item>
                {" "}
                <h6>
                  <span className="fw-bold">Email:</span> {companyData?.email}
                </h6>
              </ListGroup.Item>
              <ListGroup.Item>
                {" "}
                <h6 className="fw-bold">
                  Website:
                  <a
                    target="_blank"
                    href={companyData?.website}
                    className="text-dark"
                  >
                    {companyData?.website}
                  </a>
                </h6>
              </ListGroup.Item>
              <ListGroup.Item>
                {" "}
                <h6>
                  <span className="fw-bold">State:</span>
                  {companyData?.state}
                </h6>
              </ListGroup.Item>
              <ListGroup.Item>
                {" "}
                <h6>
                  <span className="fw-bold">District:</span>
                  {companyData?.district}
                </h6>
              </ListGroup.Item>
              <ListGroup.Item>
                {" "}
                <h6>
                  <span className="fw-bold">Pincode:</span>
                  {companyData?.pincode}
                </h6>
              </ListGroup.Item>
              <ListGroup.Item>
                {" "}
                <h6>
                  <span className="fw-bold">Founded Year:</span>
                  {companyData?.year}
                </h6>
              </ListGroup.Item>
              <ListGroup.Item>
                {" "}
                <h6>
                  <span className="fw-bold">Registration number:</span>
                  {companyData?.regNo}
                </h6>
              </ListGroup.Item>
              <ListGroup.Item>
                {" "}
                <h6 style={{ fontWeight: "bold" }}>
                  Company License:
                  <button
                    className="modal-btn btn-primary btn"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                    style={{ color: "black" }}
                  >
                    View License
                  </button>
                </h6>
              </ListGroup.Item>
              <ListGroup.Item>
                {" "}
                <h6>
                  Description:
                  <span>{companyData?.description}</span>
                </h6>
              </ListGroup.Item>
            </ListGroup>
          </Card>
          <div className="editsubmit-button mt-4 ms-9">
            <Button variant="success" type="submit" onClick={editProfile}>
              Edit Profile
            </Button>{" "}
            <EditCoProfileModal
              modalIsOpen={modalIsOpen}
              openModal={openModal}
              closeModal={closeModal}
              getIpoData={getIpoData}
            />
          </div>
        </Col>
      </Row>
      <CompanyProfileDividend dividend={dividend} />
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div class="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title fs-5 text-dark"
                id="staticBackdropLabel"
              >
                Company License
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body modal-image">
              <img
                src={`${BASE_URL}${companyData?.license?.filename}`}
                alt="profile"
              />
            </div>
            <div className="modal-footer"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
