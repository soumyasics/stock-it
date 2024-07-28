import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://hybrid.srishticampus.in/stock_it_api/",
  headers: {
    "Content-Type": "application/json",
  },
});
// const axiosInstance = axios.create({
//   baseURL: "http://localhost:4034/stock_it_api/",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });
export default axiosInstance;
