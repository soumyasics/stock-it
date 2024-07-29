import React from "react";
import "./adminCount.css";
import { useState, useEffect } from "react";
import axiosInstance from "../../../apis/axiosInstance";
import { useNavigate } from "react-router-dom";
import { RiStockLine } from "react-icons/ri";
import { FaChalkboardTeacher } from "react-icons/fa";
import { PiFactory } from "react-icons/pi";
import { FaUsers } from "react-icons/fa";
function AdminCount() {
  const [coLength, setCoLength] = useState(0);
  const [usersLength, setUsersLength] = useState(0);
  const [tutLength, setTutLength] = useState(0);
  const [ipoLength, setIPOLength] = useState(0);
  const navigate = useNavigate();
  const getAllCompanies = async () => {
    try {
      const res = await axiosInstance.post("viewCompanies");
      if (res.status === 200) {
        let data = res.data?.data || [];
        let activeUsers = data?.filter((i) => {
          return i?.adminApproved === true;
        });
        const len = activeUsers.length;
        setCoLength(len);
      } else {
        console.log("Error ", res);
      }
    } catch (error) {
      console.log("Error getting compnaies", error);
    }
  };

  const getAllUsers = async () => {
    try {
      const res = await axiosInstance.post("getAllUsers");
      if (res.status === 200) {
        let data = res.data?.data || [];
        let activeUsers = data?.filter((i) => {
          return i?.isActive === true;
        });
        const len = activeUsers.length;
        setUsersLength(data.length);
      } else {
        console.log("Error ", res);
      }
    } catch (error) {
      console.log("Error getting compnaies", error);
    }
  };
  const getAllETs = async () => {
    try {
      const res = await axiosInstance.post("getAllTutors");
      if (res.status === 200) {
        let data = res.data?.data || [];
        let activeUsers = data?.filter((i) => {
          return i?.adminApproved === "approve";
        });
        const len = activeUsers.length;
        setTutLength(len);
      } else {
        console.log("Error ", res);
      }
    } catch (error) {
      console.log("Error getting compnaies", error);
    }
  };

  const getAllIPOs = async () => {
    try {
      const res = await axiosInstance.get("getIpos");
      if (res.status === 200) {
        let data = res.data?.data || [];
        const pendingIpos = data?.filter((item) => {
          return item.adminApproved === "approved";
        });
        setIPOLength(data.length);
      } else {
        console.log("Error ", res);
      }
    } catch (error) {
      console.log("Error getting ipos", error);
    }
  };

  useEffect(() => {
    getAllCompanies();
    getAllUsers();
    getAllETs();
    getAllIPOs();
  }, []);

  return (
    <div>
      <div className="admincount-main">
        <div
          className="admincount-block"
          onClick={() => {
            navigate("/adminViewUsers");
          }}
        >
          <div
            className="admincount-block-image pt-1"
            style={{ fontSize: "25px" }}
          >
            <FaUsers />
          </div>
          <div className="admincount-block-head">
            <h3>Total Number Users</h3>
            <p>{usersLength}</p>
          </div>
        </div>
        <div
          className="admincount-block"
          onClick={() => {
            navigate("/adminViewCompany");
          }}
        >
          <div
            className="admincount-block-image pt-1"
            style={{ fontSize: "25px" }}
          >
            <PiFactory />
          </div>
          <div className="admincount-head">
            <h3>Total Companies</h3>
            <p>{coLength}</p>
          </div>
        </div>
        <div
          className="admincount-block"
          onClick={() => {
            navigate("/adminViewAllETs");
          }}
        >
          <div
            className="admincount-block-image pt-1"
            style={{ fontSize: "25px" }}
          >
            <FaChalkboardTeacher />
          </div>
          <div className="admincount-head">
            <h3>Educational Tutors</h3>
            <p>{tutLength}</p>
          </div>
        </div>
        <div
          className="admincount-block"
          onClick={() => {
            navigate("/adminAllIPOs");
          }}
        >
          <div
            className="admincount-block-image pt-1"
            style={{ fontSize: "25px" }}
          >
            {/* <img src={stocksimg} alt="..." /> */}
            <RiStockLine />
          </div>
          <div className="admincount-head">
            <h3>IPOs</h3>
            <p>{ipoLength}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminCount;
