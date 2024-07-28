import { useEffect, useState } from "react";
import "../adminViewAllcompanies/adminViewAllCompanies.css";
import { useNavigate } from "react-router-dom";
import { Footer2 } from "../../common/footer2/footer2";
import axiosInstance from "../../../apis/axiosInstance";
import { Button } from "react-bootstrap";
import AdminNavbar from "../../common/adminNavbar";
import { IoReturnUpBack } from "react-icons/io5";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { BsSearch } from "react-icons/bs";

export const AdminAllIPO = () => {
  const navigate = useNavigate();

  const [allIPOs, setAllIPOs] = useState([]);
  const [fixedData, setFixedData] = useState([]);

  const getAllIPOs = async () => {
    try {
      const res = await axiosInstance.get("getIpos");
      if (res.status === 200) {
        let data = res.data?.data || [];
        data.reverse()
        setAllIPOs(data);
        setFixedData(data);
      } else {
        console.log("Error ", res);
      }
    } catch (error) {
      console.log("Error getting ipos", error);
    }
  };

  console.log("ipos", allIPOs);
  useEffect(() => {
    getAllIPOs();
  }, []);
  const handleSearch = (e) => {
    const value = e.target.value;
    if (value) {
      const filterData = fixedData.filter((items) => {
        return items.companyId?.name.toLowerCase().includes(value.toLowerCase());
      });
      setAllIPOs(filterData);
    } else {
      setAllIPOs(fixedData);
    }
  };
  // console.log("all",allIPOs);
  return (
    <div>
      <AdminNavbar />

      <div className="viewCompany-body">
        <div className="viewcomapany-head-box d-flex align-items-center justify-content-between px-5">
          <div
            onClick={() => {
              navigate("/admin");
            }}
            style={{ cursor: "pointer", color: "white", fontSize: "20px" }}
          >
            <IoReturnUpBack />
          </div>
          <h4>All  IPOs</h4>
          <div></div>
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
          {
            allIPOs.length==0? <h3 className="fs-3" style={{fontWeight:"bold"}}>No Data Found</h3>:
          
          <table border="1px">
            <thead>
              <tr className="viewCompancy-head-row">
                <th>Sl. No</th>
                <th>Company name</th>
                <th>Total shares</th>
                <th>Cost per share </th>
                <th>Market Capitalization</th>
                <th>Approved Status</th>
                <th>View More</th>
              </tr>
            </thead>
            <tbody>
              {allIPOs.map((u, i) => {
                return (
                  <tr key={u._id}>
                    <td>{i + 1}</td>
                    <td>{u?.companyId?.name}</td>
                    <td>{u?.totalShares}</td>
                    <td>{u?.costPerShare}</td>
                    <td> {u?.capitation}</td>
                    <td>
                      {u?.adminApproved === "approved" ? (
                        <p className="text-success"> Approved </p>
                      ) : u?.adminApproved === "rejected" ? (
                        <p className="text-danger"> Rejected</p>
                      ) : (
                        <p>Pending </p>
                      )}
                    </td>
                    <td>
                      <td className="viewComapny-viewmore">
                        <Button
                          onClick={() => {
                            navigate(`/adminIPOPending/${u?._id}`);
                          }}
                        >
                          View more
                        </Button>
                      </td>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>}
          
        </div>
      </div>

      <div>
        <Footer2 />
      </div>
    </div>
  );
};
