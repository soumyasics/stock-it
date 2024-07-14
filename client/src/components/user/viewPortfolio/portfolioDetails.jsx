import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../../apis/axiosInstance";
import { Button, Col, Row } from "react-bootstrap";
import "./portfolioDetails.css";
import { BASE_URL } from "../../../apis/baseUrl";
import { IoReturnUpBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
export const PortfolioDetails = () => {
  const { id } = useParams();
  const [stockData, setStockData] = useState({});
  const [profitOrLoss, setProfitOrLoss] = useState(0);
  const [currentMarektValue, setCurrentMarketValue] = useState(0);
  const [totalBoughtShares, setTotalBoughtShares] = useState(0);
  const [totalPurchasePrice, setTotalPurchasePrice] = useState(0);
  const [userId, setUserId] = useState("");
  const [paymentData, setPaymentData] = useState({
    cardHolderName: "",
    cardNumber: "",
    cvv: "",
    expiry: "",
  });
  const [logo, setLogo] = useState("");
  const [show, setShow] = useState(false);

  const handlePaymentDataChange = (e) => {
    const { name, value } = e.target;
    setPaymentData({
      ...paymentData,
      [name]: value,
    });
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
        const totalCurrentMarektValuation = CMP * stock?.totalQuantity;
        setCurrentMarketValue(totalCurrentMarektValuation);

        const pAndL = totalCurrentMarektValuation - stock?.totalCost - 50;
        setProfitOrLoss(pAndL);
      }
    } catch (error) {
      console.log("Error on getstock data", error);
    }
  };

  console.log("stock data", stockData);
  const handleNoSharesChanges = (e) => {
    const noShares = e.target.value;
    setTotalBoughtShares(noShares);
    setTotalPurchasePrice(noShares * stockData.costPerShare);
  };
  const openPaymentModal = () => {
    if (totalBoughtShares <= 0) {
      toast.error("Please enter valid number of shares");
      return;
    }
    if (totalBoughtShares > stockData.totalShares) {
      toast.error("You can't buy more shares than available");
      return;
    }
    handleShow();
  };

  const buyStocks = async (e) => {
    e.preventDefault();
    const data = {
      userId,
      IPOId: id,
      companyId: stockData?.companyId?._id,
      totalQuantity: totalBoughtShares,
      numberOfSharesBought: totalBoughtShares,
      costPerShare: stockData.costPerShare,
      totalCost: totalPurchasePrice,
      ...paymentData,
    };
    sendDataToServer(data);
  };

  const sendDataToServer = async (data) => {
    const {
      userId,
      IPOId,
      companyId,
      totalQuantity,
      numberOfSharesBought,
      costPerShare,
      totalCost,
      cardHolderName,
      cardNumber,
      cvv,
      expiry,
    } = data;

    if (
      !userId ||
      !IPOId ||
      !companyId ||
      !totalQuantity ||
      !numberOfSharesBought ||
      !costPerShare ||
      !totalCost ||
      !cardHolderName ||
      !cardNumber ||
      !cvv ||
      !expiry
    ) {
      console.log("All data needed", data);
      return;
    }

    try {
      const response = await axiosInstance.post("buyStocks", data);
      if (response.status === 201) {
        toast.success("Stocks bought successfully");
        //   navigate to portfolio
      }
    } catch (error) {
      console.log("Error on buy stocks", error);
    } finally {
      handleClose();
    }
  };

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
          <Col>Total Quantity</Col>
          <Col md={1}>:</Col>
          <Col>{stockData.totalQuantity}</Col>
        </Row>
        <Row className="stock-details-row  ">
          <Col>Bough price</Col>
          <Col md={1}>:</Col>
          <Col>{stockData.costPerShare}</Col>
        </Row>
        <Row className="stock-details-row  ">
          <Col>Total Cost</Col>
          <Col md={1}>:</Col>
          <Col>{stockData.totalCost}</Col>
        </Row>
        <Row className="stock-details-row  ">
          <Col>Current Market Valuation</Col>
          <Col md={1}>:</Col>
          <Col>{currentMarektValue}</Col>
        </Row>

        <Row className="stock-details-row  ">
          <Col>Shares For Sale </Col>
          <Col md={1}>:</Col>
          <Col>
            <input
              max={stockData.totalShares}
              value={totalBoughtShares}
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

        <div className="d-flex justify-content-center mt-5 stock-details-row">
          <Button onClick={openPaymentModal} className="buy-btn">
            Sell Stocks
          </Button>
        </div>
      </div>
    </>
  );
};
