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

export const AdminViewAllUsers = () => {
  const navigate = useNavigate();

  const [allUsers, setAllUsers] = useState([]);
  const [fixedData, setFixedData] = useState([]);
  const getAllUsers = async () => {
    try {
      const res = await axiosInstance.post("getAllUsers");
      if (res.status === 200) {
        let data = res.data?.data || [];
        setAllUsers(data);
        setFixedData(data);
      } else {
        console.log("Error ", res);
      }
    } catch (error) {
      console.log("Error getting compnaies", error);
    }
  };

  console.log("como", allUsers);
  useEffect(() => {
    getAllUsers();
  }, []);

  const navigateToViewUserDetail = (id) => {
    console.log("check", id);
    navigate(`/adminVIewUserDetail/${id}`);
  };
  const handleSearch = (e) => {
    const value = e.target.value;
    if (value) {
      const filterData = fixedData.filter((items) => {
        return items.firstName.toLowerCase().includes(value.toLowerCase());
      });
      setAllUsers(filterData);
    } else {
      setAllUsers(fixedData);
    }
  };
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
          <h4>All Users</h4>
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
          {allUsers.length == 0 ? (
            <h3 className="fs-3" style={{ fontWeight: "bold" }}>
              No Data Found
            </h3>
          ) : (
            <table border="1px">
              <tr className="viewCompancy-head-row">
                <th> No</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Contact </th>
                <th>Email</th>
                <th>Status</th>

                <th>View More</th>
              </tr>
              {allUsers.map((u, i) => {
                return (
                  <tr key={u._id}>
                    <td>{i + 1}</td>
                    <td>{u?.firstName}</td>
                    <td>{u?.gender}</td>
                    <td> {u?.contactNumber}</td>
                    <td>{u.email}</td>
                    <td>
                      {u.isActive ? (
                        <p className="text-success">Active</p>
                      ) : (
                        <p className="text-danger"> In active </p>
                      )}
                    </td>

                    <td className="viewComapny-viewmore">
                      <Button
                        onClick={() => {
                          navigateToViewUserDetail(u._id);
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
