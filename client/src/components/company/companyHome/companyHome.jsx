import React from "react";
import "../../common/landingPage-2.css";

import Footer from "../../../components/common/userNavbar/Footer";
import img1 from "../../../assets/images/image logo.png";
import img2 from "../../../assets/images/image 9.png";
import img3 from "../../../assets/images/image 8.png";
import imgGif from "../../../assets/images/headergif.gif";
import imgStep1 from "../../../assets/images/Group 386.png";
import imgStep2 from "../../../assets/images/Group 391.png";
import imgStep3 from "../../../assets/images/Group 393.png";
import img4 from "../../../assets/images/image 13.png";
import img5 from "../../../assets/images/phonegroup.png";
import img6 from "../../../assets/images/commentsgif.gif";
import { CompanyNavbar } from "../companyNavbar/companyNavbar";
export const CompanyHome = () => {
  return (
    <>
      <CompanyNavbar />
      <div className="landingheader-main">
        <div className="landingheader">
          <div className="landingheader-gif">
            <img src={imgGif} alt="" />
          </div>
          <div className="landingheader-h1">
            <div className="landingheader-left">
              <h1>Welcome to stock it</h1>
              <br />
              <p>
                Your Gateway to Informed Investing and Empowered Trading.
                Explore real-time stock prices, <br />
                dynamic trading active, and comprehensive portfolio management
                tools.
              </p>
              <br />
              <p>
                Join us in revolutionizing the stock trading experience - <br />
                where informed decision meet seamless transaction
              </p>
              <div className="landingheader-left-btn">
                <button type="button" className="btn btn-primary">
                  Get Started
                </button>
              </div>
            </div>
            <div className="landingheader-right">
              <img src={img1} alt="" />
            </div>
          </div>

          <div className="landingheader-bottom">
            <div className="landingheader-left-bottom">
              <div className="bottom-images">
                <div className="bottom-img1">
                  <img src={img2} alt="" />
                  <h6>Adani Enterprises Ltd</h6>
                </div>
                <div className="bottom-img2">
                  <img src={img3} alt="" />
                  <h6>Coal In Indian Ltd</h6>
                </div>
              </div>
            </div>

            <div className="landingheader-right-bottom">
              <h4>
                Become a Better{" "}
                <span className="middle-text"> Stock Investor!</span>
              </h4>
              <br />
              <p>
                Stock it Portal helps investors make efficient stock research
                and analysis by providing quality fundamental data with
                insightful Visuals !!
              </p>
            </div>
          </div>

          <div className="landingheader-h2">
            <div className="landingheader-h2-leftbox">
              <div className="leftbox-inner">
                <h3>Gainers</h3>
                <table className="left-table">
                  <tr>
                    <th>Company</th>
                    <th>Price</th>
                    <th>Precent</th>
                    <th>Change</th>
                  </tr>
                  <tr>
                    <td>Adani Enterprises Ltd</td>
                    <td>₹8387.03</td>
                    <td className="highpercent-clr">+8.98%</td>
                    <td className="highpercent-clr">+ ₹1897</td>
                  </tr>
                  <tr>
                    <td>Mahindra Ltd</td>
                    <td>₹7444.98</td>
                    <td className="highpercent-clr">+7.08%</td>
                    <td className="highpercent-clr">+ ₹943</td>
                  </tr>
                  <tr>
                    <td>Axis Bank Ltd</td>
                    <td>₹6791.09</td>
                    <td className="highpercent-clr">+6.59%</td>
                    <td className="highpercent-clr">+ ₹900</td>
                  </tr>
                  <tr>
                    <td>Reliance</td>
                    <td>₹3597.35</td>
                    <td className="highpercent-clr">+6.01%</td>
                    <td className="highpercent-clr">+ ₹828</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Maruti</td>
                    <td>₹2890.04</td>
                    <td className="highpercent-clr">+5.88%</td>
                    <td className="highpercent-clr">+ ₹790</td>
                  </tr>
                  <tr>
                    <td>Ultra Cem Co</td>
                    <td>₹1378.3</td>
                    <td className="highpercent-clr">+4.98%</td>
                    <td className="highpercent-clr">+ ₹600</td>
                  </tr>
                </table>
              </div>
            </div>
            <div className="landingheader-h2-box"></div>
            <div className="landingheader-h2-rightbox">
              <div className="rightbox-inner">
                <h3>Losers</h3>
                <table className="right-table">
                  <tr>
                    <th>Company</th>
                    <th>Price</th>
                    <th>Precent</th>
                    <th>Change</th>
                  </tr>
                  <tr>
                    <td>Coal In dia Ltd</td>
                    <td>₹838</td>
                    <td className="lowpercent-clr">-10.98%</td>
                    <td className="lowpercent-clr">- ₹980</td>
                  </tr>
                  <tr>
                    <td>Hindalco industries ltd</td>
                    <td>₹744</td>
                    <td className="lowpercent-clr">-8.08%</td>
                    <td className="lowpercent-clr">- ₹943</td>
                  </tr>
                  <tr>
                    <td>NTPC Ltd</td>
                    <td>₹679</td>
                    <td className="lowpercent-clr">-7.59%</td>
                    <td className="lowpercent-clr">- ₹900</td>
                  </tr>
                  <tr>
                    <td>Yes Bank</td>
                    <td>₹359</td>
                    <td className="lowpercent-clr">-7.01%</td>
                    <td className="lowpercent-clr">- ₹828</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Eichermot</td>
                    <td>₹289</td>
                    <td className="lowpercent-clr">-6.88%</td>
                    <td className="lowpercent-clr">- ₹790</td>
                  </tr>
                  <tr>
                    <td>M & M</td>
                    <td>₹138</td>
                    <td className="lowpercent-clr">-5.98%</td>
                    <td className="lowpercent-clr">- ₹600</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <div className="landingheader-h2-middle">
            <h1>Start With Our Simple Steps</h1>
            <div className="middle-step">
              <div className="middle-step-1">
                <img src={imgStep1} alt="" />
                <p>
                  Step 1 <br /> Register yourserlf
                </p>
              </div>
              <div className="middle-step-2">
                <img src={imgStep2} alt="" />
                <p>
                  Step 2 <br />
                  search for your <br /> Favourite listed companies
                </p>
              </div>
              <div className="middle-step-3">
                <img src={imgStep3} alt="" />
                <p>
                  Step 3 <br /> Browse through <br /> easy-to-understand and
                  visually <br />
                  appealing data
                </p>
              </div>
            </div>
            <div className="landingheader-h2-footer">
              <div className="landingheader-h2-footer-img">
                <img src={img4} alt="" />
              </div>
              <div className="landingheader-h2-parag">
                <h4>Building Awesome Investing & Trading Platforms</h4>
                <br />
                <p>
                  Building awesome investing and trading platforms involves{" "}
                  <br />
                  integrating a variety of features and functionalities to
                  ensure <br />a seamless, user-friendly, and robust experience
                  for users. <br />
                  Here are some key elements and steps to consider:
                </p>
              </div>
            </div>
          </div>
          <div className="landingheader-h3">
            <div className="landingheader-h3-content">
              <h2>Always Keeping You First</h2>
              <p>
                Our users-traders & investor-will always be our priority,even
                when we're building new features or delivering
                <br /> customer support everyday.
              </p>
            </div>
            <div className="landingheader-h3-images">
              <img src={img5} alt="" />
              <h6>What India feels about Grow!!</h6>
            </div>
            <div className="h3-comments">
              <div>
                <img src={img6} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};
