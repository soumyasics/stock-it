import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../../apis/axiosInstance";
import { Alert, Button, Col, Row } from "react-bootstrap";
import "./stockDetails.css";
import { BASE_URL } from "../../../apis/baseUrl";
import { IoReturnUpBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { PaymentModal } from "./paymentModal";
export const StockDetails = () => {
  const { id } = useParams();
  const [stockData, setStockData] = useState({});
  const [totalBoughtShares, setTotalBoughtShares] = useState(0);
  const [totalPurchasePrice, setTotalPurchasePrice] = useState(0);
  const [userId, setUserId] = useState("");
  const [dividents, setDividents] = useState([]);
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
      getDividentsData();
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
      const response = await axiosInstance.post(`getIPOById/${id}`);
      if (response.status === 200) {
        setStockData(response.data.data);
        const companyLogo =
          response?.data?.data?.companyId?.logo?.filename || null;
        if (companyLogo) {
          setLogo(`${BASE_URL}${companyLogo}`);
        }
      }
    } catch (error) {
      console.log("Error on getstock data", error);
    }
  };
  const handleNoSharesChanges = (e) => {
    const noShares = e.target.value;
    setTotalBoughtShares(noShares);
    setTotalPurchasePrice(noShares * stockData.currentMarketPrice);
  };
  const openPaymentModal = () => {
    if (totalBoughtShares <= 0) {
      toast.error("Please enter valid number of shares");
      return;
    }
    if (totalBoughtShares > stockData.availableShares) {
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
      costPerShare: stockData.currentMarketPrice,
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
        navigate("/viewPortfolio");
      }
    } catch (error) {
      const status = error?.response.status;
      if (status === 400 || status === 404 || status === 500) {
        toast.error(error?.response?.data?.msg || "Please check your network");
      } else {
        toast.error("Something went wrong");
      }
      console.log("Error on buy stocks", error);
    } finally {
      handleClose();
    }
  };

  const getDividentsData = async () => {
    try {
      const res = await axiosInstance.get(`getDividentsByIPOId/${id}`);
      if (res.status === 200) {
        setDividents(res.data.data);
      }
    } catch (error) {
      console.log("Error on get divident data", error);
    }
  };
  return (
    <>
      <PaymentModal
        handleClose={handleClose}
        show={show}
        handlePaymentDataChange={handlePaymentDataChange}
        buyStocks={buyStocks}
      />
      <Row id="stock-details-container">
        <Col>
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
            <Col>Total Shares</Col>
            <Col md={1}>:</Col>
            <Col>{stockData.totalShares}</Col>
          </Row>
          <Row className="stock-details-row">
            <Col>Available Shares</Col>
            <Col md={1}>:</Col>
            <Col>{stockData.availableShares}</Col>
          </Row>
          <Row className="stock-details-row  ">
            <Col>Current Market Price</Col>
            <Col md={1}>:</Col>
            <Col>{stockData.currentMarketPrice}</Col>
          </Row>
          {stockData.availableShares > 0 && (
            <>
              <Row className="stock-details-row  ">
                <Col>Number of Shares Needed </Col>
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
                <Col>Total Purchase Price </Col>
                <Col md={1}>:</Col>
                <Col>{totalPurchasePrice}</Col>
              </Row>
            </>
          )}

          <div className="d-flex justify-content-center gap-5 mt-5 stock-details-row">
            {stockData.availableShares > 0 ? (
              <Button onClick={openPaymentModal} className="buy-btn">
                Buy Stocks
              </Button>
            ) : (
              <p style={{ color: "red" }}> All shares sold</p>
            )}

            <Button
              onClick={() => {
                navigate("/userDashboard/" + id);
              }}
              className="buy-btn"
            >
              View Chart
            </Button>
          </div>
        </Col>
        <Col className="p-5" style={{ overflowY: "auto", maxHeight: "500px" }}>
          {dividents.map((d) => {
            const company = d?.companyId;
            return (
              <div>
                <Alert key={d?._id} variant="success ">
                  <span className="text-uppercase ">{company?.name}</span>{" "}
                  &nbsp; announced a dividend of {d?.dividentPerShare} rupees
                  per share.
                </Alert>
              </div>
            );
          })}
        </Col>
      </Row>
    </>
  );
};
