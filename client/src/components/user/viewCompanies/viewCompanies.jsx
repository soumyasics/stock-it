import { useState } from "react"
import "./viewCompanies.css"
export const UserViewCompanies = () => {
    const [tableData, setTableData] = useState([
        { no: "1", name: "Rahul Raj", city: "kochi", status: "active", email: "rahulofficial@gmail.com", contact: "6382821970" },
        { no: "2", name: "Rahul Raj", city: "kochi", status: "active", email: "rahulofficial@gmail.com", contact: "6382821970" },
        { no: "3", name: "Rahul Raj", city: "kochi", status: "active", email: "rahulofficial@gmail.com", contact: "6382821970" },
        { no: "4", name: "Rahul Raj", city: "kochi", status: "active", email: "rahulofficial@gmail.com", contact: "6382821970" }
    ])
    return (
        <div>
            {/* user navbar here  */}
            <div className="viewCompany-body">
                <div className="viewcomapany-head-box">
                    <h4>Users List</h4>
                </div>

                <div className="comapnyRequest-first-box">
                    <div className="companyRequesest-second-box" role="group">
                        <div className="companyrequest-enterpage">
                            <p className="companyRequest-entries">Rows Per Page</p>
                        </div>
                        <select
                            class="form-select form-select-sm companyRequet-dropdown "
                            aria-label="Small select example"  >

                            <option selected> 15</option>
                            <option value="1">16</option>
                            <option value="2">17</option>
                            <option value="3">18</option>
                        </select>
                    </div>
                    <div className="comapanyRequest-search-box">
                        <input
                            type="search"
                            className="companyRequest-serchbox"
                            placeholder="Users"
                        />
                    </div>
                </div>

                <div className="viewCompany-table">
                    <table border="1px">
                        <tr className="viewCompancy-head-row">  
                            <th>SI No</th>
                            <th>Name</th>
                            <th>City</th>
                            <th>Status</th>
                            <th>Email Id</th>
                            <th>Contact Number</th>
                            <th></th>
                        </tr>
                        {
                            tableData.map((details) => {
                                return (
                                    <>

                                        <tr>
                                            <td>{details.no}</td>
                                           <td>{details.name}</td>
                                            <td>{details.city}</td>
                                            <td>{details.status}</td>
                                            <td> {details.email}</td>
                                            <td>{details.contact}</td>
                                            <td className="viewComapny-viewmore">View more</td>
                                        </tr>
                                    </>
                                )
                            })
                        }
                    </table>
                </div>

            </div>



      <div>{/* footer here  */}</div>
    </div>
  );
};
