import { useEffect, useState } from "react";
import "./viewAllEts.css";
import { useNavigate } from "react-router-dom";
import { Footer2 } from "../../common/footer2/footer2";
import axiosInstance from "../../../apis/axiosInstance";
import { Button } from "react-bootstrap";
import AdminNavbar from "../../common/adminNavbar";
import { IoReturnUpBack } from "react-icons/io5";

export const AdminViewAllETs = () => {
  const navigate = useNavigate();

  const [allETs, setAllETs] = useState([]);

  const getAllETs = async () => {
    try {
      const res = await axiosInstance.post("getAllTutors");
      if (res.status === 200) {
        let data = res.data?.data || [];
        const activeEts = data?.filter((et) => et.adminApproved === "approve");
        activeEts.reverse();
        setAllETs(activeEts);
      } else {
        console.log("Error ", res);
      }
    } catch (error) {
      console.log("Error getting compnaies", error);
    }
  };
  console.log("ets", allETs);

  useEffect(() => {
    getAllETs();
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
          <h4>All Educational Tutors</h4>
          <div></div>
        </div>

        <div className="comapnyRequest-first-box">
          <div className="companyRequesest-second-box" role="group"></div>
        </div>

        <div className="viewCompany-table ">
          <table border="1px">
            <tr className="viewCompancy-head-row">
              <th>Sl No</th>
              <th>Name</th>
              <th>Email Id</th>
              <th>Contact</th>
              <th>Approve Status</th>
              <th>Active Status</th>
              <th>View More</th>
            </tr>
            {allETs.map((co, i) => {
              return (
                <tr key={co?._id}>
                  <td>{i + 1}</td>
                  <td>{co?.fullName}</td>
                  <td> {co?.email}</td>
                  <td>{co?.contactNumber}</td>
                  <td>
                    {co.adminApproved === "approve" ? (
                      <p className="text-success"> Approved </p>
                    ) : co?.adminApproved === "pending" ? (
                      <p className="text-light"> Pending </p>
                    ) : (
                      <p className="text-danger">Rejected</p>
                    )}
                  </td>
                  <td>
                    {co.isActive ? (
                      <p className="text-success"> Active </p>
                    ) : (
                      <p className="text-danger"> In active </p>
                    )}
                  </td>
                 

                  <td className="viewComapny-viewmore">
                    <Button
                      onClick={() => {
                        navigate(`/adminViewAllETs/${co?._id}`);
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
