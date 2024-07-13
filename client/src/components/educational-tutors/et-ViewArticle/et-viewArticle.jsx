import React, { useEffect, useState } from "react";
import "./et-viewArticle.css";
import { IoReturnUpBack } from "react-icons/io5";
import { Col, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../../apis/axiosInstance";
import { BASE_URL } from "../../../apis/baseUrl";

function EtviewArticle() {
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
    // const tutorId=JSON.parse(localStorage.getItem("stock_it_tutorId"))||null
    if (id) {
      getArticle();
    }
  }, []);
  const getArticle = async () => {
    try {
      const response = await axiosInstance.post(`getArticleById/${id}`);
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
      <div className="etViewArticle-main">
        <div className="etViewArticle-head d-flex gap-4">
          <div
            className="backToList"
            onClick={() => {
              navigate(-1);
            }}
          >
            <IoReturnUpBack />
          </div>
          {viewArticle?.title}
        </div>
        <Row>
          <Col md={8} className="etViewArticle-video">
            {videoUrl && (
              <iframe
                width="90%"
                height="500px"
                src={videoUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </Col>
          <Col md={4} className="etViewArticle-description">
            <div className="text-success text-center mt-5 fs-3">
              Description
            </div>
            <div className="etViewArticle-box2">
              <table className="mt-4" id="etViewVideoTable">
                <tbody>
                  <tr>
                    <td>Title</td>
                    <td>-</td>
                    <td className="fs-5">{viewArticle?.title}</td>
                  </tr>
                  <tr>
                    <td>SubTitle</td>
                    <td>-</td>
                    <td>{viewArticle?.subTitle}</td>
                  </tr>
                  <tr>
                    <td>Content</td>
                    <td>-</td>
                    <td>{viewArticle?.content}</td>
                  </tr>
                  <tr>
                    <td>Category</td>
                    <td>-</td>
                    <td>{viewArticle?.category}</td>
                  </tr>
                  <tr>
                    <td>Conclusion</td>
                    <td>-</td>
                    <td>{viewArticle?.conclusion}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="etViewArticle-btn d-flex gap-3">
              <div className="etArticle-editbtn">
                <button type="button" class="btn btn-outline-success">
                  Edit
                </button>
              </div>
              <div className="etArticle-deletebtn">
                <button type="button" class="btn btn-outline-success">
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

export default EtviewArticle;
