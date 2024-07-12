import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../../apis/axiosInstance";
import img1 from "../../../assets/images/crossbtn.png";
import img2 from "../../../assets/images/idprofile.png";
import { BASE_URL } from "../../../apis/baseUrl";
import toast from "react-hot-toast";

export const AdminViewETDetails = () => {
  const [userData, setUserData] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axiosInstance
      .post(`/getTutorById/${id}`)
      .then((response) => {
        console.log(response);
        if (response.status == 200) {
          setUserData(response.data.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const redirectBack = () => {
    navigate("/adminViewAllETs");
  };
  const redirectToUserView = () => {
    navigate(-1);
  };
  const toAccept = () => {
    axiosInstance.post(`/activateTutorById/${id}`).then((response) => {
      if (response.status == 200) {
        toast.success("Tutor activation sucessfull");
        redirectToUserView();
      } else {
        toast.error(response.data.msg);
      }
    });
  };
  const toDelete = (e) => {
    axiosInstance.post(`/deactivateTutorById/${id}`).then((response) => {
      console.log("res", response);
      if (response.status == 200) {
        toast.success("Tutor deactivated sucessfully");
        redirectToUserView();
      } else {
        toast.error(response.data.msg);
      }
    });
  };
  return (
    <div>
      <div className="w-100">
        <div className="adminViewUserDetail-bg">
          <div className="adminViewUserDetail-header">
            <img src={`${BASE_URL}${userData?.photo?.filename}`} alt="profile" />
            <div className="adminViewUserDetail-companyname">
              <h2>{userData.fullName}</h2>
            </div>
          </div>
          <div className="adminViewUserDetail-crossbtn" onClick={redirectBack}>
            <img src={img1} alt="x" style={{ cursor: "pointer" }} />
          </div>
          <div className="adminViewUserDetail-content">
            <table>
              <tr>
                <td>Gender</td>
                <td>-</td>
                <td>{userData.gender} </td>
              </tr>
              <tr>
                <td>Qualification</td>
                <td>-</td>
                <td>{userData.qualification} </td>
              </tr>
              <tr>
                <td>Specification</td>
                <td>-</td>
                <td>{userData.specification} </td>
              </tr>

              <tr>
                <td>Email ID</td>
                <td>-</td>
                <td>{userData.email} </td>
              </tr>
            </table>
          </div>
          <div className="adminViewUserDetail-btn">
            <button class="btn" type="submit" value="submit" onClick={toAccept}>
              Active
            </button>
            <button class="btn" type="submit" value="submit" onClick={toDelete}>
              Inactive
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
                    Id Proof
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body modal-image">
                  <img src={`${BASE_URL}${userData?.idProof}`} alt="Id Proof" />
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
    </div>
  );
};
