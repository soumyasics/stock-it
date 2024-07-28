import { useEffect, useState } from "react";
import axiosInstance from "../../../apis/axiosInstance";
import { LineChart } from "./linechart";

export const UserDashboardMainbar = ({ selectedStock }) => {
  const [stock, setStock] = useState({});
  const [chartData, setChartData] = useState({});

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
        console.log("cmp arr", cmpArr)

        const data = {
          labels: cmpArr.map(entry => new Date(entry.date).toLocaleDateString()),
          datasets: [
            {
              label: 'Current Market Price',
              data: cmpArr.map(entry => entry.value),
              fill: false,
              borderColor: 'rgba(75,192,192,1)',
              tension: 0.1,
            },
          ],
        };
        setChartData(data);
      }
    } catch (err) {
      console.log(err);
    }
  };




  return (
    <div>
      <h1>{stock?.companyId?.name}</h1>

      <LineChart chartData={chartData} />
    </div>
  );
};
