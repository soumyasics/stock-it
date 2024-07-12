import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { BASE_URL } from "../../../apis/baseUrl";
import "./stockCard.css";
import { useNavigate } from "react-router-dom";
export const StockCard = ({ data }) => {
  const [logo, setLogo] = useState("");
  const navigate = useNavigate()
  useEffect(() => {
    const filename = data?.companyId?.logo?.filename || null;
    if (filename) {
      setLogo(`${BASE_URL}${filename}`);
    }
  }, [data]);
  return (
    <div className="companyRequest-details2">
      <div className="companyRequest-innerbox1">
        <img
          className="companyRequest-logo img-fluid"
          src={logo}
          alt="test"
        />
        <p className="companyRequest-subheading2 ms-3">{data?.companyId?.name}</p>
      </div>
      <table className="companyRequest-table2">
        
        <tr>
          <td>Total Shares</td>
          <td>:</td>
          <td className="companyRequest-data"> {data?.totalShares}</td>
        </tr>
        <tr>
          <td>Cost per share</td>
          <td>:</td>
          <td className="companyRequest-data">{data?.costPerShare}</td>
        </tr>
        <tr>
          <td>Market Capitalization</td>
          <td>:</td>
          <td className="companyRequest-data">{data?.capitation}</td>
        </tr>
      </table>
      <h6
        className="mt-4 companyRewquest-viewmore2 mt-3"
        style={{ cursor: "pointer" }}
        onClick={() => navigate(`/buyStocks/${data?._id}`)} 
      >
        View more
      </h6>
    </div>
  );
};
