import "./userNavbar.css";
import img1 from "../../../assets/images/Frame 339.png";
import img2 from "../../../assets/images/navbarLogo.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const UserNavbar = () => {
  const [companiesDropdown, setCompaniesDropdown] = useState(false);
  const [stocksDropdown, setStocksDropdown] = useState(false);
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

  const toggleCompanyDropdown = () => {
    setStocksDropdown(false)
    setCompaniesDropdown(!companiesDropdown);
  };

  const toggleStockDropdown = () => {
    setCompaniesDropdown(false)
    setStocksDropdown(!stocksDropdown);
  }

  const redirectBuyStocks = () => {
    navigate('/buyStocks')
  }
  
  const redirectPortfolio = () => {

  }

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
                  <div className="user-home-nav-drop-down">
                    Access Dashboard
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
            <h6 className="text-light fw-bold" onClick={redirectUserAbout}>
              About
            </h6>
            <h6 className="text-danger fw-bold" onClick={userLogout}>
              Logout
            </h6>
          </div>
        </div>
      </nav>
    </div>
  );
};
