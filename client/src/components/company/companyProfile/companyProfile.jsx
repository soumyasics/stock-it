import { useEffect, useState } from "react";
import axiosInstance from "../../../apis/axiosInstance";
import { Card, Col, Image, ListGroup, Row, Table } from "react-bootstrap";
import ipoImage1 from "../../../assets/images/ipo-1.png";
import "./companyProfile.css";
import coImg1 from "../../../assets/images/co-1.png";
export const CompanyProfile = () => {
  const [ipoStatus, setIpoStatus] = useState(null);
  console.log("ipo", ipoStatus);
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
      <h4 className="text-center">Profile </h4>
      <Row className=" mx-auto mt-5" style={{ width: "90%" }}>
      <Col md={6}>
          <Image className="w-75" src={coImg1} alt="ipo" />
        </Col>
        <Col md={6} className="company-ipo-status shadow p-3">
          <Card style={{ width: "18rem" }}>
            <Card.Header className="capitalizeText text-center fw-bold">{ipoStatus?.companyId?.name?.substring(0, 20)} IPO Status</Card.Header>
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
                  {ipoStatus?.isAdminApproved ? (
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
                  Cost per share:
                  <span>{ipoStatus?.costPerShare}</span>
                </h6>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
    
      </Row>
    </div>
  );
};
