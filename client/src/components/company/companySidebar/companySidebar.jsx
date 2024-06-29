import React, { useState } from 'react'
import './companySidebar.css'
import profilePic from '../../../assets/images/kfc.svg'
import titleImg from '../../../assets/images/Group 398.png'
import img1 from '../../../assets/images/ipos.png'
import img2 from '../../../assets/images/divident.svg'
import img3 from '../../../assets/images/orderIcon.svg'

function CompanySidebar() {
    const [show, setShow] = useState(false);
    return (
        <div>
            <div className='companysidebar-main'>
                <div className='companysidebar-profile'>
                    <div className='companyprofile'>
                        <img src={profilePic} alt="Profile" />
                    </div>
                    <div className='companyprofile-detail'>
                        <h6>kfc</h6>
                        <p>officilakfc@gmail.com</p>
                    </div>
                </div>
                <div className='companysidebar-title'>
                    <img src={titleImg} alt="" />
                </div>
                <div className='companysidebar-content'>
                    <div className='companysidebar-content-companyipos'>
                        <tr>
                            <td><img src={img1} alt="icon" /></td>
                            <td><h6>Company IPOs</h6></td>
                        </tr>
                    </div>
                    <div className='companysidebar-content-dividend'>
                        <tr>
                            <td><img src={img2} alt="" /></td>
                           <td><h6>Dividend</h6></td> 
                        </tr>
                    </div>
                    <div className='companysidebar-content-receive'>
                            <tr>
                                <td><img src={img3} alt="" /></td>
                                <td> <div className="receiveorder-drop">
                                <button type="button" onClick={() => setShow(!show)}>
                                    {" "}
                                    Companies
                                </button>
                                {show && (
                                    <div className="sidebar-drop-1">
                                        <ul>
                                            <li>
                                               Buy order
                                            </li>
                                            <li>
                                               Sell Order
                                            </li>
                                            
                                        </ul>
                                    </div>
                                )}
                            </div></td>
                            </tr>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CompanySidebar