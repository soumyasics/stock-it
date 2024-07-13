import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserNavbar } from "../userNavbar/userNavbar";
import { Footer2 } from "../../common/footer2/footer2";
import axiosInstance from "../../../apis/axiosInstance";
import { PortfolioCard } from "./portfolioCard";

export const MyPortfolio = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");

  const [myStocks, setMyStocks] = useState([]);

  const getMyStocks = async () => {
    try {
      const res = await axiosInstance.get(
        `getAllBoughtStocksByUserId/${userId}`
      );
      if (res.status === 200) {
        const allStocks = res.data?.data || [];
        // const allCompanies = allIPOs.map((IPO) => {
        //   return IPO.companyId;
        // });
        setMyStocks(allStocks);
      } else {
        console.log("Error ", res);
      }
    } catch (error) {
      console.log("Error getting compnaies", error);
    }
  };

  useEffect(() => {
    const userIdentification = localStorage.getItem("stock_it_userId") || null;
    if (userIdentification) {
      setUserId(userIdentification);
    }
  }, []);
  useEffect(() => {
    if (userId) {
      getMyStocks();
    }
  }, [userId]);
  return (
    <div>
      <UserNavbar />

      <div className="viewCompany-body ">
        <div className="viewcomapany-head-box">
          <h4>Portfolio </h4>
        </div>

        <div className="comapnyRequest-first-box">
          <div className="companyRequesest-second-box" role="group"></div>
        </div>

        <div className="viewCompany-table d-flex flex-wrap gap-5 p-5">
          {myStocks.map((co) => {
            return (
              <div key={co._id}>
                <PortfolioCard data={co} />
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <Footer2 />
      </div>
    </div>
  );
};
