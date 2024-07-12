import React, { useState } from "react";
import "./et-viewArticle.css";
import { IoReturnUpBack } from "react-icons/io5";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function EtviewArticle() {
  const navigate=useNavigate()
  const[data,setdata]=useState()
  return (
    <div>
      <div className="etViewArticle-main">
        <div className="etViewArticle-head d-flex gap-4">
          <div className="backToList" onClick={()=>{
              navigate(-1)
            }}>
            <IoReturnUpBack />
          </div>
          Article Title
        </div>
        <Row>
          <Col md={8} className="etViewArticle-video">
            <iframe
              width="90%"
              height="500px"
              src={
               "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
              }
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Col>
          <Col md={4} className="etViewArticle-description">
            <div className="text-success text-center mt-5 fs-3">
              Description
            </div>

            <table className="text-center mt-5 ms-9" style={{width:"40%"}}>
              <tbody>
              <tr>
                <td>Title</td>
                <td>-</td>
                <td>fhkuhdhjfajljskflaj</td>
              </tr>
              <tr>
                <td>SubTitle</td>
                <td>-</td>
                <td>fahja</td>
              </tr>
              <tr>
                <td>Content</td>
                <td>-</td>
                <td>fqhlfalhfilajfjaopfiaoifhalalfhqilfajjpdio</td>
              </tr>
              <tr>
                <td>Category</td>
                <td>-</td>
                <td>fuahfllllojk  </td>
              </tr>
              <tr>
                <td>Conclusion</td>
                <td>-</td>
                <td>fquhfaaaaaaaijqogjqgfiyhaflakjifalkkkklof</td>
              </tr>
              </tbody>
            </table>
            <div className="etViewArticle-btn d-flex gap-3">
              <div className="etArticle-editbtn">
              <button type="button" class="btn btn-outline-primary">Edit</button>
              </div>
              <div className="etArticle-deletebtn">
              <button type="button" class="btn btn-outline-primary">Delete</button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default EtviewArticle;
