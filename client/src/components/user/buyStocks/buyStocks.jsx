import { useEffect, useState } from "react";
import "./buyStocks.css";
import { useNavigate } from "react-router-dom";
import { UserNavbar } from "../userNavbar/userNavbar";
import { Footer2 } from "../../common/footer2/footer2";
import axiosInstance from "../../../apis/axiosInstance";
import { Button } from "react-bootstrap";
import { StockCard } from "./stockCard";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { BsSearch } from "react-icons/bs";

export const BuyStocks = () => {
  const navigate = useNavigate();
  const [allCompanies, setAllCompanies] = useState([]);
  const [fixedData, setFixedData] = useState([]);
  const getAllUpcomingCompanies = async () => {
    try {
      const res = await axiosInstance.get("getAllApprovedIPOs");
      if (res.status === 200) {
        const allIPOs = res.data?.data || [];
        // const allCompanies = allIPOs.map((IPO) => {
        //   return IPO.companyId;
        // });
        setAllCompanies(allIPOs);
        setFixedData(allIPOs);
        console.log("allIpos",allIPOs);
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

  const handleSearch = (e) => {
    const value = e.target.value;
    if (value) {
      const filterData = fixedData.filter((items) => {
        return items.companyId?.name.toLowerCase().includes(value.toLowerCase());
      });
      setAllCompanies(filterData)
    }else{
      setAllCompanies(fixedData)
    }
  };
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
        <InputGroup
            className="mb-3 p-3"
            style={{ width: "300px", marginLeft: "73%" }}
          >
            <Form.Control
              placeholder="Search Stocks"
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={handleSearch}
            />
            <InputGroup.Text id="basic-addon1">
              <BsSearch />
            </InputGroup.Text>
          </InputGroup>
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
