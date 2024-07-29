import React, { useEffect, useState } from "react";
// import "./requestPage.css";
import img2 from "../../../assets/images/crossbtn.png";
import axiosInstance from "../../../apis/axiosInstance";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../../apis/baseUrl";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import AdminNavbar from "../../common/adminNavbar";
export const AdminETRequestDetails = () => {
  const [state, setState] = useState({ license: { filename: "" } });
  console.log("state", state);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getETById();
  }, []);

  const getETById = () => {
    axiosInstance
      .post(`/getTutorById/${id}`)
      .then((response) => {
        setState(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const toAccept = (e) => {
    e.preventDefault();
    axiosInstance.post("/adminApproveTutorById/" + id).then((response) => {
      console.log(response);
      if (response.status == 200) {
        toast.success(response.data.msg);
        navigate("/admin");
      } else {
        toast.error(response.data.msg);
        navigate("/admin");
      }
    });
  };
  const toDelete = (e) => {
    e.preventDefault();
    axiosInstance.post(`adminRejectTutorById/${id}`).then((res) => {
      if (res.status == 200) {
        toast.success(res.data.msg);
        navigate("/admin");
      } else {
        toast.error(res.data.msg);
        navigate("/admin");
      }
    });
  };

  const redirectBack = () => {
    navigate("/admin");
  };
  return (
    <>
      <AdminNavbar />
      <div className="w-100">
        <div className="requestpage-bg">
          <div className="requestpage-header">
            <img src={`${BASE_URL}${state?.photo?.filename}`} alt="profile" />
            <div className="requestpage-companyname">
              <h2>{state.fullName}</h2>
            </div>
          </div>
          <div className="requestpage-crossbtn" onClick={redirectBack}>
            <img src={img2} alt="x" style={{ cursor: "pointer" }} />
          </div>
          <div className="requestpage-paragraph"></div>
          <div className="requestpage-content">
            <table>
              <tr>
                <td>Email Id</td>
                <td>-</td>
                <td>{state?.email}</td>
              </tr>
              <tr>
                <td>Gender</td>
                <td>-</td>
                <td>{state?.gender} </td>
              </tr>
              <tr>
                <td>Experience</td>
                <td>-</td>
                <td>{state?.experience} </td>
              </tr>
              <tr>
                <td>Qualification</td>
                <td>-</td>
                <td>{state?.qualification} </td>
              </tr>
              <tr>
                <td>Specefication</td>
                <td>-</td>
                <td>{state?.specification} </td>
              </tr>

              <tr>
                <td>Contact Number</td>
                <td>-</td>
                <td>{state?.contactNumber}</td>
              </tr>
              <tr>
                <td>Rating</td>
                <td>-</td>
                <td>{state?.rating || 0}</td>
              </tr>
            </table>
          </div>
          <div className="requestpage-btn">
            <button
              className="btn"
              type="submit"
              value="submit"
              onClick={toAccept}
            >
              Accept
            </button>
            <button
              className="btn"
              type="submit"
              value="submit"
              onClick={toDelete}
            >
              Reject
            </button>
          </div>

          {/* Modal page */}
          <div
            className="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-xl">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="staticBackdropLabel">
                    Company License
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body modal-image">
                  <img
                    src={`${BASE_URL}${state?.license?.filename}`}
                    alt="profile"
                  />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
