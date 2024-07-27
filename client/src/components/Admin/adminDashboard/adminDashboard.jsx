import { useState } from "react";
import AdminSidebar from "../../common/adminSidebar";
import { Col, Row } from "react-bootstrap";
import { CompanyPendingRequest } from "../../company/CompanyRequest";
import { Footer2 } from "../../common/footer2/footer2";
import AdminNavbar from "../../common/adminNavbar";
import { AdminOverview } from "../adminOverview/adminOverview";
import { ETPendingRequest } from "../adminViewAllETPendingRequests/viewAllETPendingRequest";
import AdminViewBroughtStock from "../adminViewBroughtStock/adminViewBroughtStock";
export const AdminDashboard = () => {
  const [activePage, setActivePage] = useState("overview");
  const changePage = (value) => {
    setActivePage(value);
  };
  return (
    <>
      <AdminNavbar />
      <Row>
        <Col md={3} className="p-0">
          <AdminSidebar changePage={changePage} />
        </Col>
        <Col md={9} className="p-0" style={{ backgroundColor: "#1F2937" }}>
          {activePage === "overview" && <AdminOverview />}
          {activePage === "company-pending-request" && (
            <CompanyPendingRequest />
          )}
          {activePage === "et-pending-request" && (
            <ETPendingRequest />
          )}
         
        </Col>
      </Row>
      <div>
        <Footer2 />
      </div>
    </>
  );
};
