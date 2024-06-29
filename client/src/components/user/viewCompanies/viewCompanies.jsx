import { useEffect, useState } from "react"
import "./viewCompanies.css"
import { useNavigate } from "react-router-dom";
import { UserNavbar } from "../userNavbar/userNavbar";
import { Footer2 } from "../../common/footer2/footer2";
import axiosInstance from "../../../apis/axiosInstance";
import { Button } from "react-bootstrap";

export const UserViewCompanies = () => {
    const navigate = useNavigate();
    const [tableData, setTableData] = useState([
        { no: "1", name: "Rahul Raj", city: "kochi", status: "active", email: "rahulofficial@gmail.com", contact: "6382821970" },
        { no: "2", name: "Rahul Raj", city: "kochi", status: "active", email: "rahulofficial@gmail.com", contact: "6382821970" },
        { no: "3", name: "Rahul Raj", city: "kochi", status: "active", email: "rahulofficial@gmail.com", contact: "6382821970" },
        { no: "4", name: "Rahul Raj", city: "kochi", status: "active", email: "rahulofficial@gmail.com", contact: "6382821970" }
    ])

    const [allCompanies, setAllCompanies] = useState([]);
    
    const getAllCompanies = async () => {
        try {
            const res = await axiosInstance.post('viewCompanies');
            if (res.status === 200) {
                const data = res.data?.data || [];
                setAllCompanies(data);
            }else {
                console.log("Error ", res)
            }
        } catch (error) {
            console.log("Error getting compnaies", error )
        }
    }

    console.log("como", allCompanies)
    useEffect(() => {
        getAllCompanies()
    }, [])
    return (
        <div>
            {/* user navbar here  */}
            <UserNavbar />

            <div className="viewCompany-body ">
                <div className="viewcomapany-head-box">
                    <h4>Active companies List</h4>
                </div>

                <div className="comapnyRequest-first-box">
                    <div className="companyRequesest-second-box" role="group">
                        {/* <div className="companyrequest-enterpage">
                            <p className="companyRequest-entries">Rows Per Page</p>
                        </div> */}
                        {/* <select
                            class="form-select form-select-sm companyRequet-dropdown "
                            aria-label="Small select example"  >

                            <option selected> 15</option>
                            <option value="1">16</option>
                            <option value="2">17</option>
                            <option value="3">18</option>
                        </select> */}
                    </div>
                    {/* <div className="comapanyRequest-search-box">
                        <input
                            type="search"
                            className="companyRequest-serchbox"
                            placeholder="Users"
                        />
                    </div> */}
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
                            <th>
                                View More 
                            </th>
                        </tr>
                        {
                            allCompanies.map((co, i) => {
                                return (
                                    

                                        <tr key={co._id}>
                                            <td>{i + 1}</td>
                                           <td>{co.name}</td>
                                            <td>{co.companyType}</td>
                                            <td>{co.contact}</td>
                                            <td> {co.state}</td>
                                            <td>{co.email}</td>
                                            <td className="viewComapny-viewmore">
                                                <Button onClick={() => {
                                                    navigate(`/companyDetails/${co._id}`)
                                                }}>

                                                View more
                                                </Button>
                                                </td>
                                        </tr>
                                    
                                )
                            })
                        }
                    </table>
                </div>

            </div>



      <div >
        <Footer2 />
      </div>
    </div>
  );
};
