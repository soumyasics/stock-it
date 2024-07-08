import React, { useEffect, useState } from "react";
import "./CompanyRequest.css";
import axiosInstance from "../../apis/axiosInstance";
import { BASE_URL } from "../../apis/baseUrl";
import ReactPaginate from "react-paginate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "../common/adminNavbar";
import { Footer2 } from "../common/footer2/footer2";

export const 
CompanyPendingRequest = () => {
  const [state, setState] = useState([]);

  const [pageNumber, setPageNumber] = useState(0);
  const userPerPage = 15;
  const pageVisited = pageNumber * userPerPage;

  const navigate = useNavigate();
  const navigateToPeningCompanyRequest = (id) => {
    console.log("check", id);
    navigate(`/requestpage/${id}`);
  };

  useEffect(() => {
    axiosInstance
      .post("/viewPendingCompanies")
      .then((res) => {
        if (res.data.status === 200) {
          setState(res.data.data);
        }
        console.log("pending co.",res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const displayUsers = state
    .slice(pageVisited, pageVisited + userPerPage)
    .map((e, i) => {
      return (
        <div className="companyRequest-details2" key={i}>
          <div className="companyRequest-innerbox1">
            <img
              className="companyRequest-logo img-fluid"
              src={`${BASE_URL}${e?.logo?.filename}`}
              alt="test   "
            />
            <p className="companyRequest-subheading2 ms-3">{e?.name}</p>
          </div>
          <table className="companyRequest-table">
            <tr>
              <td>Company Type</td>
              <td>:</td>
              <td className="companyRequest-data"> {e.companyType}</td>
            </tr>
            <tr>
              <td>Contact Number</td>
              <td>:</td>
              <td className="companyRequest-data"> {e.contact}</td>
            </tr>
            <tr>
              <td>Email Id</td>
              <td>:</td>
              <td className="companyRequest-data">{e.email}</td>
            </tr>
          </table>
          <p
            className="companyRewquest-viewmore2 mt-3"
            onClick={() => {
              navigateToPeningCompanyRequest(e._id);
            }}
            style={{ cursor: "pointer" }}
          >
            View more
          </p>
        </div>
      );
    });

  return (
    <div className="companyRequest-body">
      <div className="companyRequest-heading">
        <p>Company Requests</p>
      </div>
      {
        <div
          style={{ height: "500px", overflow: "auto" }}
          className="d-flex flex-wrap justify-content-between px-3 pe-5 gap-5 mt-3 ms-3"
        >
          {displayUsers}
        </div>
      }
    </div>
  );
};
