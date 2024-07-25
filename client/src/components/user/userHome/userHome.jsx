import "./userHome.css";

import img7 from "../../../assets/images/graph.png";
import img8 from "../../../assets/images/Group 307.svg";
import img9 from "../../../assets/images/Group 308.svg";
import img10 from "../../../assets/images/Group 399.png";
import { UserNavbar } from "../userNavbar/userNavbar";
import { Footer2 } from "../../common/footer2/footer2";
import { UserWelcome } from "../../educational-tutors/userWelcome/userWelcome";

export const UserHomePage = () => {
  return (
    <>
      <UserNavbar />
      <div>
        <div className="about-background2">
          <h5 className=" about-heading">
            Invest in everything
            <br />
            Online platform to invest in stocks, derivatives, mutual funds, and
            more
          </h5>
          {/* <img className="img-fluid about-image" src={img7} alt="" /> */}
          <UserWelcome />
          <h6 className="about-second-heading">
            “Our mission is to help every Indian confidently Up their wealth”
          </h6>
          <p className="about-pargaraph">
            To empower investors of all levels with real-time, insightful, and
            personalized
            <br />
            financial information, enabling informed decision-making and
            fostering <br />a community of knowledgeable and confident market
            participants.
          </p>

          <p className="about-pargaraph">
            To democratize access to the stock market by providing an intuitive,
            data-driven platform that offers real-time information, advanced
            analytics, and <br />
            personalized insights, empowering users to make informed investment
            decisions and achieve financial growth.
          </p>
          <div className="row about-middle-box">
            <div className="col">
              <img src={img8} alt="" />
              <p className="about-middle-box-heading">Accessible</p>
              <p className="about-middle-box-description">
                Powerful Desktop Platform <br />
                to all users
              </p>
            </div>
            <div className="col box1">
              <img src={img9} alt="" />
              <p className="about-middle-box-heading">Affordable</p>
              <p className="about-middle-box-description">
                Cost-Effective Solutions,
                <br />
                Strategic Market Engagement{" "}
              </p>
            </div>
            <div className="col">
              <img src={img10} alt="" />
              <p className="about-middle-box-heading">Simple</p>
              <p className="about-middle-box-description">
                Dedicated modes for investors
                <br />
                and traders support
              </p>
            </div>
          </div>
          <h4 className="">Our Vision</h4>

          <div className="row about-second-last-box">
            <div className="col ">
              <div className="about-second-last-inner-box2">
                <span> Cost-Effective Solution</span>
              </div>{" "}
              <br />
              <div className="about-second-last-inner-box2">
                <span>Tailored Investment Strategies</span>
              </div>
            </div>
            <div className="col">
              <div className="about-second-last-inner-box2">
                <span>Strategic Market Engagement</span>
              </div>
              <br />
              <div className="about-second-last-inner-box2">
                <span>Accessibility and Support</span>
              </div>
            </div>
            <div className="col">
              <div className="about-second-last-inner-box2">
                <span>Real-Time Insights</span>
              </div>
              <br />
              <div className="about-second-last-inner-box2">
                <span>Innovation and Adaptability</span>
              </div>
            </div>
          </div>
          <p className="about-pargaraph2">
            {" "}
            To empower investors of all levels with real-time, insightful, and
            personalized financial information, enabling informed
            decision-making and fostering <br />a community of knowledgeable and
            confident market participants.
          </p>
          <div className="row about-last-box2 pb-3">
            <div className="col ">
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
            <div className="col">
              <div className="about-last-inner-box">
                <p className="about-last-inner-box-head">Clients First</p>
                <p className="about-last-inner-box-text mt-3">
                  Our clients' success is paramount - their success is our
                  success.
                </p>
              </div>

              <div className="about-last-inner-box">
                <p className="about-last-inner-box-head">Objectivity</p>
                <p className="about-last-inner-box-text mt-3">
                  We assess every investment opportunity <br />
                  objectively and with total impartiality. <br />
                </p>
              </div>
            </div>
            <div className="col">
              <div className="about-last-inner-box">
                <p className="about-last-inner-box-head">Teamwork</p>
                <p className="about-last-inner-box-text mt-3">
                  Success is built on respect for each individual. <br />
                </p>
              </div>
              <div className="about-last-inner-box">
                <p className="about-last-inner-box-head">Citizenship</p>
                <p className="about-last-inner-box-text mt-3" >
                  we are profoundly aware of our responsibilities. 
                  
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="userHome-footer2 ">
        <Footer2 />
      </div>
    </>
  );
};
