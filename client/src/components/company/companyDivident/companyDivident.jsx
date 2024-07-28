import React, { useEffect, useState } from "react";
import { IoReturnUpBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import dividentImg from "../../../assets/illus/divident-1.png";
import "./divident.css";
import axiosInstance from "../../../apis/axiosInstance";
import { toast } from "react-hot-toast";

function CompanyDivident() {
  const [ipoStatus, setIpoStatus] = useState({});
  const [companyData, setcompanyData] = useState({});
  const [todaysDate, setTodaysDate] = useState(new Date().toLocaleDateString());
  const [today] = useState(new Date().toISOString().split("T")[0]);
  const [dividentPerShare, setDividentPerShare] = useState(0);
  const [totalDivident, setTotalDivident] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    let companyId = localStorage.getItem("stock_it_companyId") || null;

    if (!companyId) {
      toast.error("Please login again.");
      navigate("/companyLogin");
      return;
    }
    companyId = companyId.replace(/['"]+/g, "");
    getIpoData(companyId);
    getCompanyData(companyId);
  }, []);
  const getIpoData = async (companyId) => {
    try {
      const response = await axiosInstance.get(
        `/getIpoByCompanyId/${companyId}`
      );
      const data = response?.data?.data || null;
      if (data) {
        setIpoStatus(data);
      } else {
        console.log("resposne", response);
      }
      console.log("Response from getIpoStatus api", response.data.data);
    } catch (error) {
      console.log("Error getting compnaies ipo data", error);
    }
  };
  const getCompanyData = async (companyId) => {
    try {
      const response = await axiosInstance.post(
        `/viewCompanyById/${companyId}`
      );
      const data = response?.data?.data || null;
      if (data) {
        setcompanyData(data);
      } else {
        console.log("resposne", response);
      }
    } catch (error) {
      console.log("Error getting compnaies ipo data", error);
    }
  };

  const handleDividentAmountChange = (e) => {
    const value = e.target.value;
    if (!value) {
      setDividentPerShare(0);
      return;
    }

    // reguslar express for valid number
    const isValidNumber = /^[0-9]+$/;

    if (!isValidNumber.test(value)) {
      return;
    }
    if (value < 0) {
      return;
    }
    setDividentPerShare(value);
  };

  const initiateDivident = () => {
    if (!dividentPerShare) {
      toast.error("Please enter divident amount");
      return;
    }
    if (dividentPerShare > ipoStatus?.currentMarketPrice) {
      toast.error("You can't provide divident more than current market price");
      return;
    }
    const amount = dividentPerShare * ipoStatus?.totalShares;
    setTotalDivident(amount);
  };

  useEffect(() => {
    const totalShares = ipoStatus?.totalShares || 0;
    setTotalDivident(dividentPerShare * totalShares);
  }, [dividentPerShare]);
  console.log("ipo status", ipoStatus);
  console.log("company data", companyData);
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
        <div className="d-flex mt-5 gap-5">
          <div className="divident-img " style={{ width: "40%" }}>
            <img src={dividentImg} alt="dividnet" />
          </div>

          <table className="w-50" id="divident-table">
            <tbody>
              <tr>
                <td class="first-column-table">Stock Ticker Symbol</td>
                <td>:</td>
                <td className="text-uppercase">
                  {companyData?.ticker || "Not assigned yet."}
                </td>
              </tr>
              <tr>
                <td>Total Issued Shares</td>
                <td>:</td>
                <td>{ipoStatus?.totalShares}</td>
              </tr>

              <tr>
                <td>Total Shares Purchased</td>
                <td>:</td>
                <td>{ipoStatus?.totalShares - ipoStatus?.availableShares}</td>
              </tr>
              <tr>
                <td>Unbought Shares</td>
                <td>:</td>
                <td>{ipoStatus?.availableShares}</td>
              </tr>
              <tr>
                <td>Current Market Price</td>
                <td>:</td>
                <td>{ipoStatus?.currentMarketPrice}</td>
              </tr>
              <tr>
                <td>Dividend Declaration Date</td>
                <td>:</td>
                <td>{todaysDate}</td>
              </tr>
              <tr>
                <td>Divident Payment Date</td>
                <td>:</td>
                <td>
                  <input min={today} type="date" />
                </td>
              </tr>
              <tr>
                <td>Divident Amount Per Share</td>
                <td>:</td>
                <td>
                  <input
                    value={dividentPerShare}
                    onChange={handleDividentAmountChange}
                    type="number"
                    placeholder="Enter divident amount"
                  />
                </td>
              </tr>
              <tr>
                <td>Total Divident Amount</td>
                <td>:</td>
                <td>{totalDivident}</td>
              </tr>
              <tr
                className=" d-flex justify-content-center position-relative"
                style={{ left: "50%", top: "20px" }}
              >
                <Button onClick={initiateDivident} variant="success">
                  Provide Dividend
                </Button>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CompanyDivident;
