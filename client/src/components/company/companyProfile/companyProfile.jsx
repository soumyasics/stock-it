import { useEffect, useState } from "react";
import axiosInstance from "../../../apis/axiosInstance";
import { Card, Col, Image, ListGroup, Row, Table } from "react-bootstrap";
import ipoImage1 from "../../../assets/images/ipo-1.png";
import "./companyProfile.css";
import coImg1 from "../../../assets/images/co-1.png";
export const CompanyProfile = () => {
  const [companyData, setcompanyData] = useState(null);
  console.log("ipo", companyData);
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
            <Card.Header className="capitalizeText text-center fw-bold"> Company Details</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>
                {" "}
                <h6>
                  Company Name:{" "}
                  <span className="capitalizeText fw-bold ">
                    {" "}
                    {companyData?.name?.substring(0, 20)}
                  </span>
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
                  Type: <span>{companyData?.companyType}</span>{" "}
                </h6>
              </ListGroup.Item>
              <ListGroup.Item>
                {" "}
                <h6>
                  Contact: <span>{companyData?.contact}</span>{" "}
                </h6>
              </ListGroup.Item>
              <ListGroup.Item>
                {" "}
                <h6>
                  District:
                  <span>{companyData?.district}</span>
                </h6>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
    
      </Row>
    </div>
  );
};
