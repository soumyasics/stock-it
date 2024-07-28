import { Container, Row, Col } from "react-bootstrap";
import { Footer2 } from "../../common/footer2/footer2";
import { UserNavbar } from "../userNavbar/userNavbar";
import { UserDashboardSidebar } from "./dashboardSidebar";
import { useEffect, useState } from "react";
import { UserDashboardMainbar } from "./userDashboardMainbar.jsx";
import { useParams } from "react-router-dom";
export const UserDashboardParams = () => {
  const {id} = useParams()
  const [selectedStock, setSelectedStock] = useState("")
  const changeSelectedStock = (value) => {
    setSelectedStock(value)
  }
  useEffect(() => {
    changeSelectedStock(id)
  }, [id])
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
            <UserDashboardSidebar changeSelectedStock={changeSelectedStock}/>
          </Col>
          <Col md={9}>
            {selectedStock && <UserDashboardMainbar selectedStock={selectedStock}/>}
          </Col>
        </Row>
      </Container>
    </div>
  );
};
