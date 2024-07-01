import React, { useEffect, useState } from "react";
import "./ipoForm.css";
import { toast } from "react-hot-toast";

export const IpoForm = () => {
  const [totalNoShares, setTotalNoShares] = useState("");
  const [costPerShare, setCostPerShare] = useState("");
  const [totalMarketCap, setTotalMarketCap] = useState(0);

  useEffect(() => {
    const cap = totalNoShares * costPerShare;
    if (isNaN(cap)) {
      setTotalMarketCap("");
      return;
    }
    setTotalMarketCap(cap);
  }, [totalNoShares, costPerShare]);

  const handleTotalNoSharesChange = (e) => {
    const value = e.target.value;
    if (value === "") {
      setTotalNoShares("");
    } else {
      const numValue = parseFloat(value);
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
    if (!totalNoShares || totalNoShares === 0) {
      toast.error("Total number of shares cannot be 0");
    } else if (!costPerShare || costPerShare === 0) {
      toast.error("Cost per share cannot be 0");
    } else {
      sendDataToServer();
    }
  };
  const sendDataToServer = () => {};
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
            value={totalNoShares}
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
