import React, { useEffect, useState } from "react";
import "./companyViewArticle.css";
import { Row, Col } from "react-bootstrap";
import { IoReturnUpBack } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../../apis/axiosInstance";
import { BASE_URL } from "../../../apis/baseUrl";
import { toast } from "react-hot-toast";
import { CompanyEditArticle } from "../companyAddArticles/companyEditArticle";

function CompanyViewArticle() {
  const navigate = useNavigate();
  const [viewArticle, setViewArticle] = useState({});
  const [pureArticle, setPureArticle] = useState({
    title: "",
    subTitle: "",
    content: "",
    category: "",
    thumbnail: null,
    video: null,
    conclusion: "",
  });
  const { id, userType } = useParams();
  const [videoUrl, setVideoUrl] = useState(null);
  const [editMode, setEditMode] = useState(false);

  const editModeOff = () => {
    getArticle();
    setEditMode(false);
  };
  useEffect(() => {
    if (viewArticle) {
      setPureArticle({
        title: viewArticle?.title,
        subTitle: viewArticle?.subTitle,
        content: viewArticle?.content,
        category: viewArticle?.category,
        thumbnail: viewArticle?.thumbnail,
        video: viewArticle?.video,
        conclusion: viewArticle?.conclusion,
      });
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
      console.log("repo55", response);
      if (response.status === 200) {
        setViewArticle(response.data.data);
        console.log("data", response.data.data);
      }
    } catch (error) {
      console.error("Network Issue");
    }
  };
  const deleteArticle = async () => {
    try {
      const res = await axiosInstance.delete(`co-deleteArticleById/${id}`);
      if (res.status === 200) {
        navigate(-1);
        toast.error("Video article deleted successfully.");
      }
    } catch (error) {
      console.error("Network Issue");
      toast.error("Network issue");
    }
  };
  return (
    <div>
      {editMode ? (
        <CompanyEditArticle
          articleData={pureArticle}
          editModeOff={editModeOff}
          articleId={id}
        />
      ) : (
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
            <h2 className="text-center text-capitalize ">
              {viewArticle?.title}
            </h2>
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
                <span className="text-capitalize fs-4 mb-4">
                  {viewArticle?.subTitle}
                </span>
              </div>
              <div className="companyViewArticle-box2 text-light text-justify">
                <span>{viewArticle?.content}</span>
                <br />
                <br />
                <span>{viewArticle?.conclusion}</span>
              </div>

              <div className="companyViewArticle-btn d-flex gap-3">
                {userType === "company" && (
                  <>
                    <div className="etArticle-deletebtn">
                      <button
                        type="button"
                        onClick={() => {
                          setEditMode(true);
                        }}
                        className="mx-auto btn btn-outline-success"
                      >
                        Edit
                      </button>
                    </div>
                    <div className="etArticle-deletebtn">
                      <button
                        type="button"
                        onClick={deleteArticle}
                        className="mx-auto btn btn-outline-danger"
                      >
                        Delete
                      </button>
                    </div>
                  </>
                )}
              </div>
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
}

export default CompanyViewArticle;
