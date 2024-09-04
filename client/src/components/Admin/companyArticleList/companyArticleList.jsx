import React, { useEffect, useState } from "react";
import axiosInstance from "../../../apis/axiosInstance";
import { BASE_URL } from "../../../apis/baseUrl";
import { useNavigate } from "react-router-dom";

export const AdminViewComapaniesArticles = () => {
  const navigate = useNavigate();
  const toViewArticleById = (id) => {
    console.log("idd5523", id)
    navigate(`/companyViewArticles/${id}/company`);
  };
  const [viewArticle, setViewArticle] = useState([]);
  useEffect(() => {
    getArticleByCoId();
  }, [])
  const getArticleByCoId = (id) => {
    try {
      axiosInstance.get(`co-getAllArticles`).then((response) => {
        if (response.status === 200) {
          let myData = response.data?.data || [];
          myData.reverse();
          setViewArticle(myData);
        }
      });
    } catch (error) {
      console.log("network issue");
    }
  };
  return (
    <div>
      <div className="viewCompany-body">
        <div className="viewcomapany-head-box">
          <h4>Company Articles </h4>
        </div>
        <div className="p-5" style={{ height: "618px", overflowY: "scroll" }}>
          <div className="d-flex flex-wrap gap-5">
            {viewArticle.map((e) => {

              console.log("eee", e)
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
                    <h4>{e.title?.length > 14 ? e.title?.substring(0, 14) +".." : e.title} </h4>
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
      </div>
    </div>
  );
}
