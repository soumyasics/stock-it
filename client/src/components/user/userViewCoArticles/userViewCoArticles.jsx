import React, { useEffect, useState } from "react";
import axiosInstance from "../../../apis/axiosInstance";
import { BASE_URL } from "../../../apis/baseUrl";
import { useNavigate } from "react-router-dom";
import { UserNavbar } from "../userNavbar/userNavbar";
import { Footer2 } from "../../common/footer2/footer2";

function UserViewCoArticles() {
  const [viewArticle, setViewArticle] = useState([]);
  const navigate = useNavigate();
  const toViewArticleById = (id) => {
    navigate(`/companyViewArticles/${id}`);
  };
  useEffect(() => {
    axiosInstance.get("co-getAllArticles").then((response) => {
      if (response.status === 200) {
        setViewArticle(response.data.data);
      }
    });
  }, []);
  return (
    <div>
      <UserNavbar />
      <div style={{ backgroundColor: "#1F2937", minHeight: "600px" }}>
        <div className="viewcomapany-head-box">
          <h4>Company Articles </h4>
        </div>
        <div className="d-flex flex-wrap gap-5 p-5">
          {viewArticle.map((e) => {
            const thumbnailUrl = e?.thumbnail?.filename || null;
            let path =
              "https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg";
            if (thumbnailUrl) {
              path = `${BASE_URL}${thumbnailUrl}`;
            }
            return (
              <div className="companyRequest-details2 col-2">
                <div className="companyRequest-innerbox1"></div>
                <div className="viewArticleList-thumb">
                  <img src={path} alt="Thumbnail" />
                </div>
                <div className="userviewArticleList-title mt-5 text-light text-capitalize fw-bolder text-center fs-2">
                  <h4>
                    {e.title?.length > 14
                      ? e.title?.substring(0, 14) + ".."
                      : e.title}{" "}
                  </h4>
                </div>
                <p
                  className="userviewArticleList-btn text-primary text-decoration-underline"
                  onClick={() => {
                    toViewArticleById(e._id);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  View more
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <Footer2 />
    </div>
  );
}

export default UserViewCoArticles;
