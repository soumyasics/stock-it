import React, { useEffect, useState } from "react";
import "./adminViewUserDetail.css";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../../apis/axiosInstance";
import img1 from "../../../assets/images/crossbtn.png";
import img2 from "../../../assets/images/idprofile.png";
import { BASE_URL } from "../../../apis/baseUrl";
import toast from "react-hot-toast";

function AdminViewUserDetail() {
  const [userData, setUserData] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axiosInstance
      .post(`/getUserById/${id}`)
      .then((response) => {
        console.log(response);
        setUserData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const redirectBack = () => {
    navigate("/adminViewUsers");
  };
const redirectToUserView=()=>{
  navigate("/adminViewUsers")
}
  const toAccept = () => {
    axiosInstance.post(`/activateUserById/${id}`).then((response) => {
      if (response.status == 200) {
        toast.success("User activation sucessfull");
        redirectToUserView()
      } else {
        toast.error(response.data.msg);
      }
    });
  };
  const toDelete=()=>{
    axiosInstance.post(`/deActivateUserById/${id}`)
    .then((response)=>{
      console.log("res",response);
      if(response.status==200){
        toast.success("User deactivation sucessfully")
        redirectToUserView()
      }else{
        toast.error(response.data.msg)
      }
    });
  }
  return (
    <div>
      <div className="w-100">
        <div className="adminViewUserDetail-bg">
          <div className="adminViewUserDetail-header">
            <img src={`${BASE_URL}${userData?.photo}`} alt="profile" />
            <div className="adminViewUserDetail-companyname">
              <h2>
                {userData.firstName}
                {userData.lastName}
              </h2>
            </div>
          </div>
          <div className="adminViewUserDetail-crossbtn" onClick={redirectBack}>
            <img src={img1} alt="x" style={{ cursor: "pointer" }} />
          </div>
          <div className="adminViewUserDetail-content">
            <table>
              <tr>
                <td>First Name</td>
                <td>-</td>
                <td>{userData?.firstName}</td>
              </tr>
              <tr>
                <td>Last Name</td>
                <td>-</td>
                <td>{userData?.lastName}</td>
              </tr>
              <tr>
                <td>Gender</td>
                <td>-</td>
                <td>{userData?.gender} </td>
              </tr>
              <tr>
                <td>DOB</td>
                <td>-</td>
                <td>{userData?.dob} </td>
              </tr>
              <tr>
                <td>Address</td>
                <td>-</td>
                <td>{userData?.address} </td>
              </tr>
              <tr>
                <td>City</td>
                <td>-</td>
                <td>{userData?.city} </td>
              </tr>
              <tr>
                <td>State</td>
                <td>-</td>
                <td>{userData?.state} </td>
              </tr>
              <tr>
                <td>Pincode</td>
                <td>-</td>
                <td>{userData?.pincode} </td>
              </tr>

              <tr>
                <td>Contact Number</td>
                <td>-</td>
                <td>{userData?.contactNumber} </td>
              </tr>
              <tr>
                <td>Email ID</td>
                <td>-</td>
                <td>{userData?.email} </td>
              </tr>
              <tr>
                <td>Id Proof</td>
                <td>-</td>
                <td>
                  <button
                    className="btn-primary btn"
                    type="button"
                    class="modal-btn"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  >
                    View Id Proof
                  </button>
                </td>
              </tr>
              <tr>
                <td>Demant Account Number</td>
                <td>-</td>
                <td>{userData.dematACNumber} </td>
              </tr>
              <tr>
                <td>Bank Name</td>
                <td>-</td>
                <td>{userData.bankName} </td>
              </tr>
              <tr>
                <td>IFSC Code</td>
                <td>-</td>
                <td>{userData.ifscCode} </td>
              </tr>
              <tr>
                <td>Branch Name</td>
                <td>-</td>
                <td>{userData.branchName} </td>
              </tr>
            </table>
          </div>
          <div className="adminViewUserDetail-btn">
            <button class="btn" type="submit" value="submit" onClick={toAccept}>
              Active
            </button>
            <button class="btn" type="submit" value="submit" onClick={toDelete} >
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
}

export default AdminViewUserDetail;
