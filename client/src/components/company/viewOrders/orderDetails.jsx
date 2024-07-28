import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../../apis/axiosInstance";
import { Button, Col, Row } from "react-bootstrap";
import { BASE_URL } from "../../../apis/baseUrl";
import { IoReturnUpBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import "./portfolioDetails.css";
import portfolioImg from "../../../assets/illus/portfolio.png";
export const CompanyViewBuyOrderDetails = () => {
  const { id } = useParams();
  const [stockData, setStockData] = useState({});
  const [profitOrLoss, setProfitOrLoss] = useState(0);
  const [bookedProfitOrLoss, setBookedProfitOrLoss] = useState(0);
  const [currentMarektValue, setCurrentMarketValue] = useState(0);
  const [sellingQuantity, setSellingQuantity] = useState(0);

  const [logo, setLogo] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    if (id) {
      getStockData();
      
    }
  }, [id]);

  useEffect(() => {
    setBookedProfitOrLoss(stockData.currentProfit - stockData.currentLoss);
  }, [stockData.currentProfit, stockData.currentLoss]);

  console.log("stock data", stockData);

  const getStockData = async () => {
    try {
      const response = await axiosInstance.get(`getBoughtStockById/${id}`);
      if (response.status === 200) {
        const stock = response.data?.data || {};
        setStockData(stock);
        const companyLogo = stock?.userId?.photo || null;
        if (companyLogo) {
          setLogo(`${BASE_URL}${companyLogo}`);
        }

        // profit and loss calcuation
        const CMP = stock?.IPOId?.currentMarketPrice;
        let pAndL;
        let totalCurrentMarektValuation = 0;
        if (stock.totalQuantity === 0) {
          pAndL = currentProfilt - currentLoss;
        } else {
          totalCurrentMarektValuation = CMP * stock?.numberOfSharesBought;
          setCurrentMarketValue(totalCurrentMarektValuation);

          pAndL = totalCurrentMarektValuation - stock?.totalCost;
        }

        setProfitOrLoss(pAndL);
      }
    } catch (error) {
      console.log("Error on getstock data", error);
    }
  };

  console.log("stock data", stockData);
  const handleNoSharesChanges = (e) => {
    const noShares = e.target.value;
    setSellingQuantity(noShares);
  };

  const viewUserDetails = () => {
    navigate(`/companyViewUserDetails/${stockData.userId._id}`);
  };

  return (
    <div className="d-flex" style={{ backgroundColor: "#374151" }}>
      <div id="stock-details-container2">
        <div
          style={{ fontSize: "20px", cursor: "pointer" }}
          onClick={() => {
            navigate(-1);
          }}
        >
          <IoReturnUpBack />
        </div>
        <div className="stock-details-row align-items-center d-flex  ">
          <img src={logo} alt="logo" />

          <h3 className="ms-5">
            {" "}
            {`${stockData?.userId?.firstName} ${stockData?.userId?.lastName}`}
          </h3>
        </div>
        <Row className="stock-details-row">
          <Col>Total quantity bought</Col>
          <Col md={1}>:</Col>
          <Col>{stockData.numberOfSharesBought}</Col>
        </Row>
        <Row className="stock-details-row">
          <Col>Currently available shares</Col>
          <Col md={1}>:</Col>
          <Col>{stockData.totalQuantity}</Col>
        </Row>
        <Row className="stock-details-row  ">
          <Col>Bought price</Col>
          <Col md={1}>:</Col>
          <Col>{stockData.costPerShare}</Col>
        </Row>

        <Row className="stock-details-row  ">
          <Col>Total Cost</Col>
          <Col md={1}>:</Col>
          <Col>{stockData.totalCost}</Col>
        </Row>
        <Row className="stock-details-row  ">
          <Col>Current Market Price </Col>
          <Col md={1}>:</Col>
          <Col>{stockData.IPOId?.currentMarketPrice}</Col>
        </Row>

        <Row className="stock-details-row  ">
          <Col>Current Market Valuation</Col>
          <Col md={1}>:</Col>
          <Col>{currentMarektValue}</Col>
        </Row>
        <Row className="stock-details-row  ">
          <Col>Number of shares sold</Col>
          <Col md={1}>:</Col>
          <Col>{stockData.numberOfSharesBought - stockData.totalQuantity}</Col>
        </Row>
        <Row className="stock-details-row  ">
          <Col>Order status</Col>
          <Col md={1}>:</Col>
          <Col className="text-success">Processed</Col>
        </Row>
        <Row className="stock-details-row  ">
          <Col>Order Date</Col>
          <Col md={1}>:</Col>
          <Col>{stockData?.createdAt?.substring(0, 10)}</Col>
        </Row>
        <Row className="stock-details-row  ">
          <Col>Execuation Date</Col>
          <Col md={1}>:</Col>
          <Col>{stockData?.createdAt?.substring(0, 10)}</Col>
        </Row>

        <Row className="stock-details-row  ">
          <Col>Live Profit / Loss Status </Col>
          <Col md={1}>:</Col>
          {profitOrLoss > 0 ? (
            <Col>
              <p className="text-success" style={{ textAlign: "left" }}>
                {" "}
                ₹ {profitOrLoss}{" "}
              </p>
            </Col>
          ) : (
            <Col className="text-danger"> ₹ {profitOrLoss}</Col>
          )}
        </Row>

        <Row className="stock-details-row  ">
          <Col>Booked Profit / Loss </Col>
          <Col md={1}>:</Col>
          {bookedProfitOrLoss > 0 ? (
            <Col>
              <p className="text-success" style={{ textAlign: "left" }}>
                {" "}
                ₹ {bookedProfitOrLoss}{" "}
              </p>
            </Col>
          ) : (
            <Col className="text-danger"> ₹ {bookedProfitOrLoss}</Col>
          )}
        </Row>

        <div className="d-flex justify-content-center mt-5 stock-details-row">
          <Button className="buy-btn" onClick={viewUserDetails}>
            View User Details
          </Button>
        </div>
      </div>

      <div className="img-container w-50 d-flex  align-items-center ">
        <img src={portfolioImg} alt="portfolio" />
      </div>
    </div>
  );
};
