import { useEffect, useState } from "react";
import { Container, Row, Col, ListGroup, Card } from "react-bootstrap";
import axiosInstance from "../../../apis/axiosInstance";
import { BASE_URL } from "../../../apis/baseUrl";
import { Form } from "react-bootstrap";
import "./userDashboard.css"
export const UserDashboardSidebar = () => {
  const [fixedData, setFixedData] = useState([]);
  const [stocks, setStocks] = useState([]);
  useEffect(() => {
    getAllStocks();
  }, []);

  const getAllStocks = async () => {
    try {
      const res = await axiosInstance.get("getAllApprovedIPOs");
      if (res.status === 200) {
        const allIPOs = res.data?.data || [];
        const allCompanies = allIPOs.map((IPO) => {
          return IPO.companyId;
        });
        setStocks(allIPOs);
        setFixedData(allIPOs);
      } else {
        console.log("Error ", res);
      }
    } catch (error) {
      console.log("Error getting compnaies", error);
    }
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    if (value) {
      const filterData = fixedData.filter((items) => {
        return items.companyId?.name
          .toLowerCase()
          .includes(value.toLowerCase());
      });
      setStocks(filterData);
    } else {
      setStocks(fixedData);
    }
  };
  return (
    <>
      <ListGroup
        className="mt-3 border-0"
        style={{
          backgroundColor: "#374151",
          height: "100vh",
          overflow: "auto",
        }}
      >
        <ListGroup.Item style={{ backgroundColor: "#374151" }}>
          <Row>
            <Col xs={12}>
              <Form.Control
                type="text"
                style={{ backgroundColor: "#374151" }}
                className="text-light white-placeholder"
                onChange={handleSearch}
                placeholder="Search stocks here.."
              />
            </Col>
          </Row>
        </ListGroup.Item>

        {stocks.map((stock, index) => {
          const company = stock.companyId;
          console.log("company", company);
          const logoUrl = company?.logo?.filename || null;
          let path =
            "https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg";
          if (logoUrl) {
            path = `${BASE_URL}${logoUrl}`;
          }
          return (
            <ListGroup.Item key={index} style={{ backgroundColor: "#374151" }}>
              <Card style={{ backgroundColor: "#374151", cursor: "pointer" }}>
                <Row>
                  <Col xs={3}>
                    <Card.Img
                      style={{
                        height: "50px",
                        width: "50px",
                        borderRadius: "50%",
                      }}
                      variant="top"
                      src={path}
                    />
                  </Col>
                  <Col className="d-flex align-items-center">
                    <Card.Text style={{ textAlign: "left" }}>
                      {company.name}
                    </Card.Text>
                  </Col>
                  <Col className="d-flex align-items-center">
                    <Card.Text style={{ textAlign: "right" }}>
                      {stock.currentMarketPrice}
                    </Card.Text>
                  </Col>
                </Row>
              </Card>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </>
  );
};
