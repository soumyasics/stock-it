import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
// Register the required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const LineChart = ({ chartData }) => {
  return (
    <div>
      {chartData?.labels?.length > 0 ? (
        <Line data={chartData} />
      ) : (
        <p>Not found any transactions yet. </p>
      )}
    </div>
  );
};
