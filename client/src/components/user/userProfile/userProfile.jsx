import React, { useEffect, useState } from "react";
import axiosInstance from "../../../apis/axiosInstance";
import { BASE_URL } from "../../../apis/baseUrl";
import { UserNavbar } from "../userNavbar/userNavbar";

function UserProfile() {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    const userId = localStorage.getItem("stock_it_userId") || null;
    if (userId) {
        console.log("userid", userId);
      getUserData(userId);
    }
  }, []);
  const getUserData = (id) => {
    axiosInstance
      .post(`/getUserById/${id}`)
      .then((response) => {
        if (response.status == 200) {
          setUserData(response.data.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
        <UserNavbar/>
      <div>
        <div className="w-100">
          <div className="adminViewUserDetail-bg">
            <div className="adminViewUserDetail-header">
              <img src={`${BASE_URL}${userData?.photo}`} alt="profile" />
              <div className="adminViewUserDetail-companyname">
                <h2 style={{textTransform:"capitalize"}}>
                  {userData.firstName}
                  {userData.lastName}
                </h2>
              </div>
            </div>
            <div className="adminViewUserDetail-content">
              <table>
                <tbody>
                <tr>
                  <td>First Name</td>
                  <td>-</td>
                  <td style={{textTransform:"capitalize"}}>{userData?.firstName}</td>
                </tr>
                <tr>
                  <td>Last Name</td>
                  <td>-</td>
                  <td style={{textTransform:"capitalize"}}>{userData?.lastName}</td>
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
                  <td style={{textTransform:"capitalize"}}>{userData?.address} </td>
                </tr>
                <tr>
                  <td>City</td>
                  <td>-</td>
                  <td style={{textTransform:"capitalize"}}>{userData?.city} </td>
                </tr>
                <tr>
                  <td>State</td>
                  <td>-</td>
                  <td style={{textTransform:"capitalize"}}>{userData?.state} </td>
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
                  <td style={{textTransform:"capitalize"}}>{userData.branchName} </td>
                </tr>
                </tbody>
              </table>
            </div>
            <div className="adminViewUserDetail-btn">
            <button className="btn" type="submit" value="submit">
              Edit
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
                  <img src={`${BASE_URL}${userData?.idProof}`} alt="Id Proof" />
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

export default UserProfile;