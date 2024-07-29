import { Container, Row, Col } from "react-bootstrap";
import { Footer2 } from "../../common/footer2/footer2";
import { UserNavbar } from "../userNavbar/userNavbar";
import { UserDashboardSidebar } from "./dashboardSidebar";
import { useState } from "react";
import { UserDashboardMainbar } from "./userDashboardMainbar.jsx";
import UserDashDefaultPage from "../userDashboardDefaultPage/userDashDefaultPage.jsx";

export const UserDashboard = () => {
  const [selectedStock, setSelectedStock] = useState("");
  const changeSelectedStock = (value) => {
    setSelectedStock(value);
  };
  return (
    <div>
      <UserNavbar />
      <Container
        fluid
        className="text-light"
        style={{ minHeight: "500px", backgroundColor: "#1F2937" }}
      >
        <Row>
          <Col className="sidebar w-100" style={{ backgroundColor: "#374151" }}>
            <UserDashboardSidebar changeSelectedStock={changeSelectedStock} />
          </Col>
          <Col md={9}>
            {selectedStock ? (
              <UserDashboardMainbar selectedStock={selectedStock} />
            ) : (
              <div>
                <UserDashDefaultPage />
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};
