import { useState } from "react";
import AdminSidebar from "../../common/adminSidebar";
import { Col, Row } from "react-bootstrap";
import { CompanyPendingRequest } from "../../company/CompanyRequest";
import { Footer2 } from "../../common/footer2/footer2";
export const AdminDashboard = () => {
  const [activePage, setActivePage] = useState("company-pending-request");
  const changePage = (value) => {
    setActivePage(value);
  };
  return (
    <>
      <Row>
        <Col md={3} className="p-0">
          <AdminSidebar changePage={changePage} />
        </Col>
        <Col md={9} className="p-0" style={{ backgroundColor: "#1F2937" }}>
          {activePage === "overview" && <h1> overview </h1>}
          {activePage === "company-pending-request" && (
            <CompanyPendingRequest />
          )}
        </Col>
      </Row>
      <div>
        <Footer2 />
      </div>
    </>
  );
};
