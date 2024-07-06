import React from "react";
import "./adminCount.css";
import userimg from "../../../assets/images/stock.png";
import companyimg from "../../../assets/images/companyicon.svg";
import Eduimg from "../../../assets/images/edicon.svg";
import stocksimg from "../../../assets/images/hearticon.svg";
import { useState, useEffect } from "react";
import axiosInstance from "../../../apis/axiosInstance";
import { useNavigate } from "react-router-dom";
function AdminCount() {
  const [coLength, setCoLength] = useState(0);
  const [usersLength, setUsersLength] = useState(0);
  const [tutLength, setTutLength] = useState(0);
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
        setUsersLength(len);
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
      console.log("tuts", res);
      if (res.status === 200) {
        let data = res.data?.data || [];
        let activeUsers = data?.filter((i) => {
          return i?.isActive === true;
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



  useEffect(() => {
    getAllCompanies();
    getAllUsers();
    getAllETs();
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
          <div className="admincount-block-image">
            <img src={userimg} alt="" />
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
          <div className="admincount-block-image">
            <img src={companyimg} alt="user" />
          </div>
          <div className="admincount-head">
            <h3>Total Companies</h3>
            <p>{coLength}</p>
          </div>
        </div>
        <div className="admincount-block">
          <div className="admincount-block-image">
            <img src={Eduimg} alt="edu" />
          </div>
          <div className="admincount-head">
            <h3>Educational Tutors</h3>
            <p>{tutLength}</p>
          </div>
        </div>
        <div className="admincount-block">
          <div className="admincount-block-image">
            <img src={stocksimg} alt="..." />
          </div>
          <div className="admincount-head">
            <h3>Stocks</h3>
            <p>80</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminCount;
