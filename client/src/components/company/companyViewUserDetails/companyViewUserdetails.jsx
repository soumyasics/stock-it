import React, { useState } from "react";
import img1 from "../../../assets/images/crossbtn.png"
import { BASE_URL } from "../../../apis/baseUrl";
import { useNavigate } from "react-router-dom";

function CompanyViewUserdetails() {
    const[userData,setUserData]=useState({})
    const navigate=useNavigate()
  return (
    <div>
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
            <div
              className="adminViewUserDetail-crossbtn"
              onClick={()=>{
                navigate(-1)
              }}
            >
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
                      className="modal-btn btn-primary btn"
                      type="button"
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
                      Id Proof
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
                      src={`${BASE_URL}${userData?.idProof}`}
                      alt="Id Proof"
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
      </div>
    </div>
  );
}

export default CompanyViewUserdetails;
