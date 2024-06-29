import "./userHomeTable.css"
import img1 from "../../../assets/images/image 61.png"
export const UserHomeTable = () => {
    return(
    <div>
        <div class=" userHomeTable-body ">
            <div class="row">
                <div class="col-sm-6 userHomeTable-left-box ">
                    <div>
                        <img src={img1} alt="" />
                    </div>
                    <div className="userHomeTable-left-inner-box">
                        <h3>Upcoming Companies</h3>

                        <li>Indigene Ltd </li>
                        <li>Aadhar Housing Finance</li>
                        <li>Aadhar Housing Finance</li>
                        <li>Ola </li>
                        <li>Snapdeal</li>
                        <li>Fb India Limited </li>
                        <li className="userHomeTable-viewMore">View All</li>

                    </div>
                </div>
                <div class="col-sm-6">
                    <div className="userHomeTable-right-inner-box">
                        <h3>Recently Added Companies</h3>
                        <table className="userHome-table-table">
                            <tr>
                                <th>Company</th>
                                <th>Price</th>
                                <th>Percent </th>
                                <th>Change</th>
                            </tr>
                            <tr>
                                <td>Adani Enterprises Ltd</td>
                                <td>₹8387.03</td>
                                <td className="userHome-Table-td-color">+8.98%</td>
                                <td className="userHome-Table-td-color">+₹1897</td>
                            </tr>
                            <tr>
                                <td>Mahindra  Ltd</td>
                                <td>₹7444.98</td>
                                <td className="userHome-Table-td-color">+7.08%</td>
                                <td className="userHome-Table-td-color">+ ₹943  </td>
                            </tr>
                            <tr>
                                <td>Axis Bank Ltd</td>
                                <td>₹6791.09</td>
                                <td className="userHome-Table-td-color">+6.59%</td>
                                <td className="userHome-Table-td-color">+ ₹900</td>
                            </tr>
                            <tr>
                                <td>Reliance</td>
                                <td>₹3597.35</td>
                                <td className="userHome-Table-td-color">+6.01%</td>
                                <td className="userHome-Table-td-color">+ ₹828</td>
                            </tr>
                            <tr>
                                <td>Maruti</td>
                                <td>₹2890.04</td>
                                <td className="userHome-Table-td-color">+5.88%</td>
                                <td className="userHome-Table-td-color">+ ₹790</td>
                            </tr>
                            <tr>
                                <td>Ultra Cem Co</td>
                                <td>₹1387.3</td>
                                <td className="userHome-Table-td-color">+4.98%  </td>
                                <td className="userHome-Table-td-color">+₹980</td>
                            </tr>
                            <tr>
                                <td>Hindalco Industries Ltd</td>
                                <td>₹744</td>
                                <td className="userHome-Table-td-color">+8.08%</td>
                                <td className="userHome-Table-td-color">+₹943</td>
                            </tr>
                            <tr>
                                <td>NTPC Ltd</td>
                                <td>₹679</td>
                                <td className="userHome-Table-td-color">+7.59%</td>
                                <td className="userHome-Table-td-color">+₹900</td>
                            </tr>
                            <tr>
                                <td>Yes Bank</td>
                                <td>₹359</td>
                                <td className="userHome-Table-td-color">+7.01%</td>
                                <td className="userHome-Table-td-color">+₹828</td>
                            </tr>
                            <tr>
                                <td>Eichermot</td>
                                <td>₹289</td>
                                <td className="userHome-Table-td-color">+6.88%</td>
                                <td v>+₹790</td>
                            </tr>
                            <tr>
                                <td>M & M</td>
                                <td>₹138</td>
                                <td className="userHome-Table-td-color">+5.98%</td>
                                <td className="userHome-Table-td-color">+₹600</td>
                            </tr>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    </div>
)
}