import axios from "axios";

// const axiosMultipartInstance = axios.create({
//   baseURL: "http://hybrid.srishticampus.in/stock_it_api/",
//   headers: {
//     "Content-Type": "multipart/form-data",
//   },
// });
const axiosMultipartInstance = axios.create({
  baseURL: "http://localhost:4034/stock_it_api/",
  headers: {
    "Content-Type": "multipart/form-data",
  },
});
export default axiosMultipartInstance;
