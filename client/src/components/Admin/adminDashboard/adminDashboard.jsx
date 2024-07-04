import { useState } from "react";
import AdminSidebar from "../../common/adminSidebar";
import NewAdminsidebar from "../../AdminNewSidebar/newAdminsidebar";
import { Col, Row } from "react-bootstrap";
export const AdminDashboard = () => {
  const [activePage, setActivePage] = useState("overview");
  const changePage = (value) => {
    setActivePage(value);
  };
  return (
    <Row>
      <Col md={3} className="bg-warning">
        <AdminSidebar changePage={changePage} />
      </Col>
      <Col md={9} className="w-75 bg-primary">

        <h1> teisttt </h1>
        {activePage === "overview" && <h1>overvksjdfdksf df dfkdf dkf diew</h1>}
        {activePage === "users" && <h1>overview</h1>}
        {activePage === "company-request" && <h1>Company request</h1>}
      </Col>
    </Row>
  );
};
