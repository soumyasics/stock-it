import React, { useEffect, useState } from "react";
import "./ipoForm.css";
import { toast } from "react-hot-toast";

import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../apis/axiosInstance";
export const IpoForm = ({ rediectToIPOStatus }) => {
  const [totalShares, setTotalNoShares] = useState("");
  const [costPerShare, setCostPerShare] = useState("");
  const [totalMarketCap, setTotalMarketCap] = useState(0);
  const [companyId, setCompanyId] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    let companyId = localStorage.getItem("stock_it_companyId") || null;
    if (companyId) {
      companyId = companyId.replace(/['"]+/g, "");
      setCompanyId(companyId);
    } else {
      toast.error("Please login again.");
      navigate("/companyLogin");
    }
  }, []);
  useEffect(() => {
    const cap = totalShares * costPerShare;
    if (isNaN(cap)) {
      setTotalMarketCap("");
      return;
    }
    setTotalMarketCap(cap);
  }, [totalShares, costPerShare]);

  const handleTotalNoSharesChange = (e) => {
    const value = e.target.value;
    if (value === "") {
      setTotalNoShares("");
    } else {
      const numValue = parseInt(value);
      if (numValue >= 0) {
        setTotalNoShares(numValue);
      }
    }
  };

  const handleCostPerShareChange = (e) => {
    const value = e.target.value;
    if (value === "") {
      setCostPerShare("");
    } else {
      const numValue = parseFloat(value);
      if (numValue >= 0) {
        setCostPerShare(numValue);
      }
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!totalShares || totalShares === 0) {
      toast.error("Total number of shares cannot be 0");
      return;
    }

    if (!costPerShare || costPerShare === 0) {
      toast.error("Cost per share cannot be 0");
      return;
    }
    if (totalMarketCap === 0) {
      toast.error("Total Market Cap cannot be 0");
      return;
    }

    if (!companyId) {
      toast.error("Please login again.");
      navigate("/companyLogin");
      return;
    }

    const ipoData = {
      totalShares,
      costPerShare: costPerShare,
      companyId: companyId,
      capitation: totalMarketCap,
    };
    sendDataToServer(ipoData);
  };
  const sendDataToServer = async (ipoData) => {
    try {
      const res = await axiosInstance.post("/createIpo", ipoData);

      if (res.status === 201) {
        toast.success("Your IPO request has been created successfully");
       
        return;
      } else {
        console.log("response", res);
      }
    } catch (error) {
      const status = error?.response?.status;
      if (status === 409) {
        toast.error(error?.response?.data?.message || "Something went wrong.");
        return;
      }

      toast.error("Something went wrong");
    }finally {
      rediectToIPOStatus()  
    }
  };
  return (
    <div>
      <div style={{ minHeight: "50px" }}></div>
      <div className="companystock">
        <div className="companystock-head">
          <h3>Company Stock Details</h3>
        </div>
        <form className="companystock-inputs" onSubmit={handleSubmit}>
          <label htmlFor="Totalshares">
            Total Shares <span className="companystock-star">*</span>
          </label>
          <br />
          <input
            type="number"
            value={totalShares}
            className="ps-3"
            onChange={handleTotalNoSharesChange}
            placeholder="Total Shares"
            min="0"
            max="1000000000"
          />
          <label htmlFor="CostPerShares">
            Cost Per Share <span className="companystock-star">*</span>
          </label>
          <br />
          <input
            className="ps-3"
            type="number"
            placeholder="Cost Per Share"
            value={costPerShare}
            onChange={handleCostPerShareChange}
            min="0"
            max="1000000000"
          />
          <label htmlFor="TotalMarketCap">
            Total Market Capitalization{" "}
            <span className="companystock-star">*</span>
          </label>
          <br />
          <input
            type="text"
            className="ps-3"
            placeholder="Total Market Capitalization"
            value={totalMarketCap}
            readOnly
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};
