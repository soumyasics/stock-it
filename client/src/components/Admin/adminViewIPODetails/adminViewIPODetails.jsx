import React, { useEffect, useState } from "react";
import "../commonAdminStyles/detailsPageBasic.css";
import img2 from "../../../assets/images/crossbtn.png";
import axiosInstance from "../../../apis/axiosInstance";
import { Link, useParams } from "react-router-dom";
import { BASE_URL } from "../../../apis/baseUrl";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import AdminNavbar from "../../common/adminNavbar";
import { TickerBox } from "./tickerBox";
export const AdminViewIPODetails = () => {
  const [show, setShow] = useState(false);
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
      const res = await axiosInstance.post(`getIPOById/${id}`);
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

  const toAccept = () => {
    axiosInstance
      .post("approveIPOById/" + id)
      .then((response) => {
        console.log(response);
        if (response.status == 200) {
          toast.success(response.data.msg);
          getIPODetailsById();
          // navigate("/admin");
        } else {
          toast.error(response.data.msg);
          // navigate("/admin");
        }
      })
      .catch((err) => {
        console.log("Error on approve ipo by id", err);
      });
  };
  const toDelete = (e) => {
    e.preventDefault();
    axiosInstance
      .post(`rejectIPOById/${id}`)
      .then((res) => {
        if (res.status == 200) {
          toast.success(res.data.msg);
          console.log("respon rej", res)
          getIPODetailsById();
        } else {
          toast.error(res.data.msg);
        }
      })
      .catch((err) => {
        console.log("Error on reject ipo by id", err);
      });
  };

  const redirectBack = () => {
    navigate("/admin");
  };

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };

  return (
    <>
      <TickerBox
        companyId={ipoData?.companyId?._id}
        handleClose={handleClose}
        show={show}
        toAccept={toAccept}
      />
      <AdminNavbar />
      <div className="w-100">
        <div className="requestpage-bg">
          <div className="requestpage-header">
            <img
              src={`${BASE_URL}${ipoData?.companyId?.logo?.filename}`}
              alt="profile"
            />
            <div className="requestpage-companyname">
              <h2>{ipoData?.companyId?.name}</h2>
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
              <h6 style={{ color: "white" }}>IPO Details</h6>
              <tr>
                <td>Total Shares</td>
                <td>-</td>
                <td>{ipoData?.totalShares}</td>
              </tr>
              <tr>
                <td>Cost per share</td>
                <td>-</td>
                <td>{ipoData?.costPerShare} </td>
              </tr>
              <tr>
                <td>Market capitalization</td>
                <td>-</td>
                <td>{ipoData?.capitation} </td>
              </tr>
              <br />
              <br />
              <h6 style={{ color: "white" }}>Company Details</h6>
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
            </table>
          </div>
          {ipoData?.adminApproved === "approved" ? (
            <div className="mt-5">
              <p className="requestpage-paragraph text-success">
                IPO has been approved
              </p>{" "}
            </div>
          ) : ipoData?.adminApproved === "rejected" ? (
            <div className="mt-5">
              <p className="requestpage-paragraph text-danger">
                IPO has been rejected
              </p>{" "}
            </div>
          ) : (
            <div className="requestpage-btn mt-5">
              <button
                class="btn"
                type="submit"
                value="submit"
                onClick={handleShow}
              >
                Accept IPO
              </button>
              <button
                class="btn"
                type="submit"
                value="submit"
                onClick={toDelete}
              >
                Reject IPO
              </button>
            </div>
          )}

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
