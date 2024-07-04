export const AddminViewAllUsers = () => {
  return <div>AddminViewAllUsers</div>;
};

import { useEffect, useState } from "react";
import "../adminViewAllcompanies/adminViewAllCompanies.css";
import { useNavigate } from "react-router-dom";
import { Footer2 } from "../../common/footer2/footer2";
import axiosInstance from "../../../apis/axiosInstance";
import { Button } from "react-bootstrap";
import AdminNavbar from "../../common/adminNavbar";
import { IoReturnUpBack } from "react-icons/io5";
export const AdminViewAllUsers = () => {
  const navigate = useNavigate();

  const [allUsers, setAllUsers] = useState([]);

  const getAllUsers = async () => {
    try {
      const res = await axiosInstance.post("getAllUsers");
      if (res.status === 200) {
        let data = res.data?.data || [];
        setAllUsers(data);
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
          <table border="1px">
            <tr className="viewCompancy-head-row">
              <th> No</th>
              <th>Name</th>
              <th>Email</th>
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
                  <td>{u?.email}</td>
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
                        // navigate(`/adminViewCompany/${co._id}`);
                      }}
                    >
                      View more
                    </Button>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>

      <div>
        <Footer2 />
      </div>
    </div>
  );
};
