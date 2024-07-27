import React, { useState } from "react";
import Etnavbar from "../et-navbar/etnavbar";
import Etsidebar from "../et-sidebar/etsidebar";
import { Col, Row } from "react-bootstrap";
import EtAddArticle from "../et-AddArticle/etAddArticle";
import {EtviewArticleList} from "../et-ViewArticleList/et-viewArticleList.jsx";
import EtProfile from "../etProfile/etProfile.jsx";

function Etdashboard() {
  const [activePage, setActivePage] = useState("tutorProfile");
  const changePage = (value) => {
    setActivePage(value);
  };

  const navigateToviewArticle=()=>{
    setActivePage("viewArticles")
  }
  return (
    <>
      <Etnavbar />
      <Row>
        <Col md={3} className="p-0">
          <Etsidebar changePage={changePage} />
        </Col>
        <Col md={9} className="p-0" style={{ backgroundColor: "#1F2937" }}>
          {activePage === "tutorProfile" && <EtProfile/>}
          {activePage === "addArticles" && <EtAddArticle navigateToviewArticle={navigateToviewArticle}/>}
          {activePage === "viewArticles" && <EtviewArticleList />}
        </Col>
      </Row>
    </>
  );
}

export default Etdashboard;
