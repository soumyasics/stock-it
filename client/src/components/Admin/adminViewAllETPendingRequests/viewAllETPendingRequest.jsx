import React, { useEffect, useState } from "react";
import axiosInstance from "../../../apis/axiosInstance";
import { BASE_URL } from "../../../apis/baseUrl";
import { useNavigate } from "react-router-dom";

export const ETPendingRequest = () => {
  const [state, setState] = useState([]);

  const [pageNumber, setPageNumber] = useState(0);
  const userPerPage = 15;
  const pageVisited = pageNumber * userPerPage;

  const navigate = useNavigate();
  const navigateToPeningETRequest = (id) => {
    navigate(`/adminETRequestDetails/${id}`);
  };

  useEffect(() => {
    axiosInstance
      .get("/getAllPendingTutors")
      .then((res) => {
        console.log(res);
        let myData = res.data?.data || [];
        myData.reverse();
        setState(myData);
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
              src={`${BASE_URL}${e?.photo?.filename}`}
              alt="test   "
            />
            <p className="companyRequest-subheading2 ms-3">{e?.fullName}</p>
          </div>
          <table className="companyRequest-table">
            <tr>
              <td>Qualification</td>
              <td>:</td>
              <td className="companyRequest-data"> {e.qualification}</td>
            </tr>
            <tr>
              <td>Experience</td>
              <td>:</td>
              <td className="companyRequest-data"> {e.experience}</td>
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
              navigateToPeningETRequest(e._id);
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
        <p>Educational Tutors Requests</p>
      </div>
      {
        <div
          style={{ height: "500px", overflow: "auto" }}
          className="d-flex flex-wrap justify-content-start px-3 pe-5 gap-5 mt-3 ms-3"
        >
          {displayUsers}
        </div>
      }
    </div>
  );
};
