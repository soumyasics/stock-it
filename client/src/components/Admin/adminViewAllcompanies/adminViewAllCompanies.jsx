import { useEffect, useState } from "react";
import "./adminViewAllCompanies.css";
import { useNavigate } from "react-router-dom";
import { Footer2 } from "../../common/footer2/footer2";
import axiosInstance from "../../../apis/axiosInstance";
import { Button } from "react-bootstrap";
import AdminNavbar from "../../common/adminNavbar";
import { IoReturnUpBack } from "react-icons/io5";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { BsSearch } from "react-icons/bs";
export const AdminViewAllCompanies = () => {
  const navigate = useNavigate();
const[fixedData,setFixedData]=useState([])
  const [allCompanies, setAllCompanies] = useState([]);

  const getAllCompanies = async () => {
    try {
      const res = await axiosInstance.post("viewCompanies");
      if (res.status === 200) {
        let data = res.data?.data || [];
        data.reverse();
        setAllCompanies(data);
        setFixedData(data)
      } else {
        console.log("Error ", res);
      }
    } catch (error) {
      console.log("Error getting compnaies", error);
    }
  };
  console.log("como", allCompanies);
  useEffect(() => {
    getAllCompanies();
  }, []);

  const handleSearch=(e)=>{
const value=e.target.value
if(value){
  const filterData=fixedData.filter((items)=>{
    return items.name.toLowerCase().includes(value.toLowerCase())
  });setAllCompanies(filterData)
}else{
  setAllCompanies(fixedData)
}
  }
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
          <h4>Active companies list</h4>
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
          {allCompanies.length==0?<h3 className="fs-3" style={{fontWeight:"bold"}}>No Data Found</h3>:
          <table border="1px">
            <tr className="viewCompancy-head-row">
              <th> No</th>
              <th>Name</th>
              <th>Type</th>
              <th>Contact</th>
              <th>State</th>
              <th>Email</th>
              <th>Approve Status</th>
              <th>Active Status</th>
              <th>View More</th>
            </tr>
            {allCompanies.map((co, i) => {
              return (
                <tr key={co._id}>
                  <td>{i + 1}</td>
                  <td>{co.name}</td>
                  <td>{co.companyType}</td>
                  <td>{co.contact}</td>
                  <td> {co.state}</td>
                  <td>{co.email}</td>
                  <td>
                    {co.adminApproved ? (
                      <p className="text-success"> Approved </p>
                    ) : (
                      <p className="text-danger">Not Approved</p>
                    )}
                  </td>
                  <td>
                    {co.isActive ? (
                      <p className="text-success">Active</p>
                    ) : (
                      <p className="text-danger">Not Active</p>
                    )}
                  </td>
                  <td className="viewComapny-viewmore">
                    <Button
                      onClick={() => {
                        navigate(`/adminViewCompany/${co._id}`);
                      }}
                    >
                      View more
                    </Button>
                  </td>
                </tr>
              );
            })}
          </table>}
        </div>
      </div>

      <div>
        <Footer2 />
      </div>
    </div>
  );
};
