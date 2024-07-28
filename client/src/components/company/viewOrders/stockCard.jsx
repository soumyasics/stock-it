import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { BASE_URL } from "../../../apis/baseUrl";
import "./stockCard.css";
import { useNavigate } from "react-router-dom";
export const StockCard = ({ data }) => {
  const [logo, setLogo] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const filename = data?.userId?.photo || null;
    if (filename) {
      setLogo(`${BASE_URL}${filename}`);
    }
  }, [data]);
  return (
    <div className="companyRequest-details2">
      <div className="companyRequest-innerbox1">
        <img className="companyRequest-logo img-fluid" src={logo} alt="test" />
        <p className="companyRequest-subheading2 ms-3">
          {data?.userId?.firstName}
        </p>
      </div>
      <table className="companyRequest-table2">
        <tr style={{ textAlign: "left" }}>
          <td>Number of shares</td>
          <td>:</td>
          <td className="companyRequest-data"> {data?.numberOfSharesBought}</td>
        </tr>
        <tr style={{ textAlign: "left" }}>
          <td>Cost per share</td>
          <td>:</td>
          <td className="companyRequest-data">{data?.costPerShare}</td>
        </tr>

        <tr style={{ textAlign: "left" }}>
          <td>Total cost</td>
          <td>:</td>
          <td className="companyRequest-data">{data?.totalCost}</td>
        </tr>
      </table>
      <h6
        className="mt-4 companyRewquest-viewmore2 mt-3"
        style={{ cursor: "pointer" }}
        onClick={() => navigate(`/companyViewBuyOrders/${data?._id}`)}
      >
        View more
      </h6>
    </div>
  );
};
