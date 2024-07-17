import { useEffect, useState } from "react";
import "./viewCompanies.css";
import { useNavigate } from "react-router-dom";
import { UserNavbar } from "../userNavbar/userNavbar";
import { Footer2 } from "../../common/footer2/footer2";
import axiosInstance from "../../../apis/axiosInstance";
import { Button } from "react-bootstrap";
import CompanyAddComplaint from "../../company/companyAddComplaint/companyAddComplaint";

export const UserViewCompanies = () => {
  const navigate = useNavigate();

  const [allCompanies, setAllCompanies] = useState([]);

  const getAllCompanies = async () => {
    try {
      const res = await axiosInstance.post("viewCompanies");
      if (res.status === 200) {
        const data = res.data?.data || [];
        setAllCompanies(data);
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
  return (
    <div>
      <UserNavbar />

      <div className="viewCompany-body ">
        <div className="viewcomapany-head-box">
          <h4>Active companies list</h4>
        </div>

        <div className="comapnyRequest-first-box">
          <div className="companyRequesest-second-box" role="group"></div>
        </div>

        <div className="viewCompany-table ">
          <table border="1px">
            <tr className="viewCompancy-head-row">
              <th>No</th>
              <th>Name</th>
              <th>Type</th>
              <th>Contact</th>
              <th>State</th>
              <th>Email</th>
              <th>View More</th>
              <th>Complaint</th>
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
                  <td className="viewComapny-viewmore">
                    <Button
                      className=" btn-danger btn"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                    >
                      Add Complaint
                    </Button>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
      {/* modal page */}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
               Add Complaint Here
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body modal-image">
              <CompanyAddComplaint />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer2 />
      </div>
    </div>
  );
};
