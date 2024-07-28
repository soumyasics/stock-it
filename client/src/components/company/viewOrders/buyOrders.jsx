import React, { useEffect, useState } from "react";
import { IoReturnUpBack } from "react-icons/io5";
import axiosInstance from "../../../apis/axiosInstance";
import { useNavigate } from "react-router-dom";
import { StockCard } from "./stockCard";

export const CompanyViewBuyOrders = () => {
  const navigate = useNavigate();
  const [buyOrders, setbuyOrders] = useState([]);

  useEffect(() => {
    let companyId = localStorage.getItem("stock_it_companyId") || null;
    if (!companyId) {
      toast.error("Please login again.");
      navigate("/companyLogin");
      return;
    }
    companyId = companyId.replace(/['"]+/g, "");
    getBuyOrdersData(companyId);
  }, []);

  const getBuyOrdersData = async (id) => {
    try {
      const response = await axiosInstance.get(
        "/getAllBoughtStocksByCompanyId/" + id
      );
 
      if (response.status == 200) {
        setbuyOrders(response.data.data);
      }
    } catch (error) {
      console.log("Fail on get subs data", error);
    }
  };
  return (
    <div>
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
          <h4>Orders</h4>
          <div></div>
        </div>

        <div className="comapnyRequest-first-box">
          <div className="companyRequesest-second-box" role="group"></div>
        </div>

        <div className="viewCompany-table gap-5 flex-wrap d-flex p-4">
          {buyOrders.map((co, i) => {
            return <StockCard data={co} key={co._id} />;
          })}
        </div>
      </div>
    </div>
  );
};
