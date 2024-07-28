import { Container, Row, Col } from "react-bootstrap";
import { Footer2 } from "../../common/footer2/footer2";
import { UserNavbar } from "../userNavbar/userNavbar";
import { UserDashboardSidebar } from "./dashboardSidebar";

export const UserDashboard = () => {
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
            <UserDashboardSidebar />
          </Col>
          <Col md={9}>h1 chart</Col>
        </Row>
      </Container>
      <Footer2 />
    </div>
  );
};
