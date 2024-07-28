import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
// Register the required components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const LineChart = ({ chartData }) => {
  return (
    <div>
      <h2>Stock Price Over Time</h2>
      {chartData?.labels?.length > 0 ? (
        <Line data={chartData} />
      ) : (
        <p>Loading chart data...</p>
      )}
    </div>
  );
};

