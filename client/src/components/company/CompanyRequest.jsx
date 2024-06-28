import React, { useEffect, useState } from "react";
import "./CompanyRequest.css";
import axiosInstance from "../../apis/axiosInstance";
import { BASE_URL } from "../../apis/baseUrl";
import ReactPaginate from "react-paginate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function CompanyRequest() {
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
      .post("/viewCompanies")
      .then((res) => {
        console.log(res);
        setState(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const displayUsers = state
    .slice(pageVisited, pageVisited + userPerPage)
    .map((e) => {
      return (
        <div>
          <div className="companyRequest-details ">
            <div className="companyRequest-innerbox1">
              <img
                className="companyRequest-logo img-fluid"
                src={`${BASE_URL}${e?.logo?.filename}`}
                alt="test   "
              />
              <p className="companyRequest-subheading">subway</p>
            </div>
            <table className="companyRequest-table">
              <tr>
                <td>Name</td>
                <td>:</td>
                <td className="companyRequest-data">{e.name}</td>
              </tr>
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
              className="companyRewquest-viewmore"
              onClick={() => {
                navigateToPeningCompanyRequest(e._id);
              }}
              style={{ cursor: "pointer" }}
            >
              View more
            </p>
          </div>
        </div>
      );
    });

  const pageCount = Math.ceil(state.length / userPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const serchbtn = () => {};
  return (
    <div>
      <div className="companyRequest-body">
        <div className="companyRequest-heading">
          <p>Company Requests</p>
        </div>
        <div className="comapnyRequest-first-box">
          <div className="companyRequesest-second-box" role="group">
            <div className="companyrequest-enterpage">
              <p className="companyRequest-entries">Entries per page</p>
            </div>
            <select
              class="form-select form-select-sm companyRequet-dropdown "
              aria-label="Small select example"
            >
              <option selected> 15</option>
              <option value="1">16</option>
              <option value="2">17</option>
              <option value="3">18</option>
            </select>
          </div>
          <div className="comapanyRequest-search-box">
            <input
              type="search"
              className="companyRequest-serchbox"
              placeholder="Companies"
              onChange={serchbtn}
            />
          </div>
        </div>
        {
          <div className="container-fluid">
            <div className="row row-cols-5">{displayUsers}</div>
          </div>
        }

        <div className="comapanyRequest-btngroup">
          <div className="companyRequest-inner-btngroup">
            <ReactPaginate
              previousLabel={
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  style={{ color: "white" }}
                />
              }
              nextLabel={
                <FontAwesomeIcon
                  icon={faArrowRight}
                  style={{ color: "white" }}
                />
              }
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"paginationBtns"}
              previousLinkClassName={"previousbtn"}
              nextLinkClassName={"nextbtn"}
              disabledClassName={"paginationDisabled"}
              activeClassName={"paginationActive"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyRequest;