import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { BASE_URL } from "../../../apis/baseUrl";
import { useNavigate } from "react-router-dom";
import "./portfolioCard.css";
export const PortfolioCard = ({ data }) => {
  console.log("portofoo", data);
  const [profitOrLoss, setProfitOrLoss] = useState(0);
  const [currentMarektValue, setCurrentMarketValue] = useState(0);
  const [logo, setLogo] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const filename = data?.companyId?.logo?.filename || null;
    if (filename) {
      setLogo(`${BASE_URL}${filename}`);
    }
    const CMP = data?.IPOId?.currentMarketPrice;
    const totalCurrentMarektValuation = CMP * data?.totalQuantity;
    setCurrentMarketValue(totalCurrentMarektValuation);

    const pAndL = totalCurrentMarektValuation - data?.totalCost;
    setProfitOrLoss(pAndL);
  }, [data]);
  return (
    <div className="companyRequest-details3">
      <div className="companyRequest-innerbox1">
        <img className="companyRequest-logo img-fluid" src={logo} alt="test" />
        <p className="companyRequest-subheading2 ms-3">
          {data?.companyId?.name}
        </p>
      </div>
      <table className="companyRequest-table2">
        <tbody className="portfolio-cards-body">
          <tr>
            <td>Quantity</td>
            <td>:</td>
            <td className="companyRequest-data"> {data?.totalQuantity}</td>
          </tr>
          <tr>
            <td style={{ textAlign: "left" }}>Bought price</td>
            <td>:</td>
            <td className="companyRequest-data">{data?.costPerShare}</td>
          </tr>
          <tr>
            <td>Total Cost</td>
            <td>:</td>
            <td className="companyRequest-data">{data?.totalCost}</td>
          </tr>
          <tr>
            <td>Current Market Valuation</td>
            <td>:</td>
            <td className="companyRequest-data">{currentMarektValue}</td>
          </tr>
          <tr>
            <td>Net P&L</td>
            <td>:</td>
            {profitOrLoss > 0 ? (
              <td className="companyRequest-data text-success">
                {profitOrLoss}
              </td>
            ) : (
              <td className="companyRequest-data text-danger">
                {profitOrLoss}
              </td>
            )}
          </tr>
        </tbody>
      </table>
      <h6
        className="mt-4 companyRewquest-viewmore2 mt-5"
        style={{ cursor: "pointer" }}
        onClick={() => navigate(`/buyStocks/${data?._id}`)}
      >
        View more
      </h6>
    </div>
  );
};
