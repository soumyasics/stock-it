import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "./App.css";

import CommonNavbar from "./components/common/commonNavbar";
import LandingPageHeader from "./components/common/landingPage-2";

import CompanyRegistration from "./components/company/CompanyRegistration";
import AdminLogin from "./components/adminLogin/AdminLogin";
import About from "./components/common/About";
import { CompanyPendingRequest } from "./components/company/CompanyRequest";
import AdminSidebar from "./components/common/adminSidebar";

import AdminNavbar from "./components/common/adminNavbar";
import Resetpassword from "./components/company/resetPassword";
import RequestPage from "./components/company/requestPage";
import CompanyLogin from "./components/company/CompanyLogin/companyLogin";
import { Toaster } from "react-hot-toast";
import { UserRegistration } from "./components/user/userRegistration/userRegistration";
import { UserHomePage } from "./components/user/userHome/userHome";
import { UserLogin } from "./components/user/userLogin/userLogin";
import { UserViewCompanies } from "./components/user/viewCompanies/viewCompanies";
import { CompanyHome } from "./components/company/companyHome/companyHome";
import NewAdminsidebar from "./components/AdminNewSidebar/newAdminsidebar";
import { ViewCompanyDetails } from "./components/user/viewCompaniesDetails/viewCompaniesDetails";
import { CompanySidebar } from "./components/company/companySidebar/companySidebar";
import { IpoForm } from "./components/company/Ipoform/ipoForm";
import Forgotpassword from "./components/common/forgetPassword/forgotpassword";

import { EtUserHomePage } from "./components/educational-tutors/et-userHome/EtUserHome";
import Gainer from "./components/Admin/Gainer/gainer";
import Loser from "./components/Admin/Losers/loser";
import SectorPerform from "./components/Admin/SectorPerform/sectorPerform";
import Requestfrom from "./components/Admin/Requestpage/requestfrom";
import StockProfit from "./components/Admin/StockProfit/stockProfit";
import AdminCount from "./components/Admin/Admincount/adminCount";
import { CompanyAbout } from "./components/company/companyAbout/companyAbout";
import { CompanyDashboard } from "./components/company/companyDashboard/companyDashboard";
import { AdminDashboard } from "./components/Admin/adminDashboard/adminDashboard";
import EtSignup from "./components/educational-tutors/et-signup/et-signup";
import Etlogin from "./components/educational-tutors/et-login/et-login";
import { AdminViewAllCompanies } from "./components/Admin/adminViewAllcompanies/adminViewAllCompanies";
import { AdminViewCompanyDetails } from "./components/Admin/adminViewCompanyDetails/adminViewCompanyDetails";
import { AdminViewAllUsers } from "./components/Admin/adminViewAllusers/adminViewAllUsers";
import { AdminIPOPendingList } from "./components/Admin/adminIpoPending/adminIpoPending";
import { AdminViewIPODetails } from "./components/Admin/adminViewIPODetails/adminViewIPODetails";
import Etdashboard from "./components/educational-tutors/et-dashboard/et-dashboard";
import { AdminETRequestDetails } from "./components/Admin/etRequestDetails/adminEtRequestDetails";
import Etsidebar from "./components/educational-tutors/et-sidebar/etsidebar";
import Etnavbar from "./components/educational-tutors/et-navbar/etnavbar";
import EtForgotpassword from "./components/educational-tutors/et-forgotpassword/etForgotpassword";
import UserForgotpassword from "./components/user/userForgotpasword/userForgotpassword";
import CompanyForgotpassword from "./components/company/companyForgotpassword/companyForgotpassword";
import AdminViewUserDetail from "./components/Admin/AdminViewUserDetail/adminViewUserDetail";

