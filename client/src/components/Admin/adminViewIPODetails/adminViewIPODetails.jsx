import React, { useEffect, useState } from "react";
import "../commonAdminStyles/detailsPageBasic.css";
import img2 from "../../../assets/images/crossbtn.png";
import axiosInstance from "../../../apis/axiosInstance";
import { Link, useParams } from "react-router-dom";
import { BASE_URL } from "../../../apis/baseUrl";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import AdminNavbar from "../../common/adminNavbar";
export const AdminViewIPODetails = () => {
  const [ipoData, setIPOData] = useState({
    totalShares: "",
    costPerShare: "",
    companyId: {
      name: "",
      logo: {
        filename: "",
      },
      _id: "",
      license: {
        filename: "",
      },
      companyType: "",
      year: "",
      regNo: "",
    },
    capitation: "",
    adminApproved: false,
    isActive: false,
  });
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
        setIPOData(res.data.data);
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

  console.log("ipo data", ipoData);
  const redirectBack = () => {
    navigate("/admin");
  };
  return (
    <>
      <AdminNavbar />
      <div className="w-100">
        <div className="requestpage-bg">
          <div className="requestpage-header">
            <img src={`${BASE_URL}${ipoData?.logo?.filename}`} alt="profile" />
            <div className="requestpage-companyname">
              <h2>{ipoData?.compnayId?.name}</h2>
            </div>
          </div>
          <div className="requestpage-crossbtn" onClick={redirectBack}>
            <img src={img2} alt="x" style={{ cursor: "pointer" }} />
          </div>
          <div className="requestpage-paragraph">
            <p>
              {ipoData.name}-{ipoData.description}
            </p>
          </div>
          <div className="requestpage-content">
            <table>
              <tr>
                <td>Company Name</td>
                <td>-</td>
                <td>{ipoData?.companyId?.name}</td>
              </tr>
              <tr>
                <td>Company Type</td>
                <td>-</td>
                <td>{ipoData?.companyId?.companyType} </td>
              </tr>
              <tr>
                <td>City</td>
                <td>-</td>
                <td>{ipoData?.companyId?.district} </td>
              </tr>
              <tr>
                <td>State</td>
                <td>-</td>
                <td>{ipoData?.companyId?.state} </td>
              </tr>
              <tr>
                <td>Pincode</td>
                <td>-</td>
                <td>{ipoData?.companyId?.pincode}</td>
              </tr>
              <tr>
                <td>Contact Number</td>
                <td>-</td>
                <td>{ipoData?.companyId?.contact}</td>
              </tr>
              <tr>
                <td>Email Id</td>
                <td>-</td>
                <td>{ipoData?.companyId?.email}</td>
              </tr>
              <tr>
                <td>Registration Number</td>
                <td>-</td>
                <td>{ipoData?.companyId?.regNo} </td>
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
            
            </table>
          </div>
          <div className="requestpage-btn">
            <button class="btn" type="submit" value="submit" onClick={toAccept}>
              Accept IPO
            </button>
            <button class="btn" type="submit" value="submit" onClick={toDelete}>
              Reject IPO
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
                    src={`${BASE_URL}${ipoData?.license?.filename}`}
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