import "./userNavbar.css";
import img1 from "../../../assets/images/Frame 339.png";
import img2 from "../../../assets/images/navbarLogo.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { faL } from "@fortawesome/free-solid-svg-icons";
import { CgProfile } from "react-icons/cg";

export const UserNavbar = () => {
  const [companiesDropdown, setCompaniesDropdown] = useState(false);
  const [stocksDropdown, setStocksDropdown] = useState(false);
  const [articleDropdown, setArticleDropdown] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);
  const [tutorDropdown, setTutorDropdown] = useState(false);
  const navigate = useNavigate();
  const userLogout = () => {
    navigate("/userLogin");
  };
  const redirectUserHome = () => {
    navigate("/userHome");
  };

  const redirectUserAbout = () => {
    navigate("/userabout");
  };

  const redirectCompanies = () => {
    navigate("/userViewCompany");
  };
  const redirectUpcomingCompanies = () => {
    navigate("/upComingCompanies");
  };
  const redirectListedCompanies = () => {
    navigate("/listedCompanies");
  };
  const redirectToTutor = () => {
    navigate("/userViewEt");
  };

  const toggleCompanyDropdown = () => {
    setStocksDropdown(false);
    setArticleDropdown(false);
    setCompaniesDropdown(!companiesDropdown);
    setProfileDropdown(false);
    setTutorDropdown(false);
  };

  const toggleStockDropdown = () => {
    setCompaniesDropdown(false);
    setArticleDropdown(false);
    setStocksDropdown(!stocksDropdown);
    setProfileDropdown(false);
    setTutorDropdown(false);
  };
  const toggleArticleDropdown = () => {
    setStocksDropdown(false);
    setCompaniesDropdown(false);
    setArticleDropdown(!articleDropdown);
    setProfileDropdown(false);
    setTutorDropdown(false);
  };
  const toggleProfileDropdowm = () => {
    setStocksDropdown(false);
    setCompaniesDropdown(false);
    setArticleDropdown(false);
    setTutorDropdown(false);
    setProfileDropdown(!profileDropdown);
  };
  const toggleTutorsDropdowm = () => {
    setTutorDropdown(!tutorDropdown);
    setStocksDropdown(false);
    setCompaniesDropdown(false);
    setArticleDropdown(false);
    setProfileDropdown(false);
  };
  const redirectBuyStocks = () => {
    navigate("/buyStocks");
  };

  const redirectPortfolio = () => {
    navigate("/viewPortfolio");
  };
  const reDirectToTutorArticle = () => {
    navigate("/tutorArticle");
  };
  const reDirectToCoArticle = () => {
    navigate("/companyArticles");
  };
  const reDirectToUserProfile = () => {
    navigate(`/userProfile`);
  };
  return (
    <div>
      <nav className="navbar commonNavbar">
        <div className="container">
          <a className="navbar-brand commonNavbar-image" href="#">
            <img src={img1} alt="Navbar Logo" />
          </a>
          <div
            className="commonNavbar-right user-navbar d-flex  align-items-center justify-content-between"
            style={{ width: "500px" }}
          >
            <h6 className="text-light fw-bold" onClick={redirectUserHome}>
              Home
            </h6>

            <h6 className="text-light fw-bold" onClick={toggleCompanyDropdown}>
              Companies
            </h6>
            {companiesDropdown && (
              <div className="position-relative">
                <div className="position-absolute text-light user-home-nav-drop d-flex flex-column">
                  <div
                    className="user-home-nav-drop-down"
                    onClick={redirectListedCompanies}
                  >
                    Listed Companies
                  </div>
                  <div
                    className="user-home-nav-drop-down"
                    onClick={redirectUpcomingCompanies}
                  >
                    Upcoming IPOs
                  </div>
                  <div
                    className="user-home-nav-drop-down"
                    onClick={redirectCompanies}
                  >
                    All Companies
                  </div>
                  {/* <div className="user-home-nav-drop-down">
                    Access Dashboard
                  </div> */}
                </div>
              </div>
            )}
            <h6 className="text-light fw-bold" onClick={toggleTutorsDropdowm}>
              Tutors
            </h6>
            {tutorDropdown && (
              <div className="position-relative">
                <div className="position-absolute text-light user-home-nav-drop d-flex flex-column">
                  <div
                    className="user-home-nav-drop-down"
                    onClick={redirectToTutor}
                  >
                    Active Tutors
                  </div>
                </div>
              </div>
            )}

            <h6 className="text-light fw-bold" onClick={toggleStockDropdown}>
              Stocks
            </h6>

            {stocksDropdown && (
              <div className="position-relative">
                <div className="position-absolute text-light user-home-nav-drop d-flex flex-column">
                  <div
                    className="user-home-nav-drop-down"
                    onClick={redirectBuyStocks}
                  >
                    Buy Stocks
                  </div>
                  <div
                    className="user-home-nav-drop-down"
                    onClick={redirectPortfolio}
                  >
                    Portfolio
                  </div>
                </div>
              </div>
            )}

            <h6 className="text-light fw-bold" onClick={toggleArticleDropdown}>
              Articles
            </h6>

            {articleDropdown && (
              <div className="position-relative">
                <div className="position-absolute text-light user-home-nav-drop d-flex flex-column">
                  <div
                    className="user-home-nav-drop-down"
                    onClick={reDirectToTutorArticle}
                  >
                    Tutor Articles
                  </div>
                  <div
                    className="user-home-nav-drop-down"
                    onClick={reDirectToCoArticle}
                  >
                    Company Articles
                  </div>
                </div>
              </div>
            )}

            <h6 className="text-light fw-bold" onClick={redirectUserAbout}>
              About
            </h6>

            <h6
              className="text-light fs-2 mb-3"
              onClick={toggleProfileDropdowm}
            >
              <CgProfile />
            </h6>

            {profileDropdown && (
              <div className="position-relative">
                <div className="position-absolute text-light user-home-nav-drop d-flex flex-column">
                  <div
                    className="user-home-nav-drop-down"
                    onClick={reDirectToUserProfile}
                  >
                    Profile
                  </div>
                  <div className="user-home-nav-drop-down" onClick={userLogout}>
                    Logout
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};
