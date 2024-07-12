import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../../apis/axiosInstance";
import { Button, Col, Row } from "react-bootstrap";
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

  const [logo, setLogo] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  useEffect(() => {
    if (id) {
      getStockData();
      const userIdentification = localStorage.getItem("stock_it_userId") || null;
      if (userIdentification) {
        setUserId(userIdentification);
      }
    }
  }, [id]);

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

  const buyStocks = async () => {
    const data = {
        IPOId: id,
        companyId: id?.companyId,
        userId,
        totalShares: totalBoughtShares,
        totalPurchasePrice,
        costPerShare: stockData.costPerShare,
        
    }


  };

  const sendDataToServer = async (data) => {
    try {
        const response = await axiosInstance.post("buyStocks", data);
        if (response.status === 200) {
          toast.success("Stocks bought successfully");
        //   navigate to portfolio
        }
      } catch (error) {
        console.log("Error on buy stocks", error);
      }
    }
  
  return (
    <>
      <PaymentModal handleClose={handleClose} show={show} />
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
        <Row className="stock-details-row  ">
          <Col>Total Shares</Col>
          <Col md={1}>:</Col>
          <Col>{stockData.totalShares}</Col>
        </Row>
        <Row className="stock-details-row  ">
          <Col>Cost per share</Col>
          <Col md={1}>:</Col>
          <Col>{stockData.costPerShare}</Col>
        </Row>
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

        <div className="d-flex justify-content-center mt-5 stock-details-row">
          <Button onClick={openPaymentModal} className="buy-btn">
            Buy Stocks
          </Button>
        </div>
      </div>
    </>
  );
};
