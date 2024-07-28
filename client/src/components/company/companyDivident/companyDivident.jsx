import React from "react";
import { IoReturnUpBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import dividentImg from "../../../assets/illus/divident-1.png";
import "./divident.css";

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
          <div>
            <h4>Dividend</h4>
          </div>
          <div></div>
        </div>
        <div className="d-flex gap-5">
          <div className="divident-img" style={{ width: "40%" }}>
            <img src={dividentImg} alt="dividnet" />
          </div>

          <table className="w-50" id="divident-table">
            <tbody>
              <tr>
                <td class="first-column-table">Stock Ticker Symbol</td>
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
              <tr
                className=" d-flex justify-content-center position-relative"
                style={{ left: "50%", top: "20px" }}
              >
                <Button variant="success">Provide Dividend</Button>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CompanyDivident;
