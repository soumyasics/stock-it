import React, { useEffect, useState } from "react";
import { IoReturnUpBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../apis/axiosInstance";
import AdminNavbar from "../../common/adminNavbar";

function AdminViewBroughtStock() {
  const navigate = useNavigate();
  const [getStock, setGetStock] = useState([]);
  useEffect(() => {
    getAllStock();
  }, []);
  const getAllStock = async () => {
    try {
      const response = await axiosInstance.get("/allBuyStocks");
      console.log(response);
      if (response.status === 200) {
        setGetStock(response.data.data);
      }
    } catch (error) {
      console.log("Fail on getting data");
    }
  };
  return (
    <div>
        <AdminNavbar/>
      <div className="viewCompany-body">
        <div className="viewcomapany-head-box d-flex align-items-center justify-content-between px-5">
          <div
            onClick={() => {
              navigate(-1);
            }}
            style={{ cursor: "pointer", color: "white", fontSize: "20px" }}
          >
            <IoReturnUpBack />
          </div>
          <h4>Stock orders</h4>
          <div></div>
        </div>

        <div className="comapnyRequest-first-box">
          <div className="companyRequesest-second-box" role="group"></div>
        </div>

        <div className="viewCompany-table ">
          <table border="1px">
            <tr className="viewCompancy-head-row">
              <th>Sl No</th>
              <th>User</th>
              <th>Company</th>
              <th>Ticker Name</th>
              <th>Quantity purchased</th>

              <th>Cost per share</th>
            </tr>
            {getStock.map((co, i) => {
              console.log("coo", co)
              return (
                <tr key={co?._id}>
                  <td>{i + 1}</td>
                  <td>{co?.userId?.firstName}</td>
                  <td> {co?.companyId?.name}</td>
                  <td>{co?.companyId?.ticker}</td>
                  <td>{co?.numberOfSharesBought}</td>
                  <td>{co?.IPOId?.costPerShare}</td>
                 
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminViewBroughtStock;
