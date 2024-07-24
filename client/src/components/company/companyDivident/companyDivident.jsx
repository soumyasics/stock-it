import React from "react";
import { IoReturnUpBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

function CompanyDivident() {
  const navigate = useNavigate();
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
          <h4>Dividend</h4>
          <div></div>
        </div>
          <table style={{width:"20%"}}>
            <tbody>
              <tr>
                <td>Stock Ticker Symbol</td>
                <td>:</td>
                <td>SBW</td>
              </tr>
              <tr>
                <td>Live Profit/Loss Status</td>
                <td>:</td>
                <td className="text-success">+25</td>
              </tr>
              <tr>
                <td>Select User</td>
                <td>:</td>
                <td></td>
              </tr>
              <tr>
                <td>Dividend Delivery Data</td>
                <td>:</td>
                <td>20/5/2045</td>
              </tr>
              <tr>
                <td>Dividend payment Data</td>
                <td>:</td>
                <td>40/5/2254</td>
              </tr>
              <tr>
                <td>Dividend Amount Per Share</td>
                <td>:</td>
                <td>5000</td>
              </tr>
              <tr>
                <td>Total Divident Share</td>
                <td>:</td>
                <td>5000</td>
              </tr>
            </tbody>
          </table>
          <Button variant="secondary" style={{margin:"2% 10%"}}>
            Provide Dividend
          </Button>
      </div>
    </div>
  );
}

export default CompanyDivident;