import { AdminViewAllETs } from "./components/Admin/viewAllETs/viewAllEts";
import { AdminViewETDetails } from "./components/Admin/viewEtDetails/viewEtDetails";
import EtAddArticle from "./components/educational-tutors/et-AddArticle/etAddArticle";
import { UpcomingCompanies } from "./components/user/viewUpcomingCompanies/upcomingCompanies";
import { ListedCompanies } from "./components/user/viewUpcomingCompanies/listedCompanies";
import { BuyStocks } from "./components/user/buyStocks/buyStocks";
import { StockDetails } from "./components/user/stockDetails/stockDetails";
import { EtviewArticleList } from "./components/educational-tutors/et-ViewArticleList/et-viewArticleList";

import UserViewEtArticle from "./components/user/userViewEtArticles/userViewEtArticle";
import CompanyArticleList from "./components/company/companyArticleList/companyArticleList";
import CompanyAddArticle from "./components/company/companyAddArticles/companyAddArticle";
import { MyPortfolio } from "./components/user/viewPortfolio/viewPortfolio";
import { PortfolioDetails } from "./components/user/viewPortfolio/portfolioDetails";
import CompanyViewArticle from "./components/company/companyViewArticles/companyViewArticle";
import EtviewArticle from "./components/educational-tutors/et-ViewArticle/et-viewArticle";
import UserViewCoArticles from "./components/user/userViewCoArticles/userViewCoArticles";
import CompanyAddComplaint from "./components/company/companyAddComplaint/companyAddComplaint";
import UserProfile from "./components/user/userProfile/userProfile";
import AdminTakeAction from "./components/Admin/adminTakeAction/adminTakeAction";
import AdminViewCoComplaint from "./components/Admin/adminViewCoComplaint/adminViewCoComplaint";
import AdminViewCoComplaintDetail from "./components/Admin/adminViewCoComplaintDetail/adminViewCoComplaintDetail";
import CompanyViewUser from "./components/company/companyViewuser/companyViewUser";
import CompanyViewUserdetails from "./components/company/companyViewUserDetails/companyViewUserdetails";
import AdminViewUserComplaint from "./components/Admin/adminViewUserComplaint/adminViewUserComplaint";
import AdminViewUserComplaintDetails from "./components/Admin/adminViewuserComplaintDetails/adminViewUserComplaintDetails";
import AdminNotification from "./components/Admin/adminNotification/adminNotification";
import EditModal from "./components/user/userEditProfile/userEditProfile";
import EtProfile from "./components/educational-tutors/etProfile/etProfile";
import CompanyDivident from "./components/company/companyDivident/companyDivident";
import UserViewTutors from "./components/user/userViewTutors/userViewTutors";
import UserViewEtDetail from "./components/user/userViewEtDetail/userViewEtDetail";
import AdminViewEtComplaint from "./components/Admin/adminViewEtComplaint/adminViewEtComplaint";
import AdminViewEtComplaintDetail from "./components/Admin/adminViewEtComplaintDetail/adminViewEtComplaintDetail";
import AdminViewBroughtStock from "./components/Admin/adminViewBroughtStock/adminViewBroughtStock";
import { TutorRating } from "./components/user/userRatingTutor/userRatingTutor";
import AdminViewEtRating from "./components/Admin/adminEtRating/adminViewEtRating";
import { ViewETSubs } from "./components/educational-tutors/et-viewSubs/et-viewsubs";
import { CompanyViewBuyOrders } from "./components/company/viewOrders/buyOrders";
import { CompanyViewBuyOrderDetails } from "./components/company/viewOrders/orderDetails";
import { UserDashboard } from "./components/user/userDashboard/userDashboard";
import { UserDashboardParams } from "./components/user/userDashboard/userDashboardParams";
import { AdminViewActiveCompanies } from "./components/Admin/adminViewAllcompanies/adminViewAllCompanies copy";
import { AdminAllIPO } from "./components/Admin/adminAllIPOs/adminallIPO";
import UserDashDefaultPage from "./components/user/userDashboardDefaultPage/userDashDefaultPage";
import CompanyProfileDividend from "./components/company/companyProfileDividend/companyProfileDividend";

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter basename="stock_it">
        <Routes>
          <Route path="/" element={<LandingPageHeader />} />

          {/* company pages */}

          <Route path="/companyHome" element={<CompanyHome />} />
          <Route path="/companyAbout" element={<CompanyAbout />} />
          <Route path="/ipoform" element={<IpoForm />} />
          <Route
            path="/CompanyRegistration"
            element={<CompanyRegistration />}
          />
          <Route
            path="/companylogin"
            element={[<CommonNavbar />, <CompanyLogin />]}
          />
          <Route path="/companyrequest" element={<CompanyPendingRequest />} />
          <Route path="/companyDetails/:id" element={<ViewCompanyDetails />} />
          <Route path="/requestpage/:id" element={<RequestPage />} />
          <Route path="/companysidebar" element={<CompanySidebar />} />
          <Route path="/company-dashboard" element={<CompanyDashboard />} />
          {/* company new */}
          <Route
            path="/companyForgotpassword"
            element={<CompanyForgotpassword />}
          />
          <Route
            path="/CompanyArticleList/:id"
            element={<CompanyArticleList />}
          />
          <Route path="/companyAddArticles" element={<CompanyAddArticle />} />
          <Route path="/companyViewBuyOrders" element={<CompanyViewBuyOrders />} />
          <Route path="/companyViewBuyOrders/:id" element={<CompanyViewBuyOrderDetails />} />
          <Route
            path="/companyViewArticles/:id/:userType"
            element={<CompanyViewArticle />}
          />
          <Route
            path="/companyAddComplaint"
            element={<CompanyAddComplaint />}
          />
          <Route path="/companyViewUser" element={<CompanyViewUser />} />
          <Route
            path="/companyViewUserDetails/:id"
            element={<CompanyViewUserdetails />}
          />
          <Route path="companyDividend" element={<CompanyDivident />} />
          <Route path="/companyProfileDividend" element={<CompanyProfileDividend/>}/>
          {/* user pages  */}
          <Route path="/userRegistration" element={<UserRegistration />} />
          <Route path="/userHome" element={<UserHomePage />} />
          <Route path="/userLogin" element={<UserLogin />} />

          <Route path="/userViewCompany" element={<UserViewCompanies />} />
          <Route path="/upComingCompanies" element={<UpcomingCompanies />} />
          <Route path="/listedCompanies" element={<ListedCompanies />} />
          <Route path="/buyStocks" element={<BuyStocks />} />
          <Route path="/buyStocks/:id" element={<StockDetails />} />
          <Route path="/viewPortfolio" element={<MyPortfolio />} />
          <Route path="/viewPortfolio/:id" element={<PortfolioDetails />} />

          {/* <Route path="/usersidebar" element={<UserSidebar />} /> */}
          {/* <Route path="/userabout" element={<UserHomePage />} /> */}
          <Route path="/userabout" element={<EtUserHomePage />} />
          <Route path="/et" element={<EtUserHomePage />} />
          {/* user new */}
          <Route path="/userForgotpassword" element={<UserForgotpassword />} />
          <Route path="/tutorArticle" element={<UserViewEtArticle />} />
          <Route path="/companyArticles" element={<UserViewCoArticles />} />
          <Route path="/userProfile" element={<UserProfile />} />
          <Route path="/editProfile" element={<EditModal />} />
          <Route path="/userViewEt" element={<UserViewTutors />} />
          <Route path="/userViewEtDetail/:id" element={<UserViewEtDetail />} />
          <Route path="/userRatingTutor" element={<TutorRating/>}/>
          <Route path="/userDashboard" element={<UserDashboard/>}/>
          <Route path="/userDashboard/:id" element={<UserDashboardParams/>}/>
          <Route path="/userDashboardDefault" element={<UserDashDefaultPage/>}/>

          {/* admin pages  */}
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/AdminLogin" element={<AdminLogin />} />
          <Route
            path="/admin-resetPassword"
            element={[<AdminNavbar />, <Resetpassword />]}
          />

          <Route path="/adminsidebar" element={<AdminSidebar />} />
          <Route path="/commonNavbar" element={<CommonNavbar />} />
          <Route path="/landingheader" element={<LandingPageHeader />} />
          <Route path="/landingAbout" element={[<CommonNavbar />, <About />]} />
          <Route path="/adminViewUsers" element={<AdminViewAllUsers />} />
          <Route path="/adminViewCompany" element={<AdminViewAllCompanies />} />
          <Route path="/adminActiveCompany" element={<AdminViewActiveCompanies />} />
          <Route
            path="/adminViewPendingIPOs"
            element={<AdminIPOPendingList />}
          />
          <Route path="/adminViewAllETs" element={<AdminViewAllETs />} />
          <Route path="/adminViewAllETs/:id" element={<AdminViewETDetails />} />

          <Route
            path="/adminViewCompany/:id"
            element={<AdminViewCompanyDetails />}
          />

          <Route
            path="/adminETRequestDetails/:id"
            element={<AdminETRequestDetails />}
          />

          <Route path="/adminIPOPending" element={<AdminIPOPendingList />} />
          <Route path="/adminAllIPOs" element={<AdminAllIPO />} />
          <Route
            path="/adminIPOPending/:id"
            element={<AdminViewIPODetails />}
          />
          <Route
            path="/adminVIewUserDetail/:id"
            element={<AdminViewUserDetail />}
          />
          {/* admin new */}
          <Route path="/adminTakeAction" element={<AdminTakeAction />} />
          <Route
            path="/adminViewCoComplaint"
            element={<AdminViewCoComplaint />}
          />
          <Route
            path="/adminViewCoComplaintDetail/:id"
            element={<AdminViewCoComplaintDetail />}
          />
          <Route
            path="/adminViewUserComplaint"
            element={<AdminViewUserComplaint />}
          />
          <Route
            path="/adminViewUserComplaintDetails/:id"
            element={<AdminViewUserComplaintDetails />}
          />
          <Route path="/adminNotification" element={<AdminNotification />} />
          <Route
            path="/adminViewEtComplaint"
            element={<AdminViewEtComplaint />}
          />
          <Route
            path="/adminViewEtComplaintDetail/:id"
            element={<AdminViewEtComplaintDetail />}
          />
          <Route path="/adminViewBroughtStock" element={<AdminViewBroughtStock/>}/>
          <Route path="/adminViewEtRating" element={<AdminViewEtRating/>}/>
          {/* et-new */}
          <Route path="/etdashboard" element={<Etdashboard />} />
          <Route path="/etsidebar" element={<Etsidebar />} />
          <Route path="/etnavbar" element={<Etnavbar />} />
          <Route path="/etForgotpassword" element={<EtForgotpassword />} />
          <Route path="/etSubs" element={<ViewETSubs />} />
          <Route path="/addArticle" element={<EtAddArticle />} />
          <Route
            path="/viewEtArticleList/:id"
            element={<EtviewArticleList />}
          />
          <Route path="/viewEtArticle/:id/:userType" element={<EtviewArticle />} />
          <Route path="/etprofile" element={<EtProfile />} />

          {/* new  */}
          <Route path="/newsidebar" element={<NewAdminsidebar />} />
          <Route path="/etsignup" element={<EtSignup />} />
          <Route path="/etlogin" element={<Etlogin />} />

          <Route path="/adminNavbar" element={<AdminNavbar />} />

          <Route
            path="/admincompanyDetails/:id"
            element={<ViewCompanyDetails />}
          />

          <Route path="/forgotpassword" element={<Forgotpassword />} />

          {/* Admin components */}
          <Route path="/gainer" element={<Gainer />} />
          <Route path="/loser" element={<Loser />} />
          <Route path="/sectorperform" element={<SectorPerform />} />
          <Route path="/requestfrom" element={<Requestfrom />} />
          <Route path="/stockprofit" element={<StockProfit />} />
          <Route path="/admincount" element={<AdminCount />} />

          <Route path="/*" element={"<h1> 404 </h1>"} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
