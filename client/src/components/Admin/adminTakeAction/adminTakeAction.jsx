import React, { useState } from "react";
import { IoReturnUpBack } from "react-icons/io5";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function AdminTakeAction() {
  const navigate = useNavigate();
  const [allCompanies, setAllCompanies] = useState([
    {
      _id: "duahiudh",
      name: "pen",
      companyType: "Type",
      contact: "4569871230",
      state: "Kerala",
      email: "maanu@123gmail.com",
    },
  ]);

  return (
    <div>
      <div className="viewCompany-body">
        <div className="viewcomapany-head-box d-flex align-items-center justify-content-between px-5">
          <div
            onClick={() => {
              navigate(-1);
            }}
            style={{ cursor: "pointer", color: "white", fontSize: "20px" }}
          >
            <IoReturnUpBack />
          </div>
          <h4>companies list</h4>
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
              <th>Type</th>
              <th>Contact</th>
              <th>State</th>
              <th>Email</th>
              <th>Approve Status</th>
              <th>Action</th>
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
                    <input
                      type="radio"
                      class="btn-check"
                      name="btnradio"
                      id="btnradio2"
                      autocomplete="off"
                    />
                    <label class="btn btn-outline-warning" for="btnradio2">
                    Suspend
                    </label>

                    <input
                      type="radio"
                      class="btn-check"
                      name="btnradio"
                      id="btnradio3"
                      autocomplete="off"
                    />
                    <label class="btn btn-outline-primary" for="btnradio3">
                      Radio 3
                    </label>
                  </td>
                  <td className="viewComapny-viewmore">
                    <Button
                    //   onClick={() => {
                    //     navigate(`/adminViewCompany/${co._id}`);
                    //   }}
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
    </div>
  );
}

export default AdminTakeAction;
