import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../../apis/axiosInstance";
import { Button, Col, Row } from "react-bootstrap";
import { BASE_URL } from "../../../apis/baseUrl";
import { IoReturnUpBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import "./portfolioDetails.css";
export const PortfolioDetails = () => {
  const { id } = useParams();
  const [stockData, setStockData] = useState({});
  const [profitOrLoss, setProfitOrLoss] = useState(0);
  const [bookedProfitOrLoss, setBookedProfitOrLoss] = useState(0);
  const [currentMarektValue, setCurrentMarketValue] = useState(0);
  const [sellingQuantity, setSellingQuantity] = useState(0);
  const [userId, setUserId] = useState("");

  const [logo, setLogo] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    if (id) {
      getStockData();
      const userIdentification =
        localStorage.getItem("stock_it_userId") || null;
      if (userIdentification) {
        setUserId(userIdentification);
      }
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
        const companyLogo = stock?.companyId?.logo?.filename || null;
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

  const sellStocks = () => {
    if (sellingQuantity === 0) {
      toast.error("Selling quantity shouldn't be zero.");
      return;
    }

    if (sellingQuantity > stockData.totalQuantity) {
      toast.error(
        `You can't sell more than shares you have! You only have ${stockData.totalQuantity} number of shares`
      );
      return;
    }
    sendDataToServer();
  };
  const sendDataToServer = async () => {
    try {
      const res = await axiosInstance.post(`/sellStocks/${stockData?._id}`, {
        sellingQuantity,
      });
      if (res.status === 200) {
        toast.success("You sold shares successfully. ");
        getStockData();
      }
    } catch (error) {
      const status = error?.response?.data?.status;
      if (status === 400 || status === 404 || status === 500) {
        const msg = error?.response?.data?.msg || "Network issue";
        toast.error(msg);
      } else {
        toast.error("Server error.");
      }
      console.log("Error on sell stocks", error);
    }
  };

  console.log("sto", stockData);

  return (
    <>
      <div id="stock-details-container">
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
            {`${stockData?.companyId?.name} (${stockData?.companyId?.ticker})`}
          </h3>
        </div>
        <Row className="stock-details-row">
          <Col>Total quantity bought</Col>
          <Col md={1}>:</Col>
          <Col>{stockData.numberOfSharesBought}</Col>
        </Row>
        <Row className="stock-details-row">
          <Col>Currently available quantity</Col>
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
          <Col>Sell shares </Col>
          <Col md={1}>:</Col>
          <Col>
            <input
              max={stockData.totalShares}
              value={sellingQuantity}
              onChange={handleNoSharesChanges}
              type="number"
            />
          </Col>
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
          <Button className="buy-btn" onClick={sellStocks}>
            Sell Stocks
          </Button>
        </div>
      </div>
    </>
  );
};
