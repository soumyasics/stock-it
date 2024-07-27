import React, { useEffect, useState } from "react";
import "./et-viewArticleList.css";
import { useNavigate } from "react-router-dom";
import { IoReturnUpBack } from "react-icons/io5";
import axiosInstance from "../../../apis/axiosInstance";
import { BASE_URL } from "../../../apis/baseUrl";

export const EtviewArticleList = () => {
  const navigate = useNavigate();
  const toViewArticleById=(id)=>{
    navigate(`/viewEtArticle/${id}/et`)
  }

  const [viewArticle, setViewArticle] = useState([]);
  // const [tutorId,setTutorId]=useState("")

  useEffect(() => {
    const tutorId =
      JSON.parse(localStorage.getItem("stock_it_tutorId")) || null;
    if (tutorId) {
      console.log("tutorId", tutorId);
      getArticlesByTutorId(tutorId);
    }
  }, []);

  const getArticlesByTutorId = (id) => {
    try {
      axiosInstance.get(`getArticleByTutorId/${id}`).then((response) => {
        if (response.status === 200) {
          setViewArticle(response.data.data);
        }
      });
    } catch (error) {
      console.error("network issue");
    }
  };

  return (
    <div>
      <div className="viewArticleList-body">
        <div className="viewcomapany-head-box d-flex align-items-center justify-content-between px-5">
          <div
            onClick={() => {
              navigate("/etdashboard");
            }}
            style={{ cursor: "pointer", color: "white", fontSize: "20px" }}
          >
            <IoReturnUpBack />
          </div>
          <h4>Articles List</h4>
          <div></div>
        </div>
        <div
          className=" text-center p-5"
          style={{ height: "618px", overflowY: "scroll" }}
        >
          <div className="row gap-5">
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
                  <div className="viewArticleList-title mt-5 text-light text-capitalize fw-bolder fs-2">
                  <h4>{e.title?.length > 14 ? e.title?.substring(0, 14) +".." : e.title} </h4>
                  </div>
                  <p
                    className="viewArticleList-btn text-primary text-decoration-underline"
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
