import React, { useEffect, useState } from "react";
import "./requestPage.css";
import img2 from "../../assets/images/crossbtn.png";
import axiosInstance from "../../apis/axiosInstance";
import { Link, useParams } from "react-router-dom";
import { BASE_URL } from "../../apis/baseUrl";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import AdminNavbar from "../common/adminNavbar";
export const AdminViewIPODetails = () => {
  const [ipoData, setIPOData] = useState({ license: { filename: "" } });
  console.log("state", state);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (!id) {
      return;
    }

    getIPODetailsById();
  }, [id]);
  const getIPODetailsById = async (req, res) => {
    try {
      const res = await axiosInstance.post(`/getIPOById/${id}`);
      const data = res?.data?.data || null;
      if (data) {
        setState(res.data.data);
      } else {
        console.log("ipo response", res);
      }
    } catch (error) {
      console.log("error on get ipo details", error);
    }
  };

  const toAccept = (e) => {
    e.preventDefault();
    axiosInstance.post("/acceptCompanyById/" + id).then((response) => {
      console.log(response);
      if (response.data.status == 200) {
        toast.success(response.data.msg);
        navigate("/AdminDashboard");
      } else {
        toast.error(response.data.msg);
        navigate("/AdminDashboard");
      }
    });
  };
  const toDelete = (e) => {
    e.preventDefault();
    axiosInstance.post(`deleteCompanyById/${id}`).then((res) => {
      if (res.data.status == 200) {
        toast.success(res.data.msg);
        navigate("/AdminDashboard");
      } else {
        toast.error(res.data.msg);
        navigate("/AdminDashboard");
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
            <img src={`${BASE_URL}${state?.logo?.filename}`} alt="profile" />
            <div className="requestpage-companyname">
              <h2>{state.name}</h2>
            </div>
          </div>
          <div className="requestpage-crossbtn" onClick={redirectBack}>
            <img src={img2} alt="x" style={{ cursor: "pointer" }} />
          </div>
          <div className="requestpage-paragraph">
            <p>
              {state.name}-{state.description}
            </p>
          </div>
          <div className="requestpage-content">
            <table>
              <tr>
                <td>Name</td>
                <td>-</td>
                <td>{state.name}</td>
              </tr>
              <tr>
                <td>Company Type</td>
                <td>-</td>
                <td>{state.companyType} </td>
              </tr>
              <tr>
                <td>City</td>
                <td>-</td>
                <td>{state.district} </td>
              </tr>
              <tr>
                <td>State</td>
                <td>-</td>
                <td>{state.state} </td>
              </tr>
              <tr>
                <td>Pincode</td>
                <td>-</td>
                <td>{state.pincode}</td>
              </tr>
              <tr>
                <td>Contact Number</td>
                <td>-</td>
                <td>{state.contact}</td>
              </tr>
              <tr>
                <td>Email Id</td>
                <td>-</td>
                <td>{state.email}</td>
              </tr>
              <tr>
                <td>Registration Number</td>
                <td>-</td>
                <td>{state.regNo} </td>
              </tr>
              <tr>
                <td>Company License</td>
                <td>-</td>
                <td>
                  <button
                    className="btn-primary btn"
                    type="button"
                    class="modal-btn"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  >
                    View License
                  </button>
                </td>
              </tr>
              <tr>
                <td>Year Founded</td>
                <td>-</td>
                <td>{state.year}</td>
              </tr>
              <tr>
                <td>Company Website</td>
                <td>-</td>
                <td>{state.website}</td>
              </tr>
            </table>
          </div>
          <div className="requestpage-btn">
            <button class="btn" type="submit" value="submit" onClick={toAccept}>
              Accept
            </button>
            <button class="btn" type="submit" value="submit" onClick={toDelete}>
              Reject
            </button>
          </div>

          {/* Modal page */}
          <div
            class="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-xl">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="staticBackdropLabel">
                    Company License
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body modal-image">
                  <img
                    src={`${BASE_URL}${state?.license?.filename}`}
                    alt="profile"
                  />
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
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
