import { useEffect, useState } from "react";
import axiosInstance from "../../../apis/axiosInstance";
import { LineChart } from "./linechart";
import { Button, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
export const UserDashboardMainbar = ({ selectedStock }) => {
  const [stock, setStock] = useState({});
  const [chartData, setChartData] = useState({});
  const navigate = useNavigate();
  const redirectToBuyStock = () => {
    navigate(`/buyStocks/${selectedStock}`);
  };
  useEffect(() => {
    if (selectedStock) {
      getStockData();
    }
  }, [selectedStock]);
  const getStockData = async () => {
    try {
      const response = await axiosInstance.post(`getIPOById/${selectedStock}`);
      if (response.status === 200) {
        console.log(response.data.data);
        setStock(response.data.data);
        const { cmpArr } = response.data.data;
        console.log("cmp arr", cmpArr);

        const data = {
          labels: cmpArr.map((entry) =>
            new Date(entry.date).toLocaleDateString()
          ),
          datasets: [
            {
              label: "Current Market Price",
              data: cmpArr.map((entry) => entry.value),
              fill: false,
              borderColor: "rgba(75,192,192,1)",
              tension: 0.5,
            },
          ],
        };
        setChartData(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const redirectCompanyDetails = () => {
    navigate("/companyDetails/" + stock?.companyId?._id);
  };
  return (
    <div className="mt-3">
      <h5 className="text-center">
        {" "}
        <span className="text-capitalize">{stock?.companyId?.name}</span>
        &nbsp; Stock price over time
      </h5>
      <Row className="p-5">
        <LineChart chartData={chartData} />
      </Row>
      <Row className="px-5">
        <Col className="d-flex align-items-center">
          <h6 className="m-0">
            Current Market Price: {stock.currentMarketPrice}
          </h6>
        </Col>
        <Col className="d-flex align-items-center">
          <Button
            onClick={redirectToBuyStock}
            style={{ backgroundColor: "#111827", color: "white" }}
          >
            Buy Stock{" "}
          </Button>
          <Button
            className="ms-3"
            onClick={redirectCompanyDetails}
            style={{ backgroundColor: "#111827", color: "white" }}
          >
            View Details
          </Button>
        </Col>
        <Col className="d-flex align-items-center">
          <h6 className="m-0">Available shares: {stock.availableShares}</h6>
        </Col>
      </Row>
    </div>
  );
};
