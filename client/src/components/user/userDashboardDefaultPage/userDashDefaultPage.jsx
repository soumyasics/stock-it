import React from "react";
import "./UserDashDefaultPage.css";
import { Row, Col } from "react-bootstrap";
import img1 from "../../../assets/illus/ChartPic.png";

function UserDashDefaultPage() {
  return (
    <div>
      <div className="UserDashDefaultPage-main">
        <Col>
          <div className="UserDashDefaultPage-img">
            <img src={img1} alt="" />
          </div>
        </Col>
        <Col>
          <div className="UserDashDefaultPage-head">
            <h4>Please select a company for view chart </h4>
          </div>
        </Col>
      </div>
    </div>
  );
}

export default UserDashDefaultPage;
