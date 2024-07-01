import React from "react";
import "./ipoForm.css";
import AdminNavbar from "../../common/adminNavbar";

export const IpoForm = () => {
  return (
    <div>
      <div style={{ minHeight: "50px" }}></div>
      <div className="companystock">
        <div className="companystock-head">
          <h3>Company Stock Details</h3>
        </div>
        <div className="companystock-inputs">
          <label htmlFor="Totalshares">
            Total Shares <span className="companystock-star">*</span>
          </label>
          <br />
          <input type="text" placeholder="Total Shares" />
          <label htmlFor="Totalshares">
            Cost Per Shares <span className="companystock-star">*</span>
          </label>
          <br />
          <input type="text" placeholder="Cost Per Share" />
          <label htmlFor="Totalshares">
            Total Market Captitaion <span className="companystock-star">*</span>
          </label>
          <br />
          <input type="text" placeholder="Total market capitation" />
          <button type="sumbit">Submit</button>
        </div>
      </div>
    </div>
  );
};
