import { useEffect, useState } from "react";
import "./upcomingCompanies.css";
import { useNavigate } from "react-router-dom";
import { UserNavbar } from "../userNavbar/userNavbar";
import { Footer2 } from "../../common/footer2/footer2";
import axiosInstance from "../../../apis/axiosInstance";
import { Button } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { BsSearch } from "react-icons/bs";

export const UpcomingCompanies = () => {
  const navigate = useNavigate();
  const [fixedData, setFixedData] = useState([]);
  const [allCompanies, setAllCompanies] = useState([]);

  const getAllUpcomingCompanies = async () => {
    try {
      const res = await axiosInstance.get("getAllPendingIPOs");
      if (res.status === 200) {
        const allIPOs = res.data?.data || [];
        const allCompanies = allIPOs.map((IPO) => {
          return IPO.companyId;
        });
        setAllCompanies(allCompanies);
        setFixedData(allCompanies);
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
        return items.name.toLowerCase().includes(value.toLowerCase());
      });
      setAllCompanies(filterData);
    } else {
      setAllCompanies(fixedData);
    }
  };

  return (
    <div>
      <UserNavbar />

      <div className="viewCompany-body ">
        <div className="viewcomapany-head-box">
          <h4>Upcoming companies IPOs</h4>
        </div>

        <div className="comapnyRequest-first-box">
          <div className="companyRequesest-second-box" role="group"></div>
        </div>

        <div className="viewCompany-table ">
          <InputGroup
            className="mb-3 p-3"
            style={{ width: "300px", marginLeft: "73%" }}
          >
            <Form.Control
              placeholder="Search"
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={handleSearch}
            />
            <InputGroup.Text id="basic-addon1">
              <BsSearch />
            </InputGroup.Text>
          </InputGroup>
          {allCompanies.length == 0 ? (
            <h3 className="fs-2" style={{fontWeight:"bold"}}>No data Found</h3>
          ) : (
            <table border="1px">
              <tr className="viewCompancy-head-row">
                <th>No</th>
                <th>Name</th>
                <th>Type</th>
                <th>Contact</th>
                <th>State</th>
                <th>Email</th>
                <th>View More</th>
              </tr>
              {allCompanies.map((co, i) => {
                return (
                  <tr key={co._id}>
                    <td>{i + 1}</td>
                    <td>{co.name}</td>
                    <td>{co.companyType}</td>
                    <td>{co.contact}</td>
                    <td>{co.state}</td>
                    <td>{co.email}</td>
                    <td className="viewComapny-viewmore">
                      <Button
                        onClick={() => {
                          navigate(`/companyDetails/${co._id}`);
                        }}
                      >
                        View more
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </table>
          )}
        </div>
      </div>

      <div>
        <Footer2 />
      </div>
    </div>
  );
};
