import React, { useState } from 'react'
import './newAdminsidebar.css'
import titleImg from '../../assets/images/Group 398.png'
import vector1 from "../../assets/images/Vector.png";
import vector2 from "../../assets/images/company-icon.png";
import vector3 from "../../assets/images/ipos.png";
import vector4 from "../../assets/images/education.png";
import img2 from "../../assets/images/stock.png";
import img3 from "../../assets/images/action.png";
import img4 from "../../assets/images/reset.png";
import img5 from "../../assets/images/logout.png";
import { useNavigate } from 'react-router-dom';
import AdminNavbar from '../common/adminNavbar';

function NewAdminsidebar() {
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);

    const navigate = useNavigate();
    const adminLogout = () => {
        localStorage.setItem("stock_it_admin_login", false);
        navigate("/AdminLogin");
      };

    return (
        
        <div>
            <div className="adminSidebar-main">
                <div className="adminSidebar-title-head">
                    <img src={titleImg} alt="" />
                </div>
                <div className="adminSidebar-content ">
                    <div className="adminSidebar-user-grid">
                        <div className="adminSidebar-user">
                            <img src={vector1} alt="" />
                            <h4>User</h4>
                        </div>
                        <div className="adminSidebar-companies">
                            <div className="sidebar-company-drop">
                                <img src={vector2} alt="" />
                                <button type="button" onClick={() => setShow(!show)}>
                                    {" "}
                                    Companies
                                </button>
                                {show && (
                                    <div className="sidebar-drop-1">
                                        <ul>
                                            <li
                                                onClick={() => {
                                                    viewAllCompanyRequest("company-request");
                                                }}
                                            >
                                                View all Requests
                                            </li>
                                            <li
                                                onClick={() => {
                                                    viewAllCompanyRequest("company-request");
                                                }}
                                            >
                                                View all Companies
                                            </li>
                                            <li>View all Company Article</li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="adminSidebar-companyipos">
                            <div className="sidebar-ipos-drop">
                                <img src={vector3} alt="" />
                                <button type="button" onClick={() => setShow1(!show1)}>
                                    {" "}
                                    Company IPOs{" "}
                                </button>
                                {show1 && (
                                    <div className="sidebar-drop-2">
                                        <ul>
                                            <li
                                                onClick={() => {
                                                    changePage("");
                                                }}
                                            >
                                                View all Request
                                            </li>
                                            <li>View all Company IPOs</li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="adminSidebar-education">
                            <div className="sidebar-education-drop">
                                <img src={vector4} alt="" />
                                <button type="button" onClick={() => setShow2(!show2)}>
                                    Educational Tutors
                                </button>
                                {show2 && (
                                    <div className="sidebar-drop-3">
                                        <ul>
                                            <li>View all Request</li>
                                            <li> View all Educational Tutors</li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="adminSidebar-stock">
                            <div className="adminSidebar-stock-grid">
                                <img src={img2} alt="" />
                            </div>
                            <div className="stock-h1">
                                <h5>Stock</h5>
                            </div>
                        </div>
                        <div className="adminSidebar-takeaction">
                            <div className="adminSidebar-takeaction-grid">
                                <img src={img3} alt="" />
                            </div>
                            <div className="takeaction-h1">
                                <h5>Take Action</h5>
                            </div>
                        </div>
                        <div className="adminSidebar-resetpassword">
                            <div className="adminSidebar-resetpassword-grid">
                                <img src={img4} alt="" />
                            </div>
                            <div className="reset-h1">
                                <h5>Reset Password</h5>
                            </div>
                        </div>
                        <div className="adminSidebar-logout">
                            <div className="adminSidebar-logout-grid">
                                <img src={img5} alt="" />
                            </div>
                            <div
                                className="logout-h1 text-danger"
                                style={{ cursor: "pointer" }}
                                onClick={adminLogout}
                            >
                                <h5>Logout</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewAdminsidebar