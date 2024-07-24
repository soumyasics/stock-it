import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../../apis/baseUrl";
import axiosInstance from "../../../apis/axiosInstance";
import EtEditModal from "../etEditProfile/etEditProfile";

function EtProfile() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  const editProfile = () => {
    openModal();
  };
  const [etData, setEtData] = useState({});
  useEffect(() => {
    const tutorId =
      JSON.parse(localStorage.getItem("stock_it_tutorId")) || null;
    if (tutorId) {
      console.log("tutorId", tutorId);
      getEtData(tutorId);
    }
  }, []);
  const getEtData = async (id) => {
    const response = await axiosInstance.post(`/getTutorById/${id}`);
    try {
      if (response.status == 200) {
        setEtData(response.data.data);
      }
    } catch (error) {
      console.log("Fail on getting tutor data");
    }
  };

  return (
    <div>
      <div className="" style={{marginLeft:"20%",marginTop:"5%"}}>
        <div className="adminViewUserDetail-bg" style={{height:"60vh"}}>
          <div className="adminViewUserDetail-header">
            <img src={`${BASE_URL}${etData?.photo?.filename}`} alt="profile" />
            <div className="adminViewUserDetail-companyname">
              <h2 style={{ textTransform: "capitalize" }}>{etData.fullName}</h2>
            </div>
          </div>
          <div className="adminViewUserDetail-content">
            <table>
              <tbody>
                <tr>
                  <td>Full Name</td>
                  <td>-</td>
                  <td style={{ textTransform: "capitalize" }}>
                    {etData?.fullName}
                  </td>
                </tr>

                <tr>
                  <td>Gender</td>
                  <td>-</td>
                  <td>{etData?.gender} </td>
                </tr>

                <tr>
                  <td>Qualifiaction</td>
                  <td>-</td>
                  <td style={{ textTransform: "capitalize" }}>
                    {etData?.qualification}{" "}
                  </td>
                </tr>
                <tr>
                  <td>Specification</td>
                  <td>-</td>
                  <td style={{ textTransform: "capitalize" }}>
                    {etData?.specification}{" "}
                  </td>
                </tr>
                <tr>
                  <td>Experience</td>
                  <td>-</td>
                  <td style={{ textTransform: "capitalize" }}>
                    {etData?.experience}{" "}
                  </td>
                </tr>

                <tr>
                  <td>Contact Number</td>
                  <td>-</td>
                  <td>{etData?.contactNumber} </td>
                </tr>
                <tr>
                  <td>Email ID</td>
                  <td>-</td>
                  <td>{etData?.email} </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="adminViewUserDetail-btn">
            <button
              onClick={editProfile}
              className="btn"
              type="submit"
              value="submit"
            >
              Edit
            </button>
            <EtEditModal
              closeModal={closeModal}
              openModal={openModal}
              modalIsOpen={modalIsOpen}
              getEtData2={getEtData}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EtProfile;
