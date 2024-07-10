import { useEffect, useState } from "react";
import "./buyStocks.css";
import { useNavigate } from "react-router-dom";
import { UserNavbar } from "../userNavbar/userNavbar";
import { Footer2 } from "../../common/footer2/footer2";
import axiosInstance from "../../../apis/axiosInstance";
import { Button } from "react-bootstrap";
import { StockCard } from "./stockCard";

export const BuyStocks = () => {
  const navigate = useNavigate();

  const [allCompanies, setAllCompanies] = useState([]);

  const getAllUpcomingCompanies = async () => {
    try {
      const res = await axiosInstance.get("getAllApprovedIPOs");
      if (res.status === 200) {
        const allIPOs = res.data?.data || [];
        // const allCompanies = allIPOs.map((IPO) => {
        //   return IPO.companyId;
        // });
        setAllCompanies(allIPOs);
      } else {
        console.log("Error ", res);
      }
    } catch (error) {
      console.log("Error getting compnaies", error);
    }
  };

  useEffect(() => {
    getAllUpcomingCompanies();
  }, []);
  return (
    <div>
      <UserNavbar />

      <div className="viewCompany-body ">
        <div className="viewcomapany-head-box">
          <h4>Buy Stocks </h4>
        </div>

        <div className="comapnyRequest-first-box">
          <div className="companyRequesest-second-box" role="group"></div>
        </div>

        <div className="viewCompany-table d-flex flex-wrap gap-5 p-5">
          {allCompanies.map((co) => {
            return (
              <div key={co._id}>
                <StockCard data={co} />
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
