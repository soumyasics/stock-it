import React, { useEffect, useState } from "react";
import "./companyViewArticle.css";
import { Row, Col } from "react-bootstrap";
import { IoReturnUpBack } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../../apis/axiosInstance";
import { BASE_URL } from "../../../apis/baseUrl";

function CompanyViewArticle() {
  const navigate = useNavigate();
  const [viewArticle, setViewArticle] = useState(null);
  const { id } = useParams();
  const [videoUrl, setVideoUrl] = useState(null);
  useEffect(() => {
    if (viewArticle) {
      let tutorialVideoLink = viewArticle?.video?.filename || null;
      if (tutorialVideoLink) {
        let URL = `${BASE_URL}${tutorialVideoLink}`;
        // validate if it's a valid video URL
        if (isValidVideoURL(URL)) {
          setVideoUrl(URL);
        } else {
          console.log("Video url might be wrong.");
          setVideoUrl(null);
        }
      } else {
        console.log("Video url might be wrong.");
        setVideoUrl(null);
      }
    }
  }, [viewArticle]);

  function isValidVideoURL(url) {
    const videoExtensions = [
      ".mp4",
      ".avi",
      ".mov",
      ".wmv",
      ".mkv",
      ".flv",
      ".webm",
      ".ogg",
      ".m4v",
    ];
    let fileExtension = url.substring(url.lastIndexOf(".")).toLowerCase();
    return videoExtensions.includes(fileExtension);
  }

  useEffect(() => {
    if (id) {
      getArticle();
    }
  }, []);
  const getArticle = async () => {
    try {
      const response = await axiosInstance.post(`co-getArticleById/${id}`);
      if (response.status === 200) {
        setViewArticle(response.data.data);
        console.log("data", response.data.data);
      }
    } catch (error) {
      console.error("Network Issue");
    }
  };
  return (
    <div>
      <div className="companyViewArticle-main">
        <div className="companyViewArticle-head d-flex gap-4">
          <div
            className="backToList"
            onClick={() => {
              navigate(-1);
            }}
          >
            <IoReturnUpBack />
          </div>
        </div>
        <div className="d-flex text-light align-items-center flex-column justify-content-center">
          <h1 className="text-center text-capitalize ">{viewArticle?.title}</h1>
          <h6>{viewArticle?.category}</h6>
        </div>
        <Row>
          <Col md={12} className="companyViewArticle-video">
            {videoUrl && (
              <iframe
                width="100%"
                height="500px"
                src={videoUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </Col>
        </Row>
        <Row>
          <Col md={12} className="companyViewArticle-description ">
            <div className="text-light text-center d-flex justify-content-center mt-5 ">
              <br />
              <span className="text-capitalize">{viewArticle?.subTitle}</span>
            </div>
            <div className="companyViewArticle-box2 text-light text-justify">
              <span>{viewArticle?.content}</span>
              <br />
              <br />
              <span>{viewArticle?.conclusion}</span>
            </div>

            <div className="companyViewArticle-btn d-flex gap-3">
              {/* <div className="etArticle-editbtn">
                <button type="button" className="btn btn-outline-success">
                  Edit
                </button>
              </div> */}
              <div className="etArticle-deletebtn">
                <button
                  type="button"
                  className="mx-auto btn btn-outline-danger"
                >
                  Delete
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default CompanyViewArticle;
