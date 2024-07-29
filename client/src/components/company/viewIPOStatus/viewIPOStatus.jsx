import { useEffect, useState } from "react";
import axiosInstance from "../../../apis/axiosInstance";
import {
  Button,
  Card,
  Col,
  Image,
  ListGroup,
  Row,
  Table,
} from "react-bootstrap";
import ipoImage1 from "../../../assets/images/ipo-1.png";
import "./viewStatus.css";
import IpoStatusEditModal from "../ipoStatusEdit/ipoStatusEdit";
export const ViewIPOStatus = () => {
  const [ipoStatus, setIpoStatus] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);
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
  }, []);

  const getIpoData = async (companyId) => {
    try {
      const response = await axiosInstance.get(
        `/getIpoByCompanyId/${companyId}`
      );
      console.log("resp", response);
      const data = response?.data?.data || null;
      if (data) {
        setIpoStatus(data);
      } else {
        console.log("resposne", response);
      }
      console.log("Response from getIpoStatus api", response.data.data);
    } catch (error) {
      console.log("Error getting compnaies ipo data", error);
    }
  };
  return (
    <div className="text-light pt-5">
      <h4 className="text-center">IPO Status</h4>
      <Row className=" mx-auto mt-5" style={{ width: "80%" }}>
        <Col md={6} className="company-ipo-status shadow p-3">
          <Card style={{ width: "28rem" }}>
            <Card.Header className="capitalizeText text-center fw-bold">
              {ipoStatus?.companyId?.name?.substring(0, 20)} IPO Status
            </Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>
                {" "}
                <h6>
                  Company Name:{" "}
                  <span className="capitalizeText fw-bold ">
                    {" "}
                    {ipoStatus?.companyId?.name?.substring(0, 20)}
                  </span>
                </h6>
              </ListGroup.Item>
              <ListGroup.Item>
                {" "}
                <h6>
                  Current Status:{" "}
                  {ipoStatus?.adminApproved === "approved" ? (
                    <span className="capitalizeText text-success fw-bold">
                      {" "}
                      Approved
                    </span>
                  ) : ipoStatus?.adminApproved === "rejected" ? (
                    <span className="capitalizeText text-danger fw-bold">
                      {" "}
                      Rejected
                    </span>
                  ) : (
                    <span className="capitalizeText text-primary fw-bold">
                      {" "}
                      Pending
                    </span>
                  )}
                </h6>
              </ListGroup.Item>
              <ListGroup.Item>
                {" "}
                <h6>
                  Market capitalization: <span>{ipoStatus?.capitation}</span>{" "}
                </h6>
              </ListGroup.Item>
              <ListGroup.Item>
                {" "}
                <h6>
                  Total number of shares: <span>{ipoStatus?.totalShares}</span>{" "}
                </h6>
              </ListGroup.Item>
              <ListGroup.Item>
                {" "}
                <h6>
                  Available Shares: <span>{ipoStatus?.availableShares}</span>{" "}
                </h6>
              </ListGroup.Item>
              <ListGroup.Item>
                {" "}
                <h6>
                  Cost Per Share:
                  <span>{ipoStatus?.costPerShare}</span>
                </h6>
              </ListGroup.Item>
              <ListGroup.Item>
                {" "}
                <h6>
                  IPO Initiated Date:
                  <span>{ipoStatus?.createdAt?.substring(0, 10)}</span>
                </h6>
              </ListGroup.Item>
            </ListGroup>
          </Card>
          {ipoStatus.costPerShare && (
            <div className="ipoStatusFooter">
              <Button
                className="ipoStatusBtn"
                style={{ width: "100px", marginTop: "5%" }}
                variant="success"
                onClick={editProfile}
              >
                Edit
              </Button>
            </div>
          )}
          <IpoStatusEditModal
            openModal={openModal}
            modalIsOpen={modalIsOpen}
            closeModal={closeModal}
            ipoStatus={ipoStatus}
            getIpoData={getIpoData}
          />
        </Col>
        <Col md={6}>
          <Image className="w-75" src={ipoImage1} alt="ipo" />
        </Col>
      </Row>
    </div>
  );
};
