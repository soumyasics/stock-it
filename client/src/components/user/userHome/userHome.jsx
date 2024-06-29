import "./userHome.css";

import img7 from "../../../assets/images/graph.png";
import img8 from "../../../assets/images/Group 307.svg";
import img9 from "../../../assets/images/Group 308.svg";
import img10 from "../../../assets/images/Group 399.png";
import { UserNavbar } from "../userNavbar/userNavbar";
import { Footer2 } from "../../common/footer2/footer2";

export const UserHomePage = () => {
  return (
    <>
    <UserNavbar />
    <div>
        <div className="about-background">
        <h5 className=" about-heading">
          Invest in everything
          <br />
          Online platform to invest in stocks, derivatives, mutual funds, and
          more
        </h5>
        <img className="img-fluid about-image" src={img7} alt="" />
        <h6 className="about-second-heading">
          “Our mission is to help every Indian confidently Up their wealth”
        </h6>
        <p className="about-pargaraph">
          To empower investors of all levels with real-time, insightful, and
          personalized
          <br />
          financial information, enabling informed decision-making and fostering{" "}
          <br />a community of knowledgeable and confident market participants.
        </p>

        <p className="about-pargaraph">
          To democratize access to the stock market by providing an intuitive,
          data-driven platform that offers real-time information, advanced
          analytics, and <br />
          personalized insights, empowering users to make informed investment
          decisions and achieve financial growth.
        </p>
        <div class="row about-middle-box">
          <div class="col">
            <img src={img8} alt="" />
            <p className="about-middle-box-heading">Accessible</p>
            <p className="about-middle-box-description">
              Powerful Desktop Platform <br />
              to all users
            </p>
          </div>
          <div class="col box1">
            <img src={img9} alt="" />
            <p className="about-middle-box-heading">Affordable</p>
            <p className="about-middle-box-description">
              Cost-Effective Solutions,
              <br />
              Strategic Market Engagement{" "}
            </p>
          </div>
          <div class="col">
            <img src={img10} alt="" />
            <p className="about-middle-box-heading">Simple</p>
            <p className="about-middle-box-description">
              Dedicated modes for investors
              <br />
              and traders to support their individual
              <br />
              needs and goals{" "}
            </p>
          </div>
        </div>
        <h4 className="about-ourVision">Our Vision</h4>

        <div class="row about-second-last-box">
          <div class="col ">
            <div className="about-second-last-inner-box">
              <p> Cost-Effective Solution</p>
            </div>{" "}
            <br />
            <div className="about-second-last-inner-box">
              <p>Tailored Investment Strategies</p>
            </div>
          </div>
          <div class="col">
            <div className="about-second-last-inner-box">
              <p>Strategic Market Engagement</p>
            </div>
            <br />
            <div className="about-second-last-inner-box">
              <p>Accessibility and Support</p>
            </div>
          </div>
          <div class="col">
            <div className="about-second-last-inner-box">
              <p>Real-Time Insights</p>
            </div>
            <br />
            <div className="about-second-last-inner-box">
              <p>Innovation and Adaptability</p>
            </div>
          </div>
        </div>
        <p className="about-pargaraph2">
          {" "}
          To empower investors of all levels with real-time, insightful, and
          personalized financial information, enabling informed decision-making
          and fostering <br />a community of knowledgeable and confident market
          participants.
        </p>
        <div class="row about-last-box">
          <div class="col ">
            <div className="about-4-box">
              <p className="about-4 display-1">4</p>
              <span className="about-core">
                core <br /> values
              </span>
              <span className="about-core-text">
                The key decision-making <br /> criteria for all.z
              </span>
            </div>
          </div>
          <div class="col">
            <div className="about-last-inner-box">
              <p className="about-last-inner-box-head">Clients First</p>
              <p className="about-last-inner-box-text ">
                Our clients' success is paramount - their success <br />
                is our success. We build and nurture long-term
               
              </p>
            </div>

            <div className="about-last-inner-box">
              <p className="about-last-inner-box-head">Objectivity</p>
              <p className="about-last-inner-box-text">
                We assess every investment opportunity <br />
                objectively and with total impartiality. <br />
                Our independence sets us apart and helps ensure <br />
             
              </p>
            </div>
          </div>
          <div class="col">
            <div className="about-last-inner-box">
              <p className="about-last-inner-box-head">Teamwork</p>
              <p className="about-last-inner-box-text">
                Success is built on respect for each individual. <br />
                It is our aim to create a true meritocracy in <br />
               
              </p>
            </div>
            <div className="about-last-inner-box">
              <p className="about-last-inner-box-head">Citizenship</p>
              <p className="about-last-inner-box-text">
                we are profoundly aware of our responsibilities. <br />
                As a good corporate citizen, we aim to give back <br />
             
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="userHome-footer2">
      <Footer2 /> 
      </div>
    </>
  );
};
